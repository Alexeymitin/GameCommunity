import { NotificationList } from 'entities/Notification';
import { useCallback, useState } from 'react';
import { BrowserView, MobileView, isMobile } from 'react-device-detect';
import NotificationIcon from 'shared/assets/icons/notification-20-20.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Drawer } from 'shared/ui/Drawer/Drawer';
import { Icon } from 'shared/ui/Icon/Icon';
import { Popover } from 'shared/ui/Popups';
import cls from './NotificationButton.module.scss';
import { AnimationProvider } from 'shared/lib/components/AnimationProvider';

interface NotificationButtonProps {
	className?: string;
}

export const NotificationButton = ({className}: NotificationButtonProps) => {
	const [isOpen, setOpen] = useState(false);

	const onOpenDrawer = useCallback(() => {
		setOpen(true);
	},[]);

	const onCloseDrawer = useCallback(() => {
		setOpen(false);
	},[]);

	const trigger = (
		<Button onClick={onOpenDrawer} theme={ButtonTheme.CLEAR}>
			<Icon Svg={NotificationIcon}/>
		</Button>
	);

	// if(isMobile) {
	// 	return (
	// 		<div>
	// 			{trigger}
	// 			<Drawer isOpen={isOpen} onClose={onCloseDrawer}>
	// 				<NotificationList/>
	// 			</Drawer>;
	// 		</div>		
	// 	);		
	// }

	return (
		<div>
			<BrowserView>
				<Popover
					className={classNames(cls.notificationButton, {}, [className])}
					direction="bottom left"
					trigger={trigger}
				>
					<NotificationList className={cls.notifications} />
				</Popover>
			</BrowserView>
			<MobileView>
				{trigger}
				<AnimationProvider>
					<Drawer isOpen={isOpen} onClose={onCloseDrawer}>
						<NotificationList />
					</Drawer>
				</AnimationProvider>
			</MobileView>
		</div>
	);
};