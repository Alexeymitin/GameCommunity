import { classNames } from 'shared/lib/classNames/classNames';
import cls from './NotificationButton.module.scss';
import { NotificationList } from 'entities/Notification';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import NotificationIcon from 'shared/assets/icons/notification-20-20.svg';
import { Popover } from 'shared/ui/Popups';

interface NotificationButtonProps {
	className?: string;
}

export const NotificationButton = ({className}: NotificationButtonProps) => {


	return (
		<Popover 
			className={classNames(cls.notificationButton, {}, [className])}
			direction={'bottom left'}
			trigger={(
				<Button theme={ButtonTheme.CLEAR}>
					<Icon Svg={NotificationIcon}/>
				</Button>
			)}>
			<NotificationList className={cls.notifications}/>
		</Popover>
	);
};