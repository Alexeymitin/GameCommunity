import './styles/index.scss'
import { Navbar } from 'widgets/Navbar'
import { classNames } from "shared/lib/classNames/classNames"
import { useTheme } from "app/providers/ThemeProvider"
import { AppRouter } from "app/providers/router"
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { Sidebar } from 'widgets/Sidebar'


const App = () => {

	const {theme} = useTheme();

	return (
		<div className={classNames('app', {}, [theme])}>
			<Navbar></Navbar>
			<div className='contentPage'>
				<Sidebar></Sidebar>
				<AppRouter/>
			</div>			
			<ThemeSwitcher/>
		</div>
	)
}

export default App
