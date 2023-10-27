import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Carousel } from 'shared/ui/Carousel/Carousel';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { PageWrapper } from 'widgets/PageWrapper/PageWrapper';
import img1 from '../../../shared/assets/img/t1.jpg';
import img2 from '../../../shared/assets/img/t2.jpg';
import img3 from '../../../shared/assets/img/t3.jpg';
import { getMainPageError, getMainPageIsLoading, getMainPagePageData } from '../model/selectors/mainPageSelectors';
import { fetchArticlesListMainPage } from '../model/services/fetchArticlesListMainPage/fetchArticlesListMainPage';
import { mainPageReducer } from '../model/slices/mainPageSlice';
import cls from './MainPage.module.scss';

const imagesMain = [
	<img src={img1} alt="Cyberpank News" key={img1}/>,
	<img src={img2} alt="PayDay News" key={img2}/>,
	<img src={img3} alt="Shank News" key={img3}/>,
];

const reducers: ReducersList = {
	mainPage: mainPageReducer,
};

const MainPage = () => {

	const {t} = useTranslation('main');
	const dispatch = useAppDispatch();
	const articles = useSelector(getMainPagePageData);
	const error = useSelector(getMainPageError);
	const isLoading = useSelector(getMainPageIsLoading);

	useInitialEffect(() => {
		dispatch(fetchArticlesListMainPage());
	});


	if (error) {
		throw new Error('Error');
	}

	return (
		<DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
			<PageWrapper>							
				<div className={cls.mainWrapper}>
					<div className={cls.popularNewsCarouselWrapper}>
						<Text title={t('Popular News')} className={cls.title} size={TextSize.L}/>
						<Carousel 
							keyForPrevButton='popularNewsBack'
							keyForNextButton='popularNewsNext'
							slides={imagesMain}
							className={cls.sliderPopularNews}
							keyForPagination='popularNews'
							isAutoplay
						/>	
					</div>
					<div className={cls.trendingNowCarouselWrapper}>
						<Text title={t('Trending Now')} className={cls.title}  size={TextSize.L}/>	
						<Carousel 							
							articles={articles}
							className={cls.sliderTrendingNow}
							isAutoplay
							keyForPrevButton='trendingNowBack'
							keyForNextButton='trendingNowNext'
							keyForPagination='trendingNow'
						/>
					</div>
					<div className={cls.mostPopularCarouselWrapper}>
						<Text title={t('Most Popular')} className={cls.title} size={TextSize.L}/>	
						<Carousel 
							slidesPerView={3}
							keyForPrevButton='mostPopularBack'
							keyForNextButton='mostPopularNext'
							keyForPagination='mostPopular'
							articles={articles}
							isAutoplay
						/>	
					</div>				
				</div>							
			</PageWrapper>
		</DynamicModuleLoader>		
	);
};

export default MainPage;