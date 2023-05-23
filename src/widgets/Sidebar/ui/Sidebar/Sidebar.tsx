import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import { useState } from 'react';
import { LangSwitcher } from 'features/LangSwitcher';
import { Button, ThemeButton } from 'shared/ui/Button/Button';


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
				theme={ThemeButton.SWITCHERSIDEBAR} 
				onClick={onToggle}
				data-testid='sidebar-toggle'
			>
				toggle
			</Button>
			<div className={cls.switchers}>
				<LangSwitcher/>
			</div>
		</div>
	);
};