import { CarouselItem } from 'features/sliderChanger/model/types/slidesChangerSchema';
import { classNames } from 'shared/lib/classNames/classNames';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
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
				}}
				speed={1000}
				grabCursor
				autoplay
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