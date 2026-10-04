export type Primitive = string | number | boolean | undefined;

export type JsonRecord = Record<string, Primitive | Primitive[] | JsonRecord[]>;
