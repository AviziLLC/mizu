import {CardSchema, CardTypeToSchemaMap} from "./CardType";

export type Card<T extends CardSchema> = {
    id: string;
    type: T;
    front: any;
    back: any;
}