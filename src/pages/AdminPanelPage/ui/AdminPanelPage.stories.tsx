import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import {
	ThemeDecorator
} from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { AdminPanelPage } from '..';


export default {
	title: 'pages/AdminPanelPage',
	component: AdminPanelPage,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
	args: {
		to: '/'
	}
} as ComponentMeta<typeof AdminPanelPage>;

const Template: ComponentStory<typeof AdminPanelPage> = () => <AdminPanelPage />;

export const Normal = Template.bind({});
Normal.args = {};



export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];









