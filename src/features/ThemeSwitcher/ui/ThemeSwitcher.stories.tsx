import { ComponentStory, ComponentMeta } from '@storybook/react';

import { 
	ThemeDecorator 
} from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeSwitcher } from './ThemeSwitcher';
import { ThemeButton } from 'shared/ui/Button/Button';


export default {
	title: 'shared/ThemeSwitcher',
	component: ThemeSwitcher,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
	args: {
		to: '/'
	}
} as ComponentMeta<typeof ThemeSwitcher>;

const Template: ComponentStory<typeof ThemeSwitcher> = (args) => <ThemeSwitcher {...args} />;

export const Normal = Template.bind({});
Normal.args = {};



export const Dark = Template.bind({});
Dark.args = {
	theme: ThemeButton.SWITCHERDARK
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];









