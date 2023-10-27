import { CommentList } from 'entities/Comment';
import { AddCommentForm } from 'features/addCommentForm';
import { Suspense, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { getArticleCommentsIsLoading } from '../../model/selectors/comments';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import { fetchCommentByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { getArticleComments } from '../../model/slices/articleDetailsCommentsSlice';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';

interface ArticleDetailsCommentsProps {
	className?: string;
	id?: string;
}

export const ArticleDetailsComments = ({className, id}: ArticleDetailsCommentsProps) => {
	const {t} = useTranslation('article');
	const dispatch = useAppDispatch();
	const comments = useSelector(getArticleComments.selectAll);
	const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
	
	const onSendComment = useCallback((text: string) => {
		dispatch(addCommentForArticle(text));
	},[dispatch]);

	useInitialEffect(() => {
		dispatch(fetchCommentByArticleId(id));
	});
	
	return (
		<div className={classNames('', {}, [className])}>
			<Text
				size={TextSize.L}
				title={t('Comments')}
			/>
			<Suspense fallback={<Skeleton/>}>
				<AddCommentForm onSendComment={onSendComment}/>
			</Suspense>		
			<CommentList isLoading={commentsIsLoading} comments={comments}/>
		</div>
	);
};