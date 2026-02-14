export interface FieldTypeMap {
    markdown: MarkdownField;
    cloze: ClozeField;
    imageOcclusion: ImageOcclusionField;
}

/**
 * Supports full Markdown with latex, images, etc.
 * TODO: document extent of support
 */
export type MarkdownField = string;
export type ClozeField = MarkdownField;
export type ImageOcclusionField = Blob;