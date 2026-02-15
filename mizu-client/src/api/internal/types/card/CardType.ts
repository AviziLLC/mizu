import {BasicAndReversedCardSchema, BasicCardSchema, ClozeCardSchema, ImageOcclusionCardSchema} from "./CardSchema";

export type CardType = 'Basic' | 'BasicAndReversed' | 'Cloze' | 'ImageOcclusion';

export interface CardTypeToSchemaMap {
    Basic: BasicCardSchema,
    BasicAndReversed: BasicAndReversedCardSchema,
    Cloze: ClozeCardSchema,
    ImageOcclusion: ImageOcclusionCardSchema
}