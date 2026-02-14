import {CardTypeMap} from "./CardType";

export type Card<T extends keyof CardTypeMap = keyof CardTypeMap> = {
    id: string;
    type: T;
    front: CardTypeMap[T]['front'];
    back: CardTypeMap[T]['back']
}