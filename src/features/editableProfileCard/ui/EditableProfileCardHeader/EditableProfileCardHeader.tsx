import { getUserAuthData } from 'entities/User';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ButtonTheme, Button } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import { profileActions } from '../../model/slice/profileSlice';
import cls from './EditableProfileCardHeader.module.scss';

interface EditableProfileCardHeaderProps {
	className?: string;
}

export const EditableProfileCardHeader = ({className}: EditableProfileCardHeaderProps) => {
	const {t} = useTranslation('profile');
	const authData = useSelector(getUserAuthData);
	const profileData = useSelector(getProfileData);
	const canEdit = authData?.id === profileData?.id;
	const readonly = useSelector(getProfileReadonly);
	const dispatch = useAppDispatch();

	const onEdit = useCallback(() => {
		dispatch(profileActions.setReadonly(false));
	},[dispatch]);

	const onCancelEdit = useCallback(() => {
		dispatch(profileActions.cancelEdit());
	},[dispatch]);

	const onSave = useCallback(() => {
		dispatch(updateProfileData());
	},[dispatch]);

	return (
		<div className={classNames(cls.editableProfileCardHeader, {}, [className])}>
			<Text title={t('Profile')}></Text>
			{canEdit && (
				<div className={cls.btnsWrapper}>
					{readonly 
						? (
							<Button 
								theme={ButtonTheme.OUTLINE}
								className={cls.editBtn}
								onClick={onEdit}
							>
								{t('Edit')}
							</Button>
						) : (
							<div>
								<Button 
									theme={ButtonTheme.OUTLINE_RED}
									className={cls.editBtn}
									onClick={onCancelEdit}
								>
									{t('Cancel')}
								</Button>
								<Button 
									theme={ButtonTheme.OUTLINE}
									className={cls.saveBtn}
									onClick={onSave}
								>
									{t('Save')}
								</Button>
							</div>
						)
					}
				</div>
			)}			
		</div>
	);
};