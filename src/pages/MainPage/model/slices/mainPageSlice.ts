import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';
import { MainPageSchema } from '../types/mainPageSchema';
import { fetchArticlesListMainPage } from '../services/fetchArticlesListMainPage/fetchArticlesListMainPage';

const articlesAdapter = createEntityAdapter<Article>({
	selectId: (article) => article.id,
});

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
	(state) => state.mainPage || articlesAdapter.getInitialState(),
);

const mainPageSlice = createSlice({
	name: 'mainPageSlice',
	initialState: articlesAdapter.getInitialState<MainPageSchema>({
		ids: [],
		entities: {},
		data: [],
		isLoading: false,
		error: undefined
	}),
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchArticlesListMainPage.pending, (state) => {
				state.error = undefined;
				state.isLoading = true;
			})
			.addCase(fetchArticlesListMainPage.fulfilled, (state, action) => {
				state.isLoading = false;
				state.data = action.payload;
			})
			.addCase(fetchArticlesListMainPage.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			});
	},
});

export const {
	reducer: mainPageReducer,
	actions: mainPageActions,
} = mainPageSlice;
