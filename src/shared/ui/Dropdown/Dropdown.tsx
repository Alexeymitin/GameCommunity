import { Menu } from '@headlessui/react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Fragment, ReactNode } from 'react';
import { DropdownDirection } from 'shared/types/ui';
import { AppLink, AppLinkTheme } from '../AppLink/AppLink';
import cls from './Dropdown.module.scss';
import { Button, ButtonTheme } from '../Button/Button';

export interface DropdownItem {
    disabled?: boolean;
    content?: ReactNode;
    onClick?: () => void;
    href?: string;
}

interface DropdownProps {
    className?: string;
    items: DropdownItem[];
    direction?: DropdownDirection;
    trigger: ReactNode;
}

const mapDirectionClass: Record<DropdownDirection, string> = {
	'bottom left': cls.optionsBottomLeft,
	'bottom right': cls.optionsBottomRight,
	'top right': cls.optionsTopRight,
	'top left': cls.optionsTopLeft,
};

export function Dropdown(props: DropdownProps) {
	const {
		className, trigger, items, direction = 'bottom right',
	} = props;

	const menuClasses = [mapDirectionClass[direction]];

	return (
		<Menu as="div" className={classNames(cls.dropdown, {}, [className])}>
			<Menu.Button className={cls.btn}>
				{trigger}
			</Menu.Button>
			<Menu.Items className={classNames(cls.menu, {}, menuClasses)}>
				{items.map((item) => {
					const content = ({ active }: {active: boolean}) => (
						<button
							type="button"
							disabled={item.disabled}
							onClick={item.onClick}
							className={classNames(cls.item, { [cls.active]: active })}
						>
							{item.content}
						</button>
					);

					if (item.href) {
						return (
							<Menu.Item 
								as={AppLink} 
								to={item.href} 
								theme={AppLinkTheme.SECONDARY} 
								disabled={item.disabled} 
								key={item.href}
							>
								{content}
							</Menu.Item>
						);
					}

					return (
						<Menu.Item as={Button} theme={ButtonTheme.CLEAR} disabled={item.disabled} key={item.href}>
							{content}
						</Menu.Item>
					);
				})}

			</Menu.Items>
		</Menu>
	);
}
