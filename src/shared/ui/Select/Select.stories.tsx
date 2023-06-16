/* eslint-disable react/jsx-props-no-spreading */
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Select } from './Select';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

export default {
	title: 'shared/Select',
	component: Select,
	argTypes: {
		backgroundColor: { control: 'color' },
	}
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	label: 'Укажите значение',
	options: [
		{value: '123', content: 'Первый пункт'},
		{value: '1234', content: 'Второй пункт'}
	]
};







