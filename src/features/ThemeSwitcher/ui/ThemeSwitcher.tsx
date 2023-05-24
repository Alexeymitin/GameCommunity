import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ThemeSwitcher.module.scss';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
// import LightIcon from 'widgets/ThemeSwitcher/assets/icons/themeLight.svg';
// import DarkIcon from 'widgets/ThemeSwitcher/assets/icons/themeDark.svg';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

interface ThemeSwitcherProps {
	className?: string;
}

export const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {

	const {theme, toggleTheme} = useTheme();
	
	return (
		<Button 
			theme={theme === Theme.DARK ? ThemeButton.SWITCHERDARK : ThemeButton.SWITCHERLIGHT}
			className={classNames(cls.themeSwitcher, {}, [className])} 
			onClick={toggleTheme}
		>
			{/* {theme === Theme.DARK ? <DarkIcon/> : <LightIcon/>} */}
		</Button>
	);
};