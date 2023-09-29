import { ArticleType } from 'entities/Article/model/consts/articleConsts';
import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { TabItem, Tabs } from 'shared/ui/Tabs/Tabs';

interface ArticleTypeTabsProps {
	className?: string;
	value: ArticleType;
	onChangeType: (type: ArticleType) => void;
}

export const ArticleTypeTabs = memo(({className, value, onChangeType}: ArticleTypeTabsProps) => {
	const {t} = useTranslation('article');
	const typeTabs = useMemo<TabItem[]>(() => [
		{
			value: ArticleType.ALL,
			content: t('All articles')
		},
		{
			value: ArticleType.PC,
			content: t('PC')
		},
		{
			value: ArticleType.PS5,
			content: t('PS5')
		},
		{
			value: ArticleType.XBOX,
			content: t('Xbox')
		},
	], [t]);

	const onTabClick = useCallback((tab: TabItem) => {
		onChangeType(tab.value as ArticleType);
	}, [onChangeType]);

	return (
		<Tabs 
			tabs={typeTabs}
			value={value}
			onTabClick={onTabClick}
			className={classNames('', {}, [className])}
		/>
	);
});