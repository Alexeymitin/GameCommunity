export type CarouselItem = JSX.Element

export interface SlidesChangerSchema {
	currentIndex: number;
	slides: CarouselItem[];
	isDragging: boolean;
	dragStartX: number;
	draggedX: number;
}
  