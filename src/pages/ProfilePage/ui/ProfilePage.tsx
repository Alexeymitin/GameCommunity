import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { fetchProfileData, profileReducer } from 'entities/Profile';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ProfileCard } from 'entities/Profile';

const reducers: ReducersList = {
	profile: profileReducer
};

interface ProfilePageProps {
	className?: string;
}

const ProfilePage = ({className}: ProfilePageProps) => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchProfileData());
	}, [dispatch]);

	return (
		<DynamicModuleLoader reducers={reducers} removeAfterUnmount>
			<div className={classNames('', {}, [className])}>
				<ProfileCard/>
			</div>
		</DynamicModuleLoader>		
	);
};

export default ProfilePage;