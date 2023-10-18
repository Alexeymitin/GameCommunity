import { StateSchema } from 'app/providers/StoreProvider';

export const getSlidesChangerIndex = (state: StateSchema) => state.slidesChanger.currentIndex;
export const getSlidesChangerSlides = (state: StateSchema) => state.slidesChanger.slides;
export const getSlidesChangerIsDragging= (state: StateSchema) => state.slidesChanger.isDragging;
export const getSlidesChangerDragStartX= (state: StateSchema) => state.slidesChanger.dragStartX;
export const getSlidesChangerDraggedX= (state: StateSchema) => state.slidesChanger.draggedX;

