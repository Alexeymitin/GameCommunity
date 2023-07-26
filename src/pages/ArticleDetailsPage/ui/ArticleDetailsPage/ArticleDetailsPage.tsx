/* eslint-disable max-len */
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleDetailsPage.module.scss';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ArticleDetails, ArticleList } from 'entities/Article';
import { useNavigate, useParams } from 'react-router-dom';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { CommentList } from 'entities/Comment';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articleDetailsCommentsReducer, getArticleComments } from '../../model/slices/articleDetailsCommentsSlice';
import { useSelector } from 'react-redux';
import { getArticleCommentsIsLoading } from '../../model/selectors/comments';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { fetchCommentByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { AddCommentForm } from 'features/addCommentForm';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { PageWrapper } from 'widgets/PageWrapper/PageWrapper';
import { getArticleRecommendationsIsLoading } from '../../model/selectors/recommendations';
import { 
	getArticleRecommendations 
} from '../../model/slices/articleDetailsPageRecommendationsSlice';
import { fetchArticleRecommendations } from '../../model/services/fetchArticleRecommendations/fetchArticleRecommendations';
import { articleDetailsPageReducer } from '../../model/slices';


interface ArticleDetailsPageProps {
	className?: string;
}

const reducers: ReducersList = {
	articleDetailsPage: articleDetailsPageReducer
};

const ArticleDetailsPage = ({className}: ArticleDetailsPageProps) => {
	const {t} = useTranslation('article');
	const {id} = useParams<{id: string}>();
	const comments = useSelector(getArticleComments.selectAll);
	const recommendations = useSelector(getArticleRecommendations.selectAll);
	const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
	const recommendationsIsLoading = useSelector(getArticleRecommendationsIsLoading);
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const onBackToList = useCallback(() => {
		navigate(RoutePath.articles);
	}, [navigate]);

	const onSendComment = useCallback((text: string) => {
		dispatch(addCommentForArticle(text));
	},[dispatch]);

	useInitialEffect(() => {
		dispatch(fetchCommentByArticleId(id));
		dispatch(fetchArticleRecommendations());
	});

	if(!id) {
		return (
			<PageWrapper className={classNames(cls.articleDetailsPage, {}, [className])}>
				{t('Article not found')}
			</PageWrapper>
		);
	}

	return (
		<DynamicModuleLoader reducers={reducers} removeAfterUnmount>
			<PageWrapper className={classNames(cls.articleDetailsPage, {}, [className])}>
				<Button theme={ButtonTheme.OUTLINE} onClick={onBackToList}>
					{t('Back to list')}
				</Button>
				<ArticleDetails id={id}/>
				<Text
					size={TextSize.L}
					className={cls.commentTitle}
					title={t('Recommendations')}
				/>
				<ArticleList 
					articles={recommendations}
					isLoading={recommendationsIsLoading}
					className={cls.recommendations}
					target='_blank'
				/>
				<Text
					size={TextSize.L}
					className={cls.commentTitle}
					title={t('Comments')}
				/>
				<AddCommentForm onSendComment={onSendComment}/>
				<CommentList isLoading={commentsIsLoading} comments={comments}/>
			</PageWrapper>
		</DynamicModuleLoader>
	);
};

export default memo(ArticleDetailsPage);