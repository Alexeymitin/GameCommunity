import { createSlice } from '@reduxjs/toolkit';
import { BurgerSchema } from '../types/BurgerSchema';

const initialState: BurgerSchema = {
	isOpen: false
};

export const burgerSlice = createSlice({
	name: 'burger',
	initialState,
	reducers: {
		toggleIsOpen: (state) => {
			state.isOpen = !state.isOpen;
		}
	},
});

export const { actions: burgerSliceActions} = burgerSlice;
export const { reducer: burgerSliceReducer} = burgerSlice;
