import { ArticleBlockType, ArticleView } from '../../model/consts/articleConsts';
import { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';
import EyeIcon from 'shared/assets/icons/eye.svg';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Card } from 'shared/ui/Card/Card';
import { Icon } from 'shared/ui/Icon/Icon';
import { Text } from 'shared/ui/Text/Text';
import { Article, ArticleTextBlock } from '../../model/types/article';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import cls from './ArticleListItem.module.scss';
import { AppImage } from 'shared/ui/AppImage/AppImage';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';

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

	const types = <Text text={article.type.join(', ')} className={cls.types}/>;
	const views = (
		<>
			<Text text={String(article.views)} className={cls.views}/>
			<Icon Svg={EyeIcon}/>
		</>
	);
	const image = <AppImage 
		src={article.img} 
		alt={article.title} 
		className={cls.img}
		fallback={<Skeleton width={'100%'} height={250}/>}
	/>;

	if (view == ArticleView.LIST) {
		const textBlock = article.blocks.find(
			block => block.type === ArticleBlockType.TEXT
		) as ArticleTextBlock;

		return (
			<div className={classNames(cls.articleListItem, {}, [className, cls[view]])}>
				<Card className={cls.card}>
					<div className={cls.header}>
						<Avatar size={30} src={article.user.avatar}/>
						<Text text={article.user.username} className={cls.username}/>
						<Text text={article.releaseDate} className={cls.date}/>
					</div>
					<Text title={article.title} className={cls.title}/>
					{types}
					{image}
					{textBlock && (
						<ArticleTextBlockComponent block={textBlock} className={cls.textBlock}/>
					)}
					<div className={cls.footer}>
						<AppLink
							target={target}
							to={RoutePath.article_details + article.id}
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
					<Text text={article.releaseDate} className={cls.date}/>
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