import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleSortSelector.module.scss';
import { useTranslation } from 'react-i18next';
import { Select, SelectOption } from 'shared/ui/Select/Select';
import { memo, useMemo } from 'react';
import { ArticleSortField } from '../../model/types/article';
import { SortOrder } from 'shared/types';

interface ArticleSortSelectorProps {
	className?: string;
	sort: ArticleSortField;
	order: SortOrder;
	onChangeOrder: (newOrder: SortOrder) => void;
	onChangeSort: (newSort: ArticleSortField) => void;
}

export const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
	const {
		className,
		sort,
		order,
		onChangeOrder,
		onChangeSort
	} = props;
	const {t} = useTranslation('article');

	const orderOptions = useMemo<SelectOption<SortOrder>[]>(() => [
		{
			value: 'asc',
			content: t('increasing')
		},
		{
			value: 'desc',
			content: t('decreasing')
		}
	], [t]);

	const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(() => [
		{
			value: ArticleSortField.CREATED,
			content: t('release date')
		},
		{
			value: ArticleSortField.TITLE,
			content: t('title')
		},
		{
			value: ArticleSortField.VIEWS,
			content: t('views')
		},
	], [t]);

	return (
		<div className={classNames(cls.articleSortSelector, {}, [className])}>
			<Select 
				options={sortFieldOptions} 
				label={t('Sort by')}
				value={sort}
				onChange={onChangeSort}
			/>
			<Select 
				options={orderOptions} 
				label={t('by')}
				value={order}
				onChange={onChangeOrder}
				className={cls.order}
			/>
		</div>
	);
});