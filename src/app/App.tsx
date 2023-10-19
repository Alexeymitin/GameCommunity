/* eslint-disable max-len */
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/router';
import { getUserInited, userActions } from 'entities/User';
import { ThemeSwitcher } from 'features/ThemeSwitcher';
import { Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Navbar } from 'widgets/Navbar/ui/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import './styles/index.scss';

const App = () => {
	const {theme} = useTheme();
	const dispatch = useAppDispatch();
	const inited = useSelector(getUserInited);

	useEffect(() => {
		dispatch(userActions.initAuthData());
	},[dispatch]);

	return (
		<div className={classNames('app', {}, [theme])}>
			<Suspense fallback=''>
				<Navbar/>
				<div className='contentPage'>
					<Sidebar></Sidebar>
					{inited && <AppRouter/>}
				</div>			
				<ThemeSwitcher/>
			</Suspense>
		</div>
	);
};

export default App;
