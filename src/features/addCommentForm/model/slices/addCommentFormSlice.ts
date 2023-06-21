import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { addCommentFormSchema } from '../types/addCommentFormSchema';

const initialState: addCommentFormSchema = {
	text: '',
};

export const addCommentFormSlice = createSlice({
	name: 'addCommentForm',
	initialState,
	reducers: {
		setText: (state, action: PayloadAction<string>) => {
			console.log(state);
			console.log(action);
			state.text = action.payload;
		}
	},
});

export const { actions: addCommentFormActions} = addCommentFormSlice;
export const { reducer: addCommentFormReducer} = addCommentFormSlice;
