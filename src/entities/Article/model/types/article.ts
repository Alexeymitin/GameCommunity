import { User } from 'entities/User';

export enum ArticleSortField {
	VIEWS = 'views',
	TITLE = 'title',
	CREATED = 'releaseDate'
}

export enum ArticleBlockType {
	CODE = 'CODE',
	IMAGE = 'IMAGE',
	TEXT = 'TEXT'
}

export interface ArticleBlockBase {
	id: string;
	type: ArticleBlockType;
}

export interface ArticleCodeBlock extends ArticleBlockBase{
	type: ArticleBlockType.CODE;
	code: string;
}

export interface ArticleImageBlock extends ArticleBlockBase {
	type: ArticleBlockType.IMAGE;
	src: string;
	title: string;
}

export interface ArticleTextBlock extends ArticleBlockBase {
	type: ArticleBlockType.TEXT;
	paragraphs: string[];
	title?: string;
}

export type ArticleBlock = ArticleCodeBlock | ArticleImageBlock | ArticleTextBlock;

export enum ArticleType {
	ALL = 'ALL',
	PC = 'PC',
	PS5 = 'PS5',
	XBOX = 'Xbox'
}

export interface Article {
	id: string;
	title: string;
	user: User;
	subtitle: string;
	img: string;
	views: number;
	releaseDate: string;
	type: ArticleType[];
	blocks: ArticleBlock[];
}

export enum ArticleView {
	LIST = 'list',
	PLATE = 'plate'
}