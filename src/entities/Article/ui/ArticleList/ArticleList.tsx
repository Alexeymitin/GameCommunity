import { ArticleView } from 'entities/Article/model/consts/articleConsts';
import { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { Article } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import cls from './ArticleList.module.scss';

interface ArticleListProps {
	className?: string;
	articles: Article[];
	isLoading?: boolean;
	view?: ArticleView;
	target?: HTMLAttributeAnchorTarget;
}

const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.PLATE ? 9 : 3)
	.fill(0)
	.map((item, index) => (
		<ArticleListItemSkeleton className={cls.card} key={index} view={view} />
	));

export const ArticleList = memo((props: ArticleListProps) => {
	const {
		className,
		articles,
		isLoading,
		view = ArticleView.PLATE,
		target
	} = props;
	const {t} = useTranslation('article');

	const renderArticle = (article: Article) => {
		return (
			<ArticleListItem 
				article={article} 
				view={view} 
				className={cls.card}
				key={article.id}
				target={target}
			/>
		);
	};

	if(!isLoading && !articles.length) {
		return (
			<div className={classNames(cls.articleList, {}, [className, cls[view]])}>
				<Text size={TextSize.L} title={t('Articles not found')}/>
			</div>
		);
	}
	
	return (
		
		<div className={classNames(cls.articleList, {}, [className, cls[view]])}>		
			{/* <Virtuoso
				style={{ height: '700px' }}
				totalCount={articles.length}
				itemContent={(index) => <ArticleListItem 
					article={articles[index]} 
					view={view} 
					className={cls.card}
					key={index}
					target={target}
				/>}
			/> */}
			
			{articles.length > 0
				? articles.map(renderArticle)
				: null} 
			{isLoading && getSkeletons(view)}
		</div>
	);
}); 