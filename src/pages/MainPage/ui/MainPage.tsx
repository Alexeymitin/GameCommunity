import { useTranslation } from 'react-i18next';
import { Carousel } from 'shared/ui/Carousel/Carousel';
import { Text } from 'shared/ui/Text/Text';
import { PageWrapper } from 'widgets/PageWrapper/PageWrapper';
import img1 from '../../../shared/assets/img/MainImage1.jpg';
import img2 from '../../../shared/assets/img/MainImage2.jpg';
import img3 from '../../../shared/assets/img/MainImage3.jpg';
import cls from './MainPage.module.scss';

const imagesMain = [
	<img src={img1} alt="Cyberpank News" key={img1}/>,
	<img src={img2} alt="PayDay News" key={img2}/>,
	<img src={img3} alt="Shank News" key={img3}/>,
];

const MainPage = () => {

	const {t} = useTranslation('main');

	return (
		<PageWrapper>
			<div>
				<div>
					<Text title={t('Popular News')}/>
					<Carousel 
						slides={imagesMain}
						className={cls.sliderBig}
						isAutoplay
					/>	
				</div>
				<div>
					<Text title={t('Trending Now')}/>	
					<Carousel 
						slides={imagesMain}
						className={cls.sliderBig}
						isAutoplay
					/>	
				</div>	
			</div>							
		</PageWrapper>
	);
};

export default MainPage;