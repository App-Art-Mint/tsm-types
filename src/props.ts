import type { GridNum } from '@/components/section/grid';
import type { Side } from '@/side';

export type PropsWithId = {
	id?: string;
};

export type PropsWithClasses = {
	classes?: string[];
};

export type PropsWithSanitized = {
	sanitized?: boolean;
};

export type PropsWithBoxPosition = {
	position?: Side;
};

export type PropsWithColumns = {
	columns?: GridNum;
};
