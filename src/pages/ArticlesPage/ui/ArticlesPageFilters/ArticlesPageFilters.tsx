import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticlesPageFilters.module.scss';
import { useTranslation } from 'react-i18next';
import { ArticleSortField, ArticleTypeTabs, ArticleView, ArticleViewSelector } from 'entities/Article';
import { articlesPageActions } from '../../model/slices/articlesPageSlice';
import { useCallback } from 'react';
import { 
	getArticlesPageOrder, 
	getArticlesPageSearch, 
	getArticlesPageSort, 
	getArticlesPageType, 
	getArticlesPageView 
} from '../../model/selectors/articlesPageSelectors';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Card } from 'shared/ui/Card/Card';
import { Input } from 'shared/ui/Input/Input';
import { ArticleSortSelector } from 'entities/Article';
import { SortOrder } from 'shared/types';
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList';
import { useDebounce } from 'shared/lib/hooks/useDebounce/useDebounce';
import { ArticleType } from 'entities/Article/model/types/article';

interface ArticlesPageFiltersProps {
	className?: string;
}

export const ArticlesPageFilters = ({className}: ArticlesPageFiltersProps) => {
	const {t} = useTranslation('article');
	const view = useSelector(getArticlesPageView);
	const dispatch = useAppDispatch();
	const sort = useSelector(getArticlesPageSort);
	const order = useSelector(getArticlesPageOrder);
	const search = useSelector(getArticlesPageSearch);
	const type = useSelector(getArticlesPageType);

	const fetchData = useCallback(() => {
		dispatch(fetchArticlesList({replace: true}));
	},[dispatch]);

	const debounceFetchData = useDebounce(fetchData, 500);

	const onChangeView = useCallback((view: ArticleView) => {
		dispatch(articlesPageActions.setView(view));
	}, [dispatch]);

	const onChangeOrder = useCallback((newOrder: SortOrder) => {
		dispatch(articlesPageActions.setOrder(newOrder));
		dispatch(articlesPageActions.setPage(1));
		fetchData();
	}, [dispatch, fetchData]);

	const onChangeSort = useCallback((newSort: ArticleSortField) => {
		dispatch(articlesPageActions.setSort(newSort));
		dispatch(articlesPageActions.setPage(1));
		fetchData();
	}, [dispatch, fetchData]);

	const onChangeSearch = useCallback((search: string) => {
		dispatch(articlesPageActions.setSearch(search));
		dispatch(articlesPageActions.setPage(1));
		debounceFetchData();
	}, [dispatch, debounceFetchData]);

	const onChangeType = useCallback((value: ArticleType) => {
		dispatch(articlesPageActions.setType(value));
		dispatch(articlesPageActions.setPage(1));
		fetchData();
	}, [dispatch, fetchData]);

	return (
		<div className={classNames(cls.articlesPageFilters, {}, [className])}>
			<div className={cls.sortWrapper}>
				<ArticleSortSelector
					order={order}
					sort={sort}
					onChangeOrder={onChangeOrder}
					onChangeSort={onChangeSort}
				/>
				<ArticleViewSelector 
					view={view} 
					onViewClick={onChangeView}
				/>
			</div>
			<Card className={cls.search}>
				<Input 
					placeholder={t('Search')}
					value={search}
					onChange={onChangeSearch}
				/>
			</Card>
			<ArticleTypeTabs 
				value={type}
				onChangeType={onChangeType}
				className={cls.tabs}
			/>
		</div>
	);
};