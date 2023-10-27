import { createAsyncThunk } from '@reduxjs/toolkit'; 
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';

export const fetchArticlesListMainPage = createAsyncThunk<Article[], void, ThunkConfig<string>>(
	'mainPage/fetchArticleList',
	async (_, thunkApi) => {
		
		const {extra, rejectWithValue} = thunkApi;

		try {
			const response = await extra.api.get<Article[]>('/articles');
			
			if(!response.data) {
				throw new Error();
			}
			
			return response.data;
		} catch (e) {
			console.log(e);
			return rejectWithValue('error');
		}		
	}
);