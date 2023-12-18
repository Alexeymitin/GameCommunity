import { EditableProfileCard } from 'features/editableProfileCard';
import { useParams } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { PageWrapper } from 'widgets/PageWrapper/PageWrapper';

interface ProfilePageProps {
	className?: string; 
}

const ProfilePage = ({className}: ProfilePageProps) => {
	const {id} = useParams<{id: string}>();

	return (
		<PageWrapper data-testid="ProfilePage" className={classNames('', {}, [className])}>				
			<EditableProfileCard id={id}/>
		</PageWrapper>
	);
};

export default ProfilePage;