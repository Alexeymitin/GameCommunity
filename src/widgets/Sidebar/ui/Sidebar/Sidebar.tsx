import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import { LangSwitcher } from 'features/LangSwitcher';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { t } from 'i18next';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import AboutIcon from 'shared/assets/icons/about.svg';
import MainIcon from 'shared/assets/icons/main.svg';
import cls from './Sidebar.module.scss';


interface SidebarProps {
	className?: string;
}

export const Sidebar = ({className}: SidebarProps) => {

	const [collapsed, setCollapsed] = useState(false);

	const onToggle = () => {
		setCollapsed(prev => !prev);
	};

	return (
		<div 
			data-testid='sidebar'
			className={classNames(cls.sidebar, {[cls.collapsed]: collapsed}, [className])}
		>
			<Button 
				// eslint-disable-next-line i18next/no-literal-string
				theme={ButtonTheme.BACKGROUND_INVERTED} 
				onClick={onToggle}
				data-testid='sidebar-toggle'
				className={cls.collapseBtn}
				square
				size={ButtonSize.L}
			>
				{collapsed ? '>' : '<'}
			</Button>
			<div className={cls.items}>
				<div>
					<AppLink 
						theme={AppLinkTheme.SECONDARY} 
						to={RoutePath.main}
						className={cls.item}
					>
						<MainIcon className={cls.icon}/>
						<span className={cls.link}>
							{t('Main')}
						</span>
					</AppLink>
				</div>
	
				<div className={cls.item}>
					<AppLink 
						theme={AppLinkTheme.SECONDARY} 
						to={RoutePath.about}
						className={cls.item}
					>
						<AboutIcon className={cls.icon}/>
						<span className={cls.link}>
							{t('About')}
						</span>
					</AppLink>
				</div>
				
			</div>
			<div className={cls.switchers}>
				<LangSwitcher 
					short={collapsed} 
				/>
			</div>
		</div>
	);
};