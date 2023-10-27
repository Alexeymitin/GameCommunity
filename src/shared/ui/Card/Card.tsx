import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Card.module.scss';
import { HTMLAttributes, ReactNode } from 'react';

export enum CardTheme {
	NORMAL = 'normal',
	OUTLINED = 'outlined',
	FLEX = 'flex'
}

interface CardProps extends HTMLAttributes<HTMLDivElement>{
	className?: string;
	children: ReactNode;
	theme?: CardTheme;
}

export const Card = (props: CardProps) => {
	const {
		className, 
		children, 
		theme = CardTheme.NORMAL, 
		...otherProps
	} = props;
	return (
		<div 
			className={classNames(cls.card, {}, [className, cls[theme]])}
			{...otherProps}
		>
			{children}
		</div>
	);
};