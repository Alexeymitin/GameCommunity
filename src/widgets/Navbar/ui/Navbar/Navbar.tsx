import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useState, useCallback, memo } from 'react';
import { LoginModal } from 'features/AuthByUsername';
import { useSelector } from 'react-redux';
import { getUserAuthData, isUserAdmin, isUserManager, userActions } from 'entities/User';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Dropdown } from 'shared/ui/Dropdown/Dropdown';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Avatar } from 'shared/ui/Avatar/Avatar';

interface NavbarProps {
	className?: string;
}

export const Navbar = memo(({className}: NavbarProps) => {

	const {t} = useTranslation();

	const [isAuthModal, setIsAuthModal] = useState(false);
	const authData = useSelector(getUserAuthData);
	const dispatch = useAppDispatch();
	const isAdmin = useSelector(isUserAdmin);
	const isManager = useSelector(isUserManager);

	const onCloseModal = useCallback(() => {
		setIsAuthModal(false);
	}, []);

	const onShowModal = useCallback(() => {
		setIsAuthModal(true);
	}, []);

	const onLogout = useCallback(() => {
		dispatch(userActions.logout());
	}, [dispatch]);

	const isAdminPanelAvailable = isAdmin || isManager;


	if(authData) {
		return (
			<header className={classNames(cls.navbar, {}, [className])}>
				<Dropdown
					direction="bottom left"
					className={cls.dropdown}
					items={[
						...(isAdminPanelAvailable ? [{
							content: t('Admin'),
							href: RoutePath.admin_panel,
						}] : []),
						{
							content: t('Profile'),
							href: RoutePath.profile + authData.id,
						},
						{
							content: t('Logout'),
							onClick: onLogout,
						},
					]}
					trigger={<Avatar size={30} src={authData.avatar} />}
				/>
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