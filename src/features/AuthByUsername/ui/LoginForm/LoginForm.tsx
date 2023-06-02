import { classNames } from 'shared/lib/classNames/classNames';
import cls from './LoginForm.module.scss';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { memo, useCallback, useEffect } from 'react';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { loginByUsername } from '../../model/services/loginByUserName/loginByUserName';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { ReduxStoreWithManager } from 'app/providers/StoreProvider';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginIsError } from '../../model/selectors/getLoginError/getLoginError';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

export interface LoginFormProps {
	className?: string; 
}

const initialReducers: ReducersList = {
	loginForm: loginReducer
};

const LoginForm = memo(({className}: LoginFormProps) => {

	const {t} = useTranslation();
	const dispatch = useDispatch();
	const username = useSelector(getLoginUsername);
	const password = useSelector(getLoginPassword);
	const isLoading = useSelector(getLoginIsLoading);
	const error = useSelector(getLoginIsError);

	const onChangeUsername = useCallback( (value) => {
		dispatch(loginActions.setUsername(value));
	}, [dispatch]);

	const onChangePassword = useCallback( (value) => {
		dispatch(loginActions.setPassword(value));
	}, [dispatch]);

	const onLoginClick = useCallback( () => {
		dispatch(loginByUsername({username, password}));
	}, [dispatch, password, username]);


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

