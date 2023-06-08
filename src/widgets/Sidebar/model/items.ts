import AboutIcon from 'shared/assets/icons/about.svg';
import MainIcon from 'shared/assets/icons/main.svg';
import ProfileIcon from 'shared/assets/icons/profile.svg';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

export interface SidebarItemType {
	path: string;
	text: string;
	Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const SidebarItemsList: SidebarItemType[] = [
	{
		path: RoutePath.main,
		Icon: MainIcon,
		text: 'Main Page'
	},
	{
		path: RoutePath.about,
		Icon: AboutIcon,
		text: 'About Page'
	},
	{
		path: RoutePath.profile,
		Icon: ProfileIcon,
		text: 'Profile Page'
	}
];