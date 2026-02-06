import {Card} from "./Card";

/**
 * Deck that can contain cards and also sub-decks.
 */
export interface Deck {
    /**
     * The display name of the deck, also functions as a unique ID.
     */
    name: string;

    /**
     * The cards in the deck. Can be empty.
     */
    cards: Card[];

    /**
     * The sub-decks in the deck. Can be empty.
     */
    subDecks: Deck[];
}