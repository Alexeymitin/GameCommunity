import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ArticleList, ArticleView, ArticleViewSelector } from 'entities/Article';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import { articlesPageActions, articlesPageReducer, getArticles } from '../../model/slices/articlesPageSlice';
import cls from './ArticlesPage.module.scss';
import {
	getArticlesPageError,
	getArticlesPageIsLoading,
	getArticlesPageView,
} from '../../model/selectors/articlesPageSelectors';
import { PageWrapper } from 'widgets/PageWrapper/PageWrapper';
import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters';
import { useSearchParams } from 'react-router-dom';

interface ArticlesPageProps {
    className?: string;
}

const reducers: ReducersList = {
	articlesPage: articlesPageReducer,
};

const ArticlesPage = (props: ArticlesPageProps) => {
	const { className } = props;
	const { t } = useTranslation('article');
	const dispatch = useAppDispatch();
	const articles = useSelector(getArticles.selectAll);
	const isLoading = useSelector(getArticlesPageIsLoading);
	const view = useSelector(getArticlesPageView);
	const error = useSelector(getArticlesPageError);
	const [searchParams] = useSearchParams();

	const onLoadNextPart = useCallback(() => {
		dispatch(fetchNextArticlesPage());
	}, [dispatch]);

	useInitialEffect(() => {
		dispatch(initArticlesPage(searchParams));
	});

	return (
		<DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
			<PageWrapper
				onScrollEnd={onLoadNextPart}
				className={classNames(cls.articlesPage, {}, [className])}
			>
				<ArticlesPageFilters/>
				<ArticleList
					isLoading={isLoading}
					view={view}
					articles={articles}
					className={cls.list}
				/>
			</PageWrapper>
		</DynamicModuleLoader>
	);
};

export default memo(ArticlesPage);
