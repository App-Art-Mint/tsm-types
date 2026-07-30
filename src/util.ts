export type Prettify<T> = {
	[K in keyof T]: T[K];
} & {};

export type HasId<T> = Omit<T, 'id'> & {
	id: string;
};
