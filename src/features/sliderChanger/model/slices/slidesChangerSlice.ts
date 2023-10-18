import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CarouselItem, SlidesChangerSchema } from '../types/slidesChangerSchema';

const initialState: SlidesChangerSchema = {
	currentIndex: 0,
	slides: [],
	isDragging: false,
	dragStartX: 0,
	draggedX: 0
};

export const slideChangerSlice = createSlice({
	name: 'slidesChanger',
	initialState,
	reducers: {
		nextImage: (state) => {
			state.currentIndex = (state.currentIndex + 1) % state.slides.length;
		},
		prevImage: (state) => {
			state.currentIndex = (state.currentIndex - 1 + state.slides.length) % state.slides.length;
		},
		setImage: (state, action: PayloadAction<CarouselItem[]>) => {		
			state.slides = action.payload; 
		},
		setDragStart: (state, action: PayloadAction<number>) => {
			state.isDragging = true;
			state.dragStartX = action.payload;
		},
		setDragEnd: (state) => {
			state.isDragging = false;
			state.dragStartX = 0;
		},
		setDraggedX: (state, action: PayloadAction<number>) => {
			state.draggedX = action.payload;
		},
	},
});

export const { actions: slideChangerSliceActions} = slideChangerSlice;
export const { reducer: slideChangerSliceReducer} = slideChangerSlice;
