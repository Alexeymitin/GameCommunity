import { ComponentStory, ComponentMeta } from '@storybook/react';

import { 
	ThemeDecorator 
} from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from './Modal';


export default {
	title: 'shared/Modal',
	component: Modal,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const LightTheme = Template.bind({});
LightTheme.args = {
	isOpen: true,
	children: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum sequi, in voluptas reprehenderit tempora voluptatem enim provident vero excepturi obcaecati, fugit assumenda quasi, minus minima! Eveniet animi consequuntur pariatur sit!'
};

export const DarkTheme = Template.bind({});
DarkTheme.args = {
	isOpen: true,
	children: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum sequi, in voluptas reprehenderit tempora voluptatem enim provident vero excepturi obcaecati, fugit assumenda quasi, minus minima! Eveniet animi consequuntur pariatur sit!'
};

DarkTheme.decorators = [ThemeDecorator(Theme.DARK)];





