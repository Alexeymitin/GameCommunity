import { useTranslation } from 'react-i18next';
import { PageWrapper } from 'widgets/PageWrapper/PageWrapper';


const AdminPanelPage = () => {

	const {t} = useTranslation();

	return (
		<PageWrapper>
			{t('Admin Panel')}
		</PageWrapper>
	);
};

export default AdminPanelPage;