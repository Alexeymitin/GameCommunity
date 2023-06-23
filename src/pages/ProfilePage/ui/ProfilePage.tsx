import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { 
	ValidateProfileError,
	fetchProfileData, 
	getProfileError, 
	getProfileForm, 
	getProfileIsLoading, 
	getProfileReadonly, 
	getProfileValidateErrors, 
	profileActions, 
	profileReducer 
} from 'entities/Profile';
import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { ProfileCard } from 'entities/Profile';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { PageWrapper } from 'widgets/PageWrapper/PageWrapper';

const reducers: ReducersList = {
	profile: profileReducer
};

interface ProfilePageProps {
	className?: string;
}

const ProfilePage = ({className}: ProfilePageProps) => {
	const {t} = useTranslation('profile');
	const dispatch = useAppDispatch();
	const formData = useSelector(getProfileForm);
	const isLoading = useSelector(getProfileIsLoading);
	const error = useSelector(getProfileError);
	const readonly = useSelector(getProfileReadonly);
	const validateErrors = useSelector(getProfileValidateErrors);
	const {id} = useParams<{id: string}>();
	const validateErrorTranslates = {
		[ValidateProfileError.SERVER_ERROR]: t('Server Error'),
		[ValidateProfileError.INCORRECT_AGE]: t('Incorrect age'),
		[ValidateProfileError.INCORRECT_COUNTRY]: t('Incorrect country'),
		[ValidateProfileError.INCORRECT_USER_DATA]: t('Incorrect Firstname'),
		[ValidateProfileError.NO_DATA]: t('Incorrect data')
	};

	useInitialEffect(() => {
		if (id) {
			dispatch(fetchProfileData(id));
		}		
	});

	const onChangeFirstname = useCallback((value?: string) => {
		dispatch(profileActions.updateProfile({first: value || ''}));
	},[dispatch]);

	const onChangeLastname = useCallback((value?: string) => {
		dispatch(profileActions.updateProfile({lastname: value || ''}));
	},[dispatch]);

	const onChangeCity = useCallback((value?: string) => {
		dispatch(profileActions.updateProfile({city: value || ''}));
	},[dispatch]);

	const onChangeAge = useCallback((value?: string) => {
		if(value?.match(/^[0-9]+$/) || !value) {
			dispatch(profileActions.updateProfile({age: Number(value || 0)}));
		} else {
			'';
		}	
	},[dispatch]);

	const onChangeUsername = useCallback((value?: string) => {
		dispatch(profileActions.updateProfile({username: value || ''}));
	},[dispatch]);

	const onChangeAvatar = useCallback((value?: string) => {
		dispatch(profileActions.updateProfile({avatar: value || ''}));
	},[dispatch]);

	const onChangeCurrency = useCallback((currency: Currency) => {
		dispatch(profileActions.updateProfile({ currency }));
	},[dispatch]);

	const onChangeCountry = useCallback((country: Country) => {
		dispatch(profileActions.updateProfile({ country }));
	},[dispatch]);

	return (
		<DynamicModuleLoader reducers={reducers} removeAfterUnmount>
			<PageWrapper className={classNames('', {}, [className])}>				
				<ProfilePageHeader/>
				{validateErrors?.length && validateErrors.map((err) => (
					<Text theme={TextTheme.ERROR} text={validateErrorTranslates[err]} key={err}/>
				))}
				<ProfileCard
					data={formData}
					isLoading={isLoading}
					error={error}
					readonly={readonly}
					onChangeFirstname={onChangeFirstname}
					onChangeLastname={onChangeLastname}
					onChangeCity={onChangeCity}
					onChangeAge={onChangeAge}
					onChangeUsername={onChangeUsername}
					onChangeAvatar={onChangeAvatar}
					onChangeCurrency={onChangeCurrency}
					onChangeCountry={onChangeCountry}
				/>
			</PageWrapper>
		</DynamicModuleLoader>	
	);
};

export default ProfilePage;