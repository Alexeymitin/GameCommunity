import { ComponentStory, ComponentMeta } from '@storybook/react';
import {
	ThemeDecorator
} from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Code } from './Code';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

export default {
	title: 'shared/Code',
	component: Code,
	argTypes: {
		backgroundColor: { control: 'color' },
	}
} as ComponentMeta<typeof Code>;

const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;

export const Light = Template.bind({});
Light.args = {
	text: 
`export default {
	title: 'nameDirectory/Code',
	component: Code,
	argTypes: {
		backgroundColor: { control: 'color' },
	}
} as ComponentMeta<typeof Code>;

const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;`
};
Light.decorators = [StoreDecorator({})];

export const Dark = Template.bind({});
Dark.args = {
	text: 
`export default {
	title: 'nameDirectory/Code',
	component: Code,
	argTypes: {
		backgroundColor: { control: 'color' },
	}
} as ComponentMeta<typeof Code>;

const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;`
};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];