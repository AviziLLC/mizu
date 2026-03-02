import {Capacitor} from '@capacitor/core';
import {Filesystem, Directory, Encoding} from '@capacitor/filesystem';

const isElectron = (): boolean => {
    return typeof window !== 'undefined' && typeof window.process === 'object' && (window.process as any).type === 'renderer';
};

const isCapacitor = (): boolean => {
    return Capacitor.isNativePlatform();
};

const DB_NAME = 'MizuVirtualFS';
const STORE_NAME = 'files';

const getWebDB = async (): Promise<IDBDatabase> => {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(DB_NAME, 1);
        request.onupgradeneeded = (event: any) => {
            const db = event.target.result;
            if (!db.objectStoreNames.contains(STORE_NAME)) {
                db.createObjectStore(STORE_NAME);
            }
        };
        request.onsuccess = (event: any) => resolve(event.target.result);
        request.onerror = (event: any) => reject(event.target.error);
    });
};

const webVFS = {
    async write(key: string, content: string) {
        const db = await getWebDB();
        return new Promise<void>((resolve, reject) => {
            const tx = db.transaction(STORE_NAME, 'readwrite');
            const store = tx.objectStore(STORE_NAME);
            const req = store.put(content, key);
            req.onsuccess = () => resolve();
            req.onerror = () => reject(req.error);
        });
    },
    async read(key: string): Promise<string | null> {
        const db = await getWebDB();
        return new Promise((resolve, reject) => {
            const tx = db.transaction(STORE_NAME, 'readonly');
            const store = tx.objectStore(STORE_NAME);
            const req = store.get(key);
            req.onsuccess = () => resolve(req.result || null);
            req.onerror = () => reject(req.error);
        });
    },
    async exists(key: string): Promise<boolean> {
        const val = await this.read(key);
        return val !== null;
    }
};

export async function createDir(path: string) {
    path = `${path}`.replace(/\/+/g, '/');

    if (isCapacitor()) {
        try {
            await Filesystem.mkdir({
                path: path,
                directory: Directory.Data,
                recursive: true,
            });
        } catch (e) {
            console.warn('Capacitor mkdir warning:', e);
        }
    } else if (isElectron()) {
        const fs = window.require('fs').promises;
        await fs.mkdir(path, {recursive: true});
    } else {
        // Create a marker key to simulate existence.
        await webVFS.write(`${path}/.keep`, '');
    }
}

export async function doesDirExist(path: string): Promise<boolean> {
    if (isCapacitor()) {
        try {
            const stat = await Filesystem.stat({
                path,
                directory: Directory.Data,
            });
            return stat.type === 'directory';
        } catch {
            return false;
        }
    } else if (isElectron()) {
        try {
            const fs = window.require('fs').promises;
            const stat = await fs.stat(path);
            return stat.isDirectory();
        } catch {
            return false;
        }
    } else {
        // Check for the marker file or any file starting with this path
        // For simplicity, we check the marker created in createDir
        return await webVFS.exists(`${path}/.keep`);
    }
}

export async function writeFile(path: string, content: string) {
    if (isCapacitor()) {
        await Filesystem.writeFile({
            path,
            data: content,
            directory: Directory.Data,
            encoding: Encoding.UTF8,
        });
    } else if (isElectron()) {
        const fs = window.require('fs').promises;
        await fs.writeFile(path, content, 'utf-8');
    } else {
        await webVFS.write(path, content);
    }
}

export async function readFile(path: string): Promise<string> {
    if (isCapacitor()) {
        const result = await Filesystem.readFile({
            path,
            directory: Directory.Data,
            encoding: Encoding.UTF8,
        });
        return result.data as string;
    } else if (isElectron()) {
        const fs = window.require('fs').promises;
        return await fs.readFile(path, 'utf-8');
    } else {
        // Web VFS
        const content = await webVFS.read(path);
        if (content === null) {
            throw new Error(`File not found: ${path}`);
        }
        return content;
    }
}

// Helper for TypeScript to recognize window.require in Electron
declare global {
    interface Window {
        require: (module: string) => any;
        process: any;
    }
}