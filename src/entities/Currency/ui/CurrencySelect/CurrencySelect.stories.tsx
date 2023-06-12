/* eslint-disable react/jsx-props-no-spreading */
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CurrencySelect } from './CurrencySelect';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

export default {
	title: 'entities/CurrencySelect',
	component: CurrencySelect,
	argTypes: {
		backgroundColor: { control: 'color' },
	}
} as ComponentMeta<typeof CurrencySelect>;

const Template: ComponentStory<typeof CurrencySelect> = (args) => <CurrencySelect {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

export const DarkTheme = Template.bind({});
DarkTheme.args = {};
DarkTheme.decorators = [ThemeDecorator(Theme.DARK)];








