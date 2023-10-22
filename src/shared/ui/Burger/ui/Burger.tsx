import { useSelector } from 'react-redux';
import { Mods, classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '../../Button/Button';
import cls from './Burger.module.scss';
import { getBurgerIsOpen } from '../model/selectors/burgerSelectors';

interface BurgerProps {
	className?: string;
	onClick?: () => void
}

export const Burger = (props: BurgerProps) => {
	const {
		className,
		onClick
	} = props;

	const isOpen = useSelector(getBurgerIsOpen);

	const mods: Mods = {
		[cls.active]: isOpen
	};

	return (
		<Button 
			className={classNames(cls.burger, mods, [className])} 
			theme={ButtonTheme.CLEAR}
			onClick={onClick}
		>
			<span></span>
			<span></span>
			<span></span>
		</Button>
	);
};