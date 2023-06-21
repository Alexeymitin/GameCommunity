import { classNames } from 'shared/lib/classNames/classNames';
import cls from './CommentList.module.scss';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { CommentCard } from '../CommentCard/CommentCard';
import { Comment } from '../../model/types/comment';

interface CommentListProps {
	className?: string;
	comments?: Comment[];
	isLoading?: boolean;
}

export const CommentList = ({className, comments, isLoading}: CommentListProps) => {
	const {t} = useTranslation();

	if(isLoading) {
		return (
			<div className={classNames(cls.commentList, {}, [className])}>
				<CommentCard isLoading/>
				<CommentCard isLoading/>
				<CommentCard isLoading/>
			</div>
		);
	}

	return (
		<div className={classNames(cls.commentList, {}, [className])}>
			{comments?.length
				?	comments.map((comment) => (
					<CommentCard 
						className={cls.comment} 
						comment={comment} 
						isLoading={isLoading}
						key={comment.id}
					/>
				))
				: <Text text={t('Comment not found')}/>
			}
		</div>
	);
};