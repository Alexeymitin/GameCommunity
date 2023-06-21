import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from 'entities/User';
import { SidebarItemType } from '../types/sidebar';
import AboutIcon from 'shared/assets/icons/about.svg';
import MainIcon from 'shared/assets/icons/main.svg';
import ProfileIcon from 'shared/assets/icons/profile.svg';
import ArticlesIcon from 'shared/assets/icons/newspaper.svg';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';


export const getSidebarItems = createSelector(
	getUserAuthData,
	(userData) => {
		const sidebarItemsList: SidebarItemType[] = [
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
		];

		if (userData) {
			sidebarItemsList.push(
				{
					path: RoutePath.profile + userData.id,
					Icon: ProfileIcon,
					text: 'Profile Page',
					authOnly: true
				},
				{
					path: RoutePath.articles,
					Icon: ArticlesIcon,
					text: 'Article Page',
					authOnly: true
				}
			);
		}

		return sidebarItemsList;
	}
);