import { ComponentStory, ComponentMeta } from '@storybook/react';

import { 
	ThemeDecorator 
} from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text, TextTheme } from './Text';


export default {
	title: 'shared/Text',
	component: Text,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	title: 'Title lore iii',
	text: 'description description description description'
};

export const Error = Template.bind({});
Error.args = {
	title: 'Title lore iii',
	text: 'description description description description',
	theme: TextTheme.ERROR
};

export const onlyTitle = Template.bind({});
onlyTitle.args = {
	title: 'Title lore iii',
};

export const onlyText = Template.bind({});
onlyText.args = {
	text: 'description description description description'
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
	title: 'Title lore iii',
	text: 'description description description description'
};

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTitleDark = Template.bind({});
onlyTitleDark.args = {
	title: 'Title lore iii',
};

onlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTextDark = Template.bind({});
onlyTextDark.args = {
	text: 'description description description description'
};

onlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const ErrorDark = Template.bind({});
ErrorDark.args = {
	title: 'Title lore iii',
	text: 'description description description description',
	theme: TextTheme.ERROR
};

ErrorDark.decorators = [ThemeDecorator(Theme.DARK)];








