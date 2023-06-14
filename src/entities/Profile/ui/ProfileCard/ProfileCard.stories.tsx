import { ComponentStory, ComponentMeta } from '@storybook/react';
import  {ProfileCard}  from './ProfileCard';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import AvatarImg from 'shared/assets/tests/storybook.jpg';


export default {
	title: 'entities/ProfileCard',
	component: ProfileCard,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	data: {
		username: 'admin',
		age: 22,
		country: Country.Armenia,
		lastname: 'admin',
		first: 'admin',
		city: 'Moscow',
		currency: Currency.USD,
		avatar: AvatarImg
	}
};

export const Loading = Template.bind({});
Loading.args = {
	isLoading: true
};

export const withError = Template.bind({});
withError.args = {
	error: 'true'
};










