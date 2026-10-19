export type TitleNum = 1 | 2 | 3 | 4 | 5 | 6;

export type HeadingTag = `h${TitleNum}`;

export type UiTitleProps = {
	level?: TitleNum;
	size?: TitleNum;
	title?: string;
	subtitle?: string;
	sanitize?: boolean;
};

export type PropsWithTitle = {
	title?: UiTitleProps;
};
