import { ComponentStory, ComponentMeta } from '@storybook/react';

import { 
	ThemeDecorator 
} from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Button, ThemeButton } from './Button';


export default {
	title: 'shared/Button',
	component: Button,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	children: 'Text'
};

Primary.decorators = [ThemeDecorator(Theme.DARK)];


export const Outline = Template.bind({});
Outline.args = {
	children: 'Text',
	theme: ThemeButton.OUTLINE,
};


export const SwitcherLanguage = Template.bind({});
SwitcherLanguage.args = {
	children: 'Text',
	theme: ThemeButton.SWITCHERLANGUAGE,
};

export const SwitcherSidebar = Template.bind({});
SwitcherSidebar.args = {
	children: 'Text',
	theme: ThemeButton.SWITCHERSIDEBAR,
};



