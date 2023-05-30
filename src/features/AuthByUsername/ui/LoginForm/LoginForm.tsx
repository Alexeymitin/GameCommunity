import { classNames } from 'shared/lib/classNames/classNames';
import cls from './LoginForm.module.scss';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';

interface LoginFormProps {
	className?: string;
}

export const LoginForm = ({className}: LoginFormProps) => {

	const {t} = useTranslation();

	return (
		<div className={classNames(cls.loginForm, {}, [className])}>
			<Input 
				autofocus={true}
				type="text" className={cls.input}
				placeholder={t('Enter Username')}
			/>
			<Input 
				type="text" className={cls.input}
				placeholder={t('Enter Password')}
			/>
			<Button className={cls.loginBtn}>
				{t('Login')}
			</Button>
		</div>
	);
};

