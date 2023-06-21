import { ComponentStory, ComponentMeta } from '@storybook/react';
import {
	ThemeDecorator
} from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { CommentList } from './CommentList';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

export default {
	title: 'entities/Comment/CommentList',
	component: CommentList,
	argTypes: {
		backgroundColor: { control: 'color' },
	}
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />;

export const Light = Template.bind({});
Light.args = {
	comments: [
		{
			id: '1',
			text: 'Hello world',
			user: {id: '1', username: 'admin'}
		},
		{
			id: '2',
			text: 'Hello',
			user: {id: '1', username: 'admin'}
		}
	]
};
Light.decorators = [StoreDecorator({})];

export const Dark = Template.bind({});
Dark.args = {
	comments: [
		{
			id: '1',
			text: 'Hello world',
			user: {id: '1', username: 'admin'}
		},
		{
			id: '2',
			text: 'Hello',
			user: {id: '1', username: 'admin'}
		}
	]
};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];

export const Loading = Template.bind({});
Loading.args = {
	comments: [],
	isLoading: true
};
Loading.decorators = [StoreDecorator({})];