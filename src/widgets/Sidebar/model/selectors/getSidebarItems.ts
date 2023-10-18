import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from 'entities/User';
import AboutIcon from 'shared/assets/icons/about.svg';
import CreateIcon from 'shared/assets/icons/create.svg';
import MainIcon from 'shared/assets/icons/main.svg';
import ArticlesIcon from 'shared/assets/icons/newspaper.svg';
import ProfileIcon from 'shared/assets/icons/profile.svg';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { SidebarItemType } from '../types/sidebar';


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
			{
				path: RoutePath.articles,
				Icon: ArticlesIcon,
				text: 'Article Page',
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
					path: RoutePath.article_create,
					Icon: CreateIcon,
					text: 'Create Article',
					authOnly: true
				},
			);
		}

		return sidebarItemsList;
	}
);