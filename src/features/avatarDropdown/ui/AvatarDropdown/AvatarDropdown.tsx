import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AvatarDropdown.module.scss';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Dropdown } from 'shared/ui/Popups';
import { getUserAuthData, isUserAdmin, isUserManager, userActions } from 'entities/User';
import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

interface AvatarDropdownProps {
	className?: string;
}

export const AvatarDropdown = ({className}: AvatarDropdownProps) => {
	const {t} = useTranslation();
	const dispatch = useAppDispatch();
	const isAdmin = useSelector(isUserAdmin);
	const isManager = useSelector(isUserManager);
	const authData = useSelector(getUserAuthData);

	const onLogout = useCallback(() => {
		dispatch(userActions.logout());
	}, [dispatch]);

	const isAdminPanelAvailable = isAdmin || isManager;

	if(!authData) {
		return null;
	}

	return (
		<Dropdown
			className={classNames(cls.avatarDropdown, {}, [className])}
			direction="bottom left"
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
	);
};