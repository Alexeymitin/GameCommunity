import {
	PayloadAction,
	createEntityAdapter,
	createSlice
} from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { Comment } from 'entities/Comment';
import { ArticleDetailsCommentsSchema } from '../types/ArticleDetailsCommentsSchema';
import { fetchCommentByArticleId } from '../services/fetchCommentsByArticleId/fetchCommentsByArticleId';
  
const commentsAdapter = createEntityAdapter<Comment>({
	selectId: (comment) => comment.id,
});

export const getArticleComments = commentsAdapter.getSelectors<StateSchema>(
	state => state.articleDetailsPage?.comments || commentsAdapter.getInitialState()
);
  
const articleDetailsCommentsSlice = createSlice({
	name: 'articleDetailsCommentsSlice.ts',
	initialState: commentsAdapter.getInitialState<ArticleDetailsCommentsSchema>({
		isLoading: false,
		ids: [],
		entities: {},
		error: undefined
	}),
	reducers: {
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchCommentByArticleId.pending, (state) => {
				state.error= undefined;
				state.isLoading = true;
			})
			.addCase(
				fetchCommentByArticleId.fulfilled, (
					state, 
					action: PayloadAction<Comment[]>
				) => {
					state.isLoading = false;
					commentsAdapter.setAll(state, action.payload);
				})
			.addCase(fetchCommentByArticleId.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			});
	}, 
});

export const {reducer: articleDetailsCommentsReducer} = articleDetailsCommentsSlice;
  
