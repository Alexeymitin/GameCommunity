import { Country, CountrySelect } from 'entities/Country';
import { Currency, CurrencySelect } from 'entities/Currency';
import { useTranslation } from 'react-i18next';
import { Mods, classNames } from 'shared/lib/classNames/classNames';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Profile } from '../../model/types/profile';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
	className?: string;
	data?: Profile;
	error?: string;
	isLoading?: boolean;
	readonly?: boolean;
	onChangeFirstname?: (value?: string) => void;
	onChangeLastname?: (value?: string) => void;
	onChangeCity?: (value?: string) => void;
	onChangeAge?: (value?: string) => void;
	onChangeUsername?: (value?: string) => void;
	onChangeAvatar?: (value?: string) => void;
	onChangeCurrency?: (currency: Currency) => void;
	onChangeCountry?: (country: Country) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
	const {
		className,
		data,
		error,
		isLoading,
		readonly,
		onChangeFirstname,
		onChangeLastname,
		onChangeCity,
		onChangeAge,
		onChangeUsername,
		onChangeAvatar,
		onChangeCurrency,
		onChangeCountry
	} = props;
	const {t} = useTranslation('profile');

	if(isLoading) {
		return (
			<div className={classNames(cls.profileCard, {}, [className, cls.loading])}>
				<Loader/>
			</div>
		);
	}

	if(error) {
		return (
			<div className={classNames(cls.profileCard, {}, [className, cls.error])}>
				<Text 
					theme={TextTheme.ERROR}
					title={t('An error occurred while loading the profile')}
					text={t('Try to refresh the page')}
					align={TextAlign.CENTER}
				/>
			</div>
		);
	}

	const mods: Mods = {
		[cls.editing]: !readonly,
		[cls.readonly]: readonly
	};

	return (
		<div className={classNames(cls.profileCard, mods, [className])}>
			<div>
				{data?.avatar && (
					<div className={cls.avatarWrapper}>
						<Avatar src={data?.avatar}/>
					</div>
				)}
				<Input
					value={data?.first}
					placeholder={t('Your name')}
					className={cls.input}
					onChange={onChangeFirstname}
					readonly={readonly}
					data-testid={'ProfileCard.firstname'}
				/>
				<Input
					value={data?.lastname}
					placeholder={t('Your last name')}
					className={cls.input}
					onChange={onChangeLastname}
					readonly={readonly}
					data-testid={'ProfileCard.lastname'}
				/>
				<Input
					value={data?.age}
					placeholder={t('Your age')}
					className={cls.input}
					onChange={onChangeAge}
					readonly={readonly}
				/>
				<Input
					value={data?.city}
					placeholder={t('City')}
					className={cls.input}
					onChange={onChangeCity}
					readonly={readonly}
				/>
				<Input
					value={data?.username}
					placeholder={t('Nickname')}
					className={cls.input}
					onChange={onChangeUsername}
					readonly={readonly}
				/>
				<Input
					value={data?.avatar}
					placeholder={t('Avatar link')}
					className={cls.input}
					onChange={onChangeAvatar}
					readonly={readonly}
				/>
				<CurrencySelect
					value={data?.currency}
					onChange={onChangeCurrency}
					readonly={readonly}
				/>
				<CountrySelect
					value={data?.country}
					onChange={onChangeCountry}
					readonly={readonly}
				/>
			</div>
		</div>
	);
};