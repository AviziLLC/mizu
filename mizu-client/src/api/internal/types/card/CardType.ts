import {
    ClozeBackFieldContent,
    ClozeFrontFieldContent,
    ImageOcclusionFieldContent,
    MarkdownFieldContent
} from "../field/FieldContent";

/**
 * Card schema represents the fields of the card type.
 */
export interface CardSchema {
    front: any;
    back: any;
}

export interface BasicCardSchema extends CardSchema {
    front: MarkdownFieldContent;
    back: MarkdownFieldContent;
}

export interface ClozeCardSchema extends CardSchema {
    front: ClozeFrontFieldContent;
    back: {
        text: ClozeBackFieldContent;
        extra: MarkdownFieldContent;
    }
}

export interface ImageOcclusionCardSchema extends CardSchema {
    front: ImageOcclusionFieldContent;
    back: {
        image: Blob;
        extra: MarkdownFieldContent;
    }
}

export interface CardTypeToSchemaMap {
    basic: BasicCardSchema
    cloze: ClozeCardSchema,
    imageOcclusion: ImageOcclusionCardSchema
}