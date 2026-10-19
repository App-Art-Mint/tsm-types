import type { PropsWithClasses } from '@/props';

export type WidgetTableColumn = {
	key: string;
	title: string;
};

export type WidgetTableProps = PropsWithClasses & {
	columns?: WidgetTableColumn[];
	rows?: Record<string, string>[];
};
