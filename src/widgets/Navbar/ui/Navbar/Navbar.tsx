import { getUserAuthData } from 'entities/User';
import { LoginModal } from 'features/AuthByUsername';
import { AvatarDropdown } from 'features/avatarDropdown';
import { NotificationButton } from 'features/notificationButton';
import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { HStack } from 'shared/ui/Stack';
import cls from './Navbar.module.scss';

interface NavbarProps {
	className?: string;
}

export const Navbar = memo(({className}: NavbarProps) => {
	const {t} = useTranslation();
	const [isAuthModal, setIsAuthModal] = useState(false);
	const authData = useSelector(getUserAuthData);
	
	const onCloseModal = useCallback(() => {
		setIsAuthModal(false);
	}, []);

	const onShowModal = useCallback(() => {
		setIsAuthModal(true);
	}, []);

	if(authData) {
		return (
			<header className={classNames(cls.navbar, {}, [className])}>
				<HStack gap={'16'} className={cls.actions}>				
					<NotificationButton/>				
					<AvatarDropdown/>
				</HStack>			
			</header>
		);		
	}

	return (	
		<header className={classNames(cls.navbar, {}, [className])}>
			<Button
				theme={ButtonTheme.BACKGROUND}
				className={cls.links}
				onClick={onShowModal}
			>
				{t('Login')}
			</Button>
			{isAuthModal && 
				<LoginModal 
					isOpen={isAuthModal}
					onClose={onCloseModal}
				/>
			}		
		</header>
	);
});