import {CardType} from "../types/card/CardType";
import {
    CardTemplate,
    CardTemplateAny,
    CardTemplateBasic,
    CardTemplateBasicReversed,
    CardTemplateCloze, CardTemplateCustom, CardTemplateImageOcclusion
} from "../types/card/CardTemplate";

async function createCard(fields: CardTemplateAny, deckName: string) {
    // todo
}

export async function createBasicCard(fields: CardTemplateBasic, deckName: string) {
    // todo
}

export async function createBasicReversedCard(fields: CardTemplateBasicReversed, deckName: string) {
    // todo
}

export async function createClozeCard(fields: CardTemplateCloze, deckName: string) {
    // todo
}

export async function createImageOcclusionCard(fields: CardTemplateImageOcclusion, deckName: string) {
    // todo
}

export async function createCardFromCustomTemplate(fields: CardTemplateCustom, deckName: string) {
    // todo
}

export async function modifyCard(cardId: string) {
    // todo
}

export async function deleteCard(cardId: string) {
    // todo - make sure to delete associated media
}