/* eslint-disable react/jsx-props-no-spreading */
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Avatar } from './Avatar';
import AvatarImg from './storybook.jpg';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

export default {
	title: 'shared/Avatar',
	component: Avatar,
	argTypes: {
		backgroundColor: { control: 'color' },
	}
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	size: 150,
	src: AvatarImg
};

export const Small = Template.bind({});
Small.args = {
	size: 50,
	src: AvatarImg
};

export const DarkTheme = Template.bind({});
DarkTheme.args = {
	size: 150,
	src: AvatarImg
};
DarkTheme.decorators = [ThemeDecorator(Theme.DARK)];






