export type HtmlRawString = string;

/**
 * Card schema represents the fields of the card type.
 */
export interface MizuBuiltInCardSchema {
    front: unknown;
    back: unknown;
}

export interface BasicCardSchema extends MizuBuiltInCardSchema {
    front: HtmlRawString;
    back: HtmlRawString;
}

export interface BasicAndReversedCardSchema extends MizuBuiltInCardSchema {
    front: HtmlRawString;
    back: HtmlRawString;
}

export interface ClozeCardSchema extends MizuBuiltInCardSchema {
    front: HtmlRawString;
    back: {
        text: HtmlRawString;
        extraText: HtmlRawString;
    }
}

export interface ImageOcclusionCardSchema extends MizuBuiltInCardSchema {
    front: HtmlRawString;
    back: HtmlRawString;
}

export type CustomCardSchema = Record<string, unknown>;
