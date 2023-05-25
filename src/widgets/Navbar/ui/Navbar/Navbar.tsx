import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useState, useCallback } from 'react';
import { Modal } from 'shared/ui/Modal/Modal';

interface NavbarProps {
	className?: string;
}

export const Navbar = ({className}: NavbarProps) => {

	const {t} = useTranslation();

	const [isAuthModal, setIsAuthModal] = useState(false);

	const onToggleModal = useCallback(() => {
		setIsAuthModal((prev) => !prev);
	}, []);

	return (
		<div className={classNames(cls.navbar, {}, [className])}>
			<Button
				theme={ButtonTheme.OUTLINE}
				className={cls.links}
				onClick={onToggleModal}
			>
				{t('Login')}
			</Button>
			<Modal isOpen={isAuthModal} onClose={onToggleModal}>
				{/* eslint-disable-next-line */}
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio voluptatibus quas qui tempora voluptates, odit inventore dolor in dolorem ipsum porro natus numquam tempore iste iusto. Corporis nulla autem quaerat.
			</Modal>
		</div>
	);
};

