import { ComponentStory, ComponentMeta } from '@storybook/react';
import { 
	ThemeDecorator 
} from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import ProfilePage from './ProfilePage';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';


export default {
	title: 'pages/ProfilePage',
	component: ProfilePage,
	argTypes: {
		backgroundColor: { control: 'color' },
	}
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage {...args}/>;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({
	profile: {
		form: {
			username: 'admin',
			age: 22,
			country: Country.Armenia,
			lastname: 'admin',
			first: 'admin',
			city: 'Moscow',
			currency: Currency.USD,
		}
	}
})];


export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
	profile: {
		form: {
			username: 'admin',
			age: 22,
			country: Country.Armenia,
			lastname: 'admin',
			first: 'admin',
			city: 'Moscow',
			currency: Currency.USD,
		}
	}
})];









