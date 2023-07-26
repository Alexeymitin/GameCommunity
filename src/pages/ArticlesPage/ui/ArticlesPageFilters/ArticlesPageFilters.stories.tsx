import { ComponentStory, ComponentMeta } from '@storybook/react';
import {
	ThemeDecorator
} from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ArticlesPageFilters } from './ArticlesPageFilters';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

export default {
	title: 'pages/Article/ArticlesPageFilters',
	component: ArticlesPageFilters,
	argTypes: {
		backgroundColor: { control: 'color' },
	}
} as ComponentMeta<typeof ArticlesPageFilters>;

const Template: ComponentStory<typeof ArticlesPageFilters> = (args) => <ArticlesPageFilters {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];