import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ListBox } from './ListBox';
import { Currency } from 'entities/Currency';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

export default {
	title: 'shared/ListBox',
	component: ListBox,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args} />;

const options = [
	{value: Currency.RUB, content: Currency.RUB},
	{value: Currency.USD, content: Currency.USD},
	{value: Currency.EUR, content: Currency.EUR}
];

export const Light = Template.bind({});
Light.args = {
	label: 'label',
	value: 'value',
	items: options
};
Light.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({})];

export const Dark = Template.bind({});
Dark.args = {
	label: 'label',
	value: 'value',
	items: options
};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];
