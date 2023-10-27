import { Article } from 'entities/Article';
import { useEffect, useRef } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import { Button } from '../Button/Button';
import { Text } from '../Text/Text';
import cls from './Carousel.module.scss';

interface CarouselProps {
	className?: string;
	slides?: JSX.Element[];
	articles?: Article[];
	slidesPerView?: number;
	isAutoplay?: boolean;
	keyForPrevButton: string;
	keyForNextButton: string;
	keyForPagination: string;
}

export const Carousel = (props: CarouselProps) => {
	const {
		className,
		slides,
		articles,
		isAutoplay = false,
		slidesPerView = 1,
		keyForPrevButton,
		keyForNextButton,
		keyForPagination,
		...otherProps
	} = props;

	const swiperRef = useRef<SwiperRef>(null);
	const params = {
		slidesPerView: slidesPerView,
		spaceBetween: 30,
		loop: true,
		pagination: {
			el: `.${keyForPagination}`,
			clickable: true
		},
		speed: 1000,
		watchSlidesProgress: true,
		centeredSlides: true,
		grabCursor: true,
		autoplay: isAutoplay,		
		navigation: {
			prevEl: `.${keyForPrevButton}`,
			nextEl: `.${keyForNextButton}`					
		},
		modules: [Pagination, Navigation, Autoplay]
	};

	return (
		<div 
			className={classNames(cls.carouselWrapper, {}, [className])}
			{...otherProps}
		>
			<Swiper
				ref={swiperRef}
				{...params}
				// slidesPerView={slidesPerView}
				// spaceBetween={30}
				// loop={true}
				// pagination={{
				// 	el: `.${keyForPagination}`,
				// 	clickable: true
				// }}
				// speed={1000}
				// watchSlidesProgress
				// centeredSlides
				// grabCursor
				// autoplay={isAutoplay}				
				// navigation={{
				// 	prevEl: `.${keyForPrevButton}`,
				// 	nextEl: `.${keyForNextButton}`					
				// }}		
				className={cls.swiper}
				// modules={[Pagination, Navigation, Autoplay]}
			>
				{slides && slides.map((slide, index) => (					
					<SwiperSlide className={cls.slideWrapper} key={index}>
						<div className={cls.slide}>
							{slide}
						</div>					
					</SwiperSlide>
				))}	

				{articles && articles.slice(0, 6).map((article) => (					
					<SwiperSlide key={article.id} className={cls.slideWrapper} >
						<div className={cls.slide} style={slidesPerView > 1 ? {flexDirection: 'column'} : undefined}>
							<div className={slidesPerView > 1 ? cls.slideImgVertical : cls.slideImg}>
								<img src={article.img} alt="" />
							</div>						
							<div className={slidesPerView > 1 ? cls.textWrapperVertical : cls.textWrapper}>
								<Text title={article.title}/>
								<Text text={article.subtitle}/>
								{article.blocks.map((block) => {
									if (block.type === 'TEXT' && 'paragraphs' in block && block.paragraphs.length > 0) {
										return <div className={cls.description} key={block.id}>
											{block.paragraphs[0]}
										</div>; 
									}
									return null;
								})}
								<div style={{marginTop: '10px'}}>
									<Text text={`${article.views} views`}/>
									<Text text={article.type.join(' |')}/>	
								</div>					
							</div>
						</div>						
					</SwiperSlide>
				))}							
			</Swiper>
			<div className={cls.buttonWrapper}>
				<Button className={`${cls.backArrow} ${keyForPrevButton}`}/>
				<Button className={`${cls.nextArrow} ${keyForNextButton}`}/>
			</div>
			<div className={`${cls.swiperPagination} ${keyForPagination}`}></div>					
		</div>
	);
};