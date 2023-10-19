import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import {
    ThemeDecorator
} from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { AvatarDropdown } from './AvatarDropdown';

export default {
	title: 'nameDirectory/AvatarDropdown',
	component: AvatarDropdown,
	argTypes: {
		backgroundColor: { control: 'color' },
	}
} as ComponentMeta<typeof AvatarDropdown>;

const Template: ComponentStory<typeof AvatarDropdown> = (args) => <AvatarDropdown {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];