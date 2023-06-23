import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/ErrorBoundary';
import { Counter } from 'entities/Counter';
import { PageWrapper } from 'shared/ui/PageWrapper/PageWrapper';

const MainPage = () => {

	const {t} = useTranslation('main');

	return (
		<PageWrapper>
			<BugButton/>
			{t('Main Page')}
			<Counter/>
		</PageWrapper>
	);
};

export default MainPage;