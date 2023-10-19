import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import {
    ThemeDecorator
} from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { NotificationButton } from './NotificationButton';

export default {
	title: 'nameDirectory/NotificationButton',
	component: NotificationButton,
	argTypes: {
		backgroundColor: { control: 'color' },
	}
} as ComponentMeta<typeof NotificationButton>;

const Template: ComponentStory<typeof NotificationButton> = (args) => <NotificationButton {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];