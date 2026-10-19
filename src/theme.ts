export type Theme = 'system' | 'dark' | 'light';

export type ThemeProps = {
	theme: Theme;
	setTheme: (theme: Theme) => void;
};
