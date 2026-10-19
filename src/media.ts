export type MediaFileNode = {
	path?: string;
	size?: number;
	fetched?: boolean;
	progress?: number;
	error?: boolean;
	files?: Record<string, MediaFileNode>;
};

export type MediaBucket = 'mint-public-storage' | 'mint-private-storage';
