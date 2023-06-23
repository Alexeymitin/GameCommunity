import { useTranslation } from 'react-i18next';
import { PageWrapper } from 'widgets/PageWrapper/PageWrapper';


const AboutPage = () => {

	const {t} = useTranslation('about');

	return (
		<PageWrapper>
			{t('About Page')}
		</PageWrapper>
	);
};

export default AboutPage;