import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';

interface UseThemeResult {
	toggleTheme: () => void;
	theme: Theme;
}

export function useTheme(): UseThemeResult {
	const {theme, setTheme} = useContext(ThemeContext);
	

	const toggleTheme = () => {
		const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
		setTheme?.(newTheme);
		document.body.className = newTheme;
		localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
		// Для внедрения более двух тем использовать конструкцию switch-case
		// let newThemeThree: Theme;
		// switch (theme) {
		// case Theme.DARK:
		// 	newThemeThree = Theme.LIGHT;
		// 	break;
		// case Theme.LIGHT:
		// 	newThemeThree = Theme.ORANGE;
		// 	break;
		// case Theme.ORANGE:
		// 	newThemeThree = Theme.DARK;
		// 	break;
		// default:
		// 	newThemeThree = Theme.LIGHT;
		// }
	};

	return {
		theme: theme || Theme.LIGHT, 
		toggleTheme
	};
}