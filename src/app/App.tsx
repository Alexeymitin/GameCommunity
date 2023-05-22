import './styles/index.scss';
import { Navbar } from 'widgets/Navbar';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/router';
import { ThemeSwitcher } from 'features/ThemeSwitcher';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense, useEffect } from 'react';



const App = () => {

	const {theme} = useTheme();

	
	return (
		<div className={classNames('app', {}, [theme])}>
			<Suspense fallback=''>
				<Navbar></Navbar>
				<div className='contentPage'>
					<Sidebar></Sidebar>
					<AppRouter/>
				</div>			
				<ThemeSwitcher/>
			</Suspense>
		</div>
	);
};

export default App;
