import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleDetailsPageHeader.module.scss';
import { useTranslation } from 'react-i18next';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { getArticleDetailsData } from 'entities/Article';
import { getCanEditArticle } from '../../model/selectors/article';

interface ArticleDetailsPageHeaderProps {
	className?: string;
}

export const ArticleDetailsPageHeader = ({className}: ArticleDetailsPageHeaderProps) => {
	const {t} = useTranslation('article');
	const navigate = useNavigate();
	const canEdit = useSelector(getCanEditArticle);
	const article = useSelector(getArticleDetailsData);

	const onBackToList = useCallback(() => {
		navigate(RoutePath.articles);
	}, [navigate]);

	const onEditArticle = useCallback(() => {
		navigate(`${RoutePath.article_details}${article?.id}/edit`);
	}, [article?.id, navigate]);

	return (
		<div className={classNames(cls.articleDetailsPageHeader, {}, [className])}>
			<Button 
				theme={ButtonTheme.OUTLINE} 
				onClick={onBackToList}
			>
				{t('Back to list')}
			</Button>
			{canEdit && (
				<Button 
					theme={ButtonTheme.OUTLINE} 
					onClick={onEditArticle}
					className={cls.editBtn}
				>
					{t('Edit')}
				</Button>
			)}
		</div>
	);
};