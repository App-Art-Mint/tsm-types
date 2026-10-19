export type MintAuthSession = {
	status: 'configuring' | 'authenticated' | 'unauthenticated';
	groups: string[];
};
