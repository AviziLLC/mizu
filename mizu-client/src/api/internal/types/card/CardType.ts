import {ClozeField, ImageOcclusionField, MarkdownField} from "../field/FieldType";

export const CardType = {
    BASIC: 'basic',
    CLOZE: 'cloze',
    IMAGE_OCCLUSION: 'imageOcclusion'
}

export interface CardTypeMap {
    basic: {
        front: MarkdownField;
        back: MarkdownField;
    };
    cloze: {
        front: ClozeField;
        back: {
            text: MarkdownField;
            extra: MarkdownField;
        }
    }
    imageOcclusion: {
        front: ImageOcclusionField;
        back: {
            image: Blob;
            extra: MarkdownField;
        }
    }
}