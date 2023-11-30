import { useTranslation } from 'react-i18next';
import { PageWrapper } from 'widgets/PageWrapper/PageWrapper';


const AboutPage = () => {

	const {t} = useTranslation('about');

	return (
		<PageWrapper>
			{t(`Новостная лента с личным кабинетом, статьями и рейтингом статей. 
				В проекте использованы React, Typescript, Redux, Webpack, Babel.`
			)}
		</PageWrapper>
	);
};

export default AboutPage;