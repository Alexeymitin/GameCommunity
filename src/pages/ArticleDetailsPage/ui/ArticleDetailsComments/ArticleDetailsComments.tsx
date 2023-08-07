import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { CommentList } from 'entities/Comment';
import { AddCommentForm } from 'features/addCommentForm';
import { TextSize, Text } from 'shared/ui/Text/Text';
import { getArticleCommentsIsLoading } from '../../model/selectors/comments';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import { getArticleComments } from '../../model/slices/articleDetailsCommentsSlice';
import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchCommentByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';

interface ArticleDetailsCommentsProps {
	className?: string;
	id: string;
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
			<AddCommentForm onSendComment={onSendComment}/>
			<CommentList isLoading={commentsIsLoading} comments={comments}/>
		</div>
	);
};