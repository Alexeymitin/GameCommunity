import { EntityState } from '@reduxjs/toolkit';
import { Article } from 'entities/Article';

export interface MainPageSchema extends EntityState<Article> {
	data: Article[];
    isLoading?: boolean;
    error?: string;
}
