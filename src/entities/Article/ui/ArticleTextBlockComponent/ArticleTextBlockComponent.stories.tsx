import { ComponentStory, ComponentMeta } from '@storybook/react';
import {
	ThemeDecorator
} from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ArticleTextBlockComponent } from './ArticleTextBlockComponent';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

export default {
	title: 'nameDirectory/ArticleTextBlockComponent',
	component: ArticleTextBlockComponent,
	argTypes: {
		backgroundColor: { control: 'color' },
	}
} as ComponentMeta<typeof ArticleTextBlockComponent>;

const Template: ComponentStory<typeof ArticleTextBlockComponent> = (args) => <ArticleTextBlockComponent {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];