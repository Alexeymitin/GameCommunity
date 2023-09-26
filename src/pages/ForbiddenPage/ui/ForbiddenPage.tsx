import { useTranslation } from 'react-i18next';
import { PageWrapper } from 'widgets/PageWrapper/PageWrapper';


const ForbiddenPage = () => {

	const {t} = useTranslation('');

	return (
		<PageWrapper>
			{t('ForbiddenPage')}
		</PageWrapper>
	);
};

export default ForbiddenPage;