import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ProfileCard.module.scss';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Text } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { getProfileData } from 'entities/Profile/model/selectors/getProfileData/getProfileData';
import { getProfileIsLoading } from 'entities/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileError } from 'entities/Profile/model/selectors/getProfileError/getProfileError';

interface ProfileCardProps {
	className?: string;
}

export const ProfileCard = ({className}: ProfileCardProps) => {

	const {t} = useTranslation('profile');
	const data = useSelector(getProfileData);
	const isLoading = useSelector(getProfileIsLoading);
	const error = useSelector(getProfileError);

	return (
		<div className={classNames(cls.profileCard, {}, [className])}>
			<div className={cls.header}>
				<Text title={t('Profile')}></Text>
				<Button 
					theme={ButtonTheme.OUTLINE}
					className={cls.editBtn}
				>
					{t('Edit')}
				</Button>
			</div>
			<div className={cls.data}>
				<Input
					value={data?.first}
					placeholder={t('Your name')}
					className={cls.input}
				/>
				<Input
					value={data?.lastname}
					placeholder={t('Your last name')}
					className={cls.input}
				/>
			</div>
		</div>
	);
};