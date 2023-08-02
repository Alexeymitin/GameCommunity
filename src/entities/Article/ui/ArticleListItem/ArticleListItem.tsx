import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleListItem.module.scss';
import { useTranslation } from 'react-i18next';
import { Article, ArticleBlockType, ArticleTextBlock, ArticleView } from '../../model/types/article';
import { Text } from 'shared/ui/Text/Text';
import { Icon } from 'shared/ui/Icon/Icon';
import EyeIcon from 'shared/assets/icons/eye.svg';
import { Card } from 'shared/ui/Card/Card';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { HTMLAttributeAnchorTarget, memo } from 'react';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';

interface ArticleListItemProps {
	className?: string;
	article: Article;
	view: ArticleView;
	target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
	const {t} = useTranslation('article');
	const {
		className,
		article,
		view,
		target
	} = props;

	const types = <Text text={article?.type.join(', ')} className={cls.types}/>;
	const views = (
		<>
			<Text text={String(article?.views)} className={cls.views}/>
			<Icon Svg={EyeIcon}/>
		</>
	);
	const image = <img src={article?.img} alt={article?.title} className={cls.img}/>;

	if (view == ArticleView.LIST) {
		const textBlock = article?.blocks.find(
			block => block.type === ArticleBlockType.TEXT
		) as ArticleTextBlock;

		return (
			<div className={classNames(cls.articleListItem, {}, [className, cls[view]])}>
				<Card className={cls.card}>
					<div className={cls.header}>
						<Avatar size={30} src={article?.user.avatar}/>
						<Text text={article?.user.username} className={cls.username}/>
						<Text text={article?.createdAt} className={cls.date}/>
					</div>
					<Text title={article?.title} className={cls.title}/>
					{types}
					{image}
					{textBlock && (
						<ArticleTextBlockComponent block={textBlock} className={cls.textBlock}/>
					)}
					<div className={cls.footer}>
						<AppLink
							target={target}
							to={RoutePath.article_details + article?.id}
							theme={AppLinkTheme.SECONDARY}
						>
							<Button theme={ButtonTheme.BACKGROUND}>
								{t('Read more')}
							</Button>
						</AppLink>					
						{views}
					</div>
				</Card>
			</div>
		);
	}

	return (
		<AppLink
			target={target}
			to={RoutePath.article_details + article.id}
			theme={AppLinkTheme.SECONDARY}
			className={classNames(cls.articleListItem, {}, [className, cls[view]])}
		>
			<Card className={cls.card}>
				<div className={cls.imageWrapper}>
					{image}
					<Text text={article.createdAt} className={cls.date}/>
				</div>
				<div className={cls.infoWrapper}>
					{types}
					{views}
				</div>
				<Text text={article.title} className={cls.title}/>
			</Card>
		</AppLink>
	);
});