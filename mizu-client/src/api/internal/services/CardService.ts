import {BasicCardSchema, CardSchema, HtmlRawString} from "../types/card/CardSchema";

export async function createCard<T extends CardSchema>(
    front: T['front'],
    back: T['back']
) {
    // todo create card in db
    // todo return card
}

export async function createBasicCard(front: HtmlRawString, back: HtmlRawString) {

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