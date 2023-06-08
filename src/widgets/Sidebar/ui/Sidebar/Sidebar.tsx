import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useState } from 'react';
import { LangSwitcher } from 'features/LangSwitcher';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './Sidebar.module.scss';
import { SidebarItemsList } from '../../model/items';
import { SidebarItem } from '../SidebarItem/SidebarItem';

interface SidebarProps {
	className?: string;
}

export const Sidebar = memo(({className}: SidebarProps) => {

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
				data-testid='sidebar-toggle'			
				onClick={onToggle}
				className={cls.collapseBtn}
				theme={ButtonTheme.BACKGROUND_INVERTED} 
				size={ButtonSize.L}
				square
			>
				{collapsed ? '>' : '<'}
			</Button>
			<div className={cls.items}>
				{SidebarItemsList.map((item) => (
					<SidebarItem
						item={item}
						collapsed={collapsed}
						key={item.path}
					/>
				))}
			</div>
			<div className={cls.switchers}>
				<LangSwitcher 
					short={collapsed} 
				/>
			</div>
		</div>
	);
});