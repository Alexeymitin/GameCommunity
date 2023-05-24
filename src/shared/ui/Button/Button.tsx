/* eslint-disable no-unused-vars */
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';
import { ButtonHTMLAttributes, FC } from 'react';

export enum ButtonTheme {
	SWITCHERLIGHT = 'switcherLight',
	SWITCHERDARK = 'switcherDark',
	SWITCHERLANGUAGE = 'switcherLanguage',
	OUTLINE = 'outline',
	BACKGROUND = 'background',
	BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
	M = 'size_m',
	L = 'size_l',
	XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
	className?: string;
	theme?: ButtonTheme;
	square?: boolean;
	size?: ButtonSize;
}

export const Button: FC<ButtonProps> = (props) => {
	const {
		className,
		children,
		theme,
		square,
		size,
		...otherProps
	} = props;

	const mods: Record<string, boolean> = {
		[cls.square]: square,
	};


	return (
		<button 
			type='button'
			className={classNames(cls.button, mods, [className, cls[theme], cls[size]])}
			{...otherProps}
		>
			{children}
		</button>
	);
};