import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useState, useCallback } from 'react';
import { LoginModal } from 'features/AuthByUsername';

interface NavbarProps {
	className?: string;
}

export const Navbar = ({className}: NavbarProps) => {

	const {t} = useTranslation();

	const [isAuthModal, setIsAuthModal] = useState(false);

	const onCloseModal = useCallback(() => {
		setIsAuthModal(false);
	}, []);

	const onShowModal = useCallback(() => {
		setIsAuthModal(true);
	}, []);

	return (
		<div className={classNames(cls.navbar, {}, [className])}>
			<Button
				theme={ButtonTheme.OUTLINE}
				className={cls.links}
				onClick={onShowModal}
			>
				{t('Login')}
			</Button>
			<LoginModal 
				isOpen={isAuthModal}
				onClose={onCloseModal}
			/>
		</div>
	);
};

