import { createAsyncThunk } from '@reduxjs/toolkit'; 
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from '../../types/article';

export const fetchArticleByID = createAsyncThunk<Article, string, ThunkConfig<string>>(
	'articleDetails/fetchArticleByID',
	async (articleId, thunkApi) => {
		
		const {extra, rejectWithValue} = thunkApi;

		try {
			const response = await extra.api.get<Article>(`/articles/${articleId}`, {
				params: {
					_expand: 'user'
				}
			}); 
			
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