import { ComponentStory, ComponentMeta } from '@storybook/react';
import {
	ThemeDecorator
} from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ArticleDetails } from './ArticleDetails';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

export default {
	title: 'nameDirectory/ArticleDetails',
	component: ArticleDetails,
	argTypes: {
		backgroundColor: { control: 'color' },
	}
} as ComponentMeta<typeof ArticleDetails>;

const Template: ComponentStory<typeof ArticleDetails> = (args) => <ArticleDetails {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];