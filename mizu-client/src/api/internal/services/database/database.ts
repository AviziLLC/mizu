import {Collection} from "../collection/collection";
import {Deck} from "../collection/deck/Deck";
import {MediaType} from "./MediaType";
import {createDir, doesDirExist, readFile, writeFile} from "../filesystem/filesystem";

const MIZU_FOLDER_PATH; // TODO the current folder being used for the app - needs to support electron, capacitor, and web (for mizu sync)
const COLLECTION_FILE_PATH = `${MIZU_FOLDER_PATH}/collection.json`
const DECKS_DIR = `${MIZU_FOLDER_PATH}/decks`

export async function saveCollection(collection: Collection) {
    return await writeFile(COLLECTION_FILE_PATH, JSON.stringify(collection));
}

export async function loadCollection(): Promise<Collection> {
    const rawString = await readFile(COLLECTION_FILE_PATH)
    try {
        return JSON.parse(rawString) as Collection;
    } catch (err) {
        console.error(err);
        throw new Error('[LoadCollection]: Failed to parse collection.json due to invalid formatting.')
    }
}

// todo evaluate performance with large decks
export async function saveDeck(deck: Deck) {
    const dir: string = DECKS_DIR
    const finalPath = `${dir}/${deck.id}.json`
    if (!(await doesDirExist(dir))) {
        await createDir(dir)
    }

    await writeFile(finalPath, JSON.stringify(deck));
}

export async function loadDeck(deckId: string): Promise<Deck> {
    // Load deck.json with all cards and subdecks already included.
    const rawString: string = await readFile(DECKS_DIR + `/${deckId}'.json'}`)
    return JSON.parse(rawString) as Deck;
}

// todo - fix types for media
export async function saveMedia(mediaType: MediaType, media: any) {
    // todo
}

export async function saveImage(image: any) {
    return saveMedia(MediaType.Image, image);
}

export async function saveAudio(audio: any) {
    return saveMedia(MediaType.Audio, audio);
}

export async function saveVideo(video: any) {
    return saveMedia(MediaType.Video, video);
}