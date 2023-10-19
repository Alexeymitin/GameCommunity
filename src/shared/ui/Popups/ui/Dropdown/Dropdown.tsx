import { Menu } from '@headlessui/react';
import { ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { DropdownDirection } from 'shared/types/ui';
import { AppLink, AppLinkTheme } from '../../../AppLink/AppLink';
import { Button, ButtonTheme } from '../../../Button/Button';
import { mapDirectionClass } from '../styles/consts';
import cls from './Dropdown.module.scss';
import popupCls from '../styles/popup.module.scss';

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

export function Dropdown(props: DropdownProps) {
	const {
		className, trigger, items, direction = 'bottom right',
	} = props;

	const menuClasses = [mapDirectionClass[direction]];

	return (
		<Menu as="div" className={classNames(cls.dropdown, {}, [className])}>
			<Menu.Button className={popupCls.trigger}>
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
