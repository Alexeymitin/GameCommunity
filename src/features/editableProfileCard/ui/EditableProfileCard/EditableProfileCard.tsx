import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ProfileCard } from 'entities/Profile';
import { ValidateProfileError } from '../../model/consts/consts';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { getProfileForm } from '../../model/selectors/getProfileForm/getProfileForm';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { getProfileValidateErrors } from '../../model/selectors/getProfileValidateErrors/getProfileValidateErrors';
import { fetchProfileData } from '../../model/services/fetchProfileData/fetchProfileData';
import { profileActions, profileReducer } from '../../model/slice/profileSlice';
import { EditableProfileCardHeader } from '../EditableProfileCardHeader/EditableProfileCardHeader';

interface EditableProfileCardProps {
    className?: string;
	id?: string;
}

const reducers: ReducersList = {
	profile: profileReducer
};

export const EditableProfileCard = memo((props: EditableProfileCardProps) => {
	const { className, id } = props;
	const { t } = useTranslation('profile');
	const dispatch = useAppDispatch();
	const formData = useSelector(getProfileForm);
	const isLoading = useSelector(getProfileIsLoading);
	const error = useSelector(getProfileError);
	const readonly = useSelector(getProfileReadonly);
	const validateErrors = useSelector(getProfileValidateErrors);
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
		<DynamicModuleLoader reducers={reducers}>
			<div className={classNames('', {}, [className])}>
				<EditableProfileCardHeader/>
				{validateErrors?.length && validateErrors.map((err) => (
					<Text 
						theme={TextTheme.ERROR} 
						text={validateErrorTranslates[err]} 
						key={err}
						data-testid={'EditableProfileCard.Error'}
					/>
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
			</div>
		</DynamicModuleLoader>
		
	);
});