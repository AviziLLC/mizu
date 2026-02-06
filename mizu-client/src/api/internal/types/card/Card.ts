import {
    CardTemplateBasic,
    CardTemplateBasicReversed,
    CardTemplateCloze,
    CardTemplateImageOcclusion
} from "./CardTemplate";
import {CardType} from "./CardType";

export type Card =
    | { cardType: CardType.BASIC; fields: CardTemplateBasic }
    | { cardType: CardType.BASIC_REVERSED; fields: CardTemplateBasicReversed }
    | { cardType: CardType.CLOZE; fields: CardTemplateCloze }
    | { cardType: CardType.IMAGE_OCCLUSION; fields: CardTemplateImageOcclusion };