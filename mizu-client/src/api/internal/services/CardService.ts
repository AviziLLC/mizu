import {BasicCardSchema, CardSchema, CardType, CardTypeToSchemaMap} from "../types/card/CardType";
import {
    CardTemplate,
    CardTemplateAny,
    CardTemplateBasic,
    CardTemplateBasicReversed,
    CardTemplateCloze, CardTemplateCustom, CardTemplateImageOcclusion
} from "../types/card/CardTemplate";
import {Card} from "../types/card/Card";

import {MarkdownFieldContent} from "../types/field/FieldContent";

export async function createCard<T extends CardSchema>(
    front: T['front'],
    back: T['back']
) {
    // todo create card in db
    // todo return card
}

export async function createBasicCard(front: MarkdownFieldContent, back: MarkdownFieldContent) {

    return createCard<BasicCardSchema>(front, back)
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