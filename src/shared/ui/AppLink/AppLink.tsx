/* eslint-disable no-unused-vars */
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';
import { Link, LinkProps } from 'react-router-dom';
import { ReactNode, memo } from 'react';

export enum AppLinkTheme {
	PRIMARY = 'primary',
	SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps{
	className?: string;
	theme?: AppLinkTheme;
	children?: ReactNode;
}

export const AppLink = (props: AppLinkProps) => {
	const {
		to, 
		className, 
		children, 
		theme = AppLinkTheme.PRIMARY, 
		...otherProps
	} = props;
	return (
		<Link 
			to={to} 
			className={classNames(cls.appLink, {}, [className, cls[theme]])}
			{...otherProps}
		>
			{children}
		</Link>
	);
};