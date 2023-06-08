import { classNames } from 'shared/lib/classNames/classNames';
import cls from './LoginForm.module.scss';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { loginByUsername } from '../../model/services/loginByUserName/loginByUserName';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

export interface LoginFormProps {
	className?: string; 
	onSuccess: () => void
}

const initialReducers: ReducersList = {
	loginForm: loginReducer
};

const LoginForm = memo(({className, onSuccess}: LoginFormProps) => {

	const {t} = useTranslation();
	const dispatch = useAppDispatch();
	const username = useSelector(getLoginUsername);
	const password = useSelector(getLoginPassword);
	const isLoading = useSelector(getLoginIsLoading);
	const error = useSelector(getLoginError);

	const onChangeUsername = useCallback( (value) => {
		dispatch(loginActions.setUsername(value));
	}, [dispatch]);

	const onChangePassword = useCallback( (value) => {
		dispatch(loginActions.setPassword(value));
	}, [dispatch]);

	const onLoginClick = useCallback(async () => {
		const result = await dispatch(loginByUsername({username, password}));
		if (result.meta.requestStatus === 'fulfilled') {
			onSuccess();
		}
	}, [onSuccess, dispatch, password, username]);


	return (
		<DynamicModuleLoader 
			reducers={initialReducers}
			removeAfterUnmount
		>
			<div className={classNames(cls.loginForm, {}, [className])}>
				<Text title={t('Authorization form')}/>
				{error && <Text text={t('Wrong login or password')} theme={TextTheme.ERROR}/>}
				<Input 
					autofocus={true}
					type="text" 
					className={cls.input}
					placeholder={t('Enter Username')}
					onChange={onChangeUsername}
					value={username}
				/>
				<Input 
					type="text" 
					className={cls.input}
					placeholder={t('Enter Password')}
					onChange={onChangePassword}
					value={password}
				/>
				<Button 
					className={cls.loginBtn} 
					theme={ButtonTheme.OUTLINE}
					onClick={onLoginClick}
					disabled={isLoading}
				>
					{t('Login')}
				</Button>
			</div>
		</DynamicModuleLoader>
		
	);
});

export default LoginForm;

