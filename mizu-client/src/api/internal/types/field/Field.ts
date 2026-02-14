import {FieldTypeMap} from "./FieldType";

export interface Field<T extends keyof FieldTypeMap = keyof FieldTypeMap> {
    type: T;
    content: FieldTypeMap[T];
}

