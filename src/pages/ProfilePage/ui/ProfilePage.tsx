import { classNames } from 'shared/lib/classNames/classNames';
import { PageWrapper } from 'widgets/PageWrapper/PageWrapper';
import { EditableProfileCard } from 'features/editableProfileCard';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';

interface ProfilePageProps {
	className?: string; 
}

const ProfilePage = ({className}: ProfilePageProps) => {
	const { t } = useTranslation('profile');
	const {id} = useParams<{id: string}>();

	if(!id) {
		return <Text title={t('Profile not found')}/>;
	}

	return (
		<PageWrapper className={classNames('', {}, [className])}>				
			<EditableProfileCard id={id}/>
		</PageWrapper>
	);
};

export default ProfilePage;