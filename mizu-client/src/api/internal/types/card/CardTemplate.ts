import {CardType} from "./CardType";

interface CardTemplate {
    cardType: CardType;
}

export interface CardTemplateBasic extends CardTemplate {
    cardType: CardType.BASIC;
    front: string;
    back: string;
}

export interface CardTemplateBasicReversed extends CardTemplate {
    cardType: CardType.BASIC_REVERSED;
    front: string;
    back: string;
}

export interface CardTemplateCloze extends CardTemplate {
    cardType: CardType.CLOZE;
    text: string;
}

export interface CardTemplateImageOcclusion extends CardTemplate {
    cardType: CardType.IMAGE_OCCLUSION;
    // todo: image occlusions
}

export interface CardTemplateCustom extends CardTemplate {
    // todo
}

export type CardTemplateAny =
    | CardTemplateBasic
    | CardTemplateBasicReversed
    | CardTemplateCloze
    | CardTemplateImageOcclusion;
