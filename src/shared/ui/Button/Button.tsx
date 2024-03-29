/* eslint-disable no-unused-vars */
import { Mods, classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';
import { ButtonHTMLAttributes, ReactNode, memo } from 'react';

export enum ButtonTheme {
	SWITCHERLIGHT = 'switcherLight',
	SWITCHERDARK = 'switcherDark',
	SWITCHERLANGUAGE = 'switcherLanguage',
	OUTLINE = 'outline',
	OUTLINE_RED = 'outline_red',
	BACKGROUND = 'background',
	CLEAR = 'clear',
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
	disabled?: boolean;
	children?: ReactNode;
	fullWidth?: boolean;
}

export const Button = memo((props: ButtonProps) => {
	const {
		className,
		children,
		theme = ButtonTheme.OUTLINE,
		square,
		size = ButtonSize.M,
		disabled,
		fullWidth,
		...otherProps
	} = props;

	const mods: Mods = {
		[cls.square]: square,
		[cls.disabled]: disabled,
		[cls.fullWidth]: fullWidth,
	};


	return (
		<button 
			type='button'
			className={classNames(cls.button, mods, [className, cls[theme], cls[size]])}
			disabled={disabled}
			{...otherProps}
		>
			{children}
		</button>
	);
});