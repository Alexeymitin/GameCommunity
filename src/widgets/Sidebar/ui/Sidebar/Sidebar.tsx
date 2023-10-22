import { LangSwitcher } from 'features/LangSwitcher';
import { memo, useMemo, useRef, useState } from 'react';
import { isMobile } from 'react-device-detect';
import { useSelector } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Burger } from 'shared/ui/Burger/ui/Burger';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { Overlay } from 'shared/ui/Overlay/Overlay';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import cls from './Sidebar.module.scss';
import { burgerSliceActions, getBurgerIsOpen } from 'shared/ui/Burger';

interface SidebarProps {
	className?: string;
}

export const Sidebar = memo(({className}: SidebarProps) => {
	const [collapsed, setCollapsed] = useState(false);
	const sidebarItemsList = useSelector(getSidebarItems);
	const isOpen = useSelector(getBurgerIsOpen);
	const dispatch = useAppDispatch();
	const nodeRef = useRef(null);

	const onToggle = () => {
		setCollapsed(prev => !prev);
	};
	
	const onToggleMobileSidebar = () => {
		dispatch(burgerSliceActions.toggleIsOpen());
	};

	const itemsList = useMemo(() => sidebarItemsList.map((item) => (
		<SidebarItem
			item={item}
			collapsed={collapsed}
			key={item.path}
		/>
	)), [collapsed, sidebarItemsList]);

	if (isMobile) {
		return (
			<>
				<Burger onClick={onToggleMobileSidebar}/>
				<CSSTransition 
					nodeRef={nodeRef} 
					in={isOpen} 
					unmountOnExit
					timeout={300}
					classNames={{
						enter: cls.sidebarMobileEnter,
						enterActive: cls.sidebarMobileEnterActive,
						enterDone: cls.sidebarMobileEnterDone,
						exit: cls.sidebarMobileExit,
						exitActive: cls.sidebarMobileExitActive,
					}}>
					<>				
						<Overlay onClick={onToggleMobileSidebar}/>
						<aside 
							data-testid='sidebar'
							className={classNames(
								`${cls.sidebarMobile} ${cls.sidebar}`,
								{[cls.collapsed]: collapsed}, [className]
							)}
							ref={nodeRef}
						>					
							<div className={cls.items}>
								{itemsList}
							</div>
							<div className={cls.switchers}>
								<LangSwitcher 
									short={collapsed} 
								/>
							</div>
						</aside>
					</>			
				</CSSTransition>
			</>			
		);			
	}

	return (
		<aside 
			data-testid='sidebar'
			className={classNames(cls.sidebar, {[cls.collapsed]: collapsed}, [className])}
		>		
			<Button 	
				data-testid='sidebar-toggle'			
				onClick={onToggle}
				className={cls.collapseBtn}
				theme={ButtonTheme.BACKGROUND} 
				size={ButtonSize.L}
				square
			>
				{collapsed ? '>' : '<'}
			</Button>
			<div className={cls.items}>
				{itemsList}
			</div>
			<div className={cls.switchers}>
				<LangSwitcher 
					short={collapsed} 
				/>
			</div>
		</aside>
	);
});