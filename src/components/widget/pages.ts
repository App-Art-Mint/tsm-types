import type { PropsWithClasses } from '@/props';

export type WidgetPagesProps = PropsWithClasses & {
	page?: number;
	pageCount?: number;
	onPageChange?: (page: number) => void;
};
