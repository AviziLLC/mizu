import {BasicCardSchema, CardSchema, HtmlRawString} from "../types/card/CardSchema";
import {CardType, CardTypeToSchemaMap} from "../types/card/CardType";
import {create} from "ionicons/icons";

export async function createCard<T extends CardType>(
    front: CardTypeToSchemaMap[T]['front'],
    back: CardTypeToSchemaMap[T]['back']
) {
    // todo create card in db
    // todo return card
}

export async function createBasicCard(front: HtmlRawString, back: HtmlRawString) {
    return createCard<'Basic'>(front, back)
}

export async function createBasicAndReversedCard(front: HtmlRawString, back: HtmlRawString) {
    return createCard<'BasicAndReversed'>(front, back);
}

export async function createClozeCard(front: HtmlRawString, text: HtmlRawString, extraText: HtmlRawString) {
    return createCard<'Cloze'>(front, {text, extraText});
}

export async function createImageOcclusionCard(front: HtmlRawString, back: HtmlRawString) {
    return createCard<'ImageOcclusion'>(front, back)
}

export async function createCardFromCustomType() {
    // todo
}

export async function modifyCard(cardId: string) {
    // todo
}

export async function deleteCard(cardId: string) {
    // todo - make sure to delete associated media
}