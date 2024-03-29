import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import {
    ThemeDecorator
} from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { NotificationItem } from './NotificationItem';

export default {
	title: 'nameDirectory/NotificationItem',
	component: NotificationItem,
	argTypes: {
		backgroundColor: { control: 'color' },
	}
} as ComponentMeta<typeof NotificationItem>;

const Template: ComponentStory<typeof NotificationItem> = (args) => <NotificationItem {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];