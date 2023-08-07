import { useTranslation } from 'react-i18next';
import { ArticleList } from 'entities/Article';
import { getArticlesPageError, getArticlesPageIsLoading, getArticlesPageView } from '../../model/selectors/articlesPageSelectors';
import { getArticles } from '../../model/slices/articlesPageSlice';
import { useSelector } from 'react-redux';
import { Text } from 'shared/ui/Text/Text';

interface ArticleInfiniteListProps {
	className?: string;
}

export const ArticleInfiniteList = ({className}: ArticleInfiniteListProps) => {
	const {t} = useTranslation('article');
	const articles = useSelector(getArticles.selectAll);
	const isLoading = useSelector(getArticlesPageIsLoading);
	const view = useSelector(getArticlesPageView);
	const error = useSelector(getArticlesPageError);
	

	if(error) {
		return <Text title={t('Error loading articles')}/>;
	}

	return (
		<ArticleList
			isLoading={isLoading}
			view={view}
			articles={articles}
			className={className}
		/>
	);
};