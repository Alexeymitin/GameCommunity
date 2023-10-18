import { getSlidesChangerIndex } from 'features/sliderChanger/model/selectors/addCommentFormSelectors';
import { slideChangerSliceActions } from 'features/sliderChanger/model/slices/slidesChangerSlice';
import { CarouselItem } from 'features/sliderChanger/model/types/slidesChangerSchema';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import { Button } from '../Button/Button';
import cls from './Carousel.module.scss';


interface CarouselProps {
	className?: string;
	slides: CarouselItem[];
	isAutoplay?: boolean;
}


export const Carousel = (props: CarouselProps) => {
	const {
		className,
		slides,
		isAutoplay,
		...otherProps
	} = props;

	// const styles: CSSProperties = {
	// 	width,
	// 	height
	// };

	const dispatch = useAppDispatch();
	const currentIndex = useSelector(getSlidesChangerIndex);
	const swiper = useSwiper();

	// useEffect(() => {
	// 	let interval: NodeJS.Timeout;
	// 	if (isAutoplay) {
	// 		interval = setInterval(() => dispatch(slideChangerSliceActions.nextImage()), 3000);
	// 	}
	// 	return () => clearInterval(interval);
	// }, [isAutoplay, dispatch]);

	// useEffect(() => {
	// 	dispatch(slideChangerSliceActions.setImage(slides));
	// }, [dispatch, slides]);

	const prevSlide = () => {
		dispatch(slideChangerSliceActions.prevImage());
	};

	const nextSlide = () => {
		dispatch(slideChangerSliceActions.nextImage());
	};

	console.log(cls.backArrow);
	console.log(cls.nextArrow);

	return (
		<div 
			className={classNames(cls.carouselWrapper, {}, [className])}
			{...otherProps}
		>
			<Swiper
				slidesPerView={1}
				spaceBetween={50}
				loop={true}
				pagination={{
					el: `.${cls.swiperPagination}`,
					clickable: true,
					renderBullet: function (index, className) {
						if(className.includes('.swiper-pagination-bullet-active')) {
							return '<span class="' + className + '" style="width: 20px">' + (index + 1) + '</span>';
						} else {
							return '<span class="' + className + '"></span>';
						}					
					}
						
					// dynamicBullets: true
				}}
				speed={1000}
				grabCursor
				// autoplay
				navigation={{
					prevEl: `.${cls.backArrow}`,
					nextEl: `.${cls.nextArrow}`					
				}}		
				modules={[Pagination, Navigation, Autoplay]}
			>
				{slides.map((image, index) => (					
					<SwiperSlide key={index}>
						<div className={cls.slide}>
							{image}
						</div>						
					</SwiperSlide>
				))}				
			</Swiper>
			<div className={cls.buttonWrapper}>
				<Button className={cls.backArrow}/>
				<Button className={cls.nextArrow}/>
			</div>
			<div className={cls.swiperPagination}></div>			
		</div>
	);
};