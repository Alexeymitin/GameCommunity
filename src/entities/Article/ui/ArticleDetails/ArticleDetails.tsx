import { ArticleBlockType } from '../../model/consts/articleConsts';
import { memo, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import ECalendarIcon from 'shared/assets/icons/calendar.svg';
import EyeIcon from 'shared/assets/icons/eye.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Icon } from 'shared/ui/Icon/Icon';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Text, TextAlign, TextSize } from 'shared/ui/Text/Text';
import { getArticleDetailsData } from '../../model/selector/getArticleDetailsData/getArticleDetailsData';
import { getArticleDetailsError } from '../../model/selector/getArticleDetailsError/getArticleDetailsError';
import { getArticleDetailsIsLoading } from '../../model/selector/getArticleDetailsIsLoading/getArticleDetailsIsLoading';
import { fetchArticleByID } from '../../model/services/fetchArticleById/fetchArticleById';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import { ArticleBlock } from '../../model/types/article';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import cls from './ArticleDetails.module.scss';

interface ArticleDetailsProps {
	className?: string;
	id?: string;
}

const reducers: ReducersList = {
	articleDetails: articleDetailsReducer
};

export const ArticleDetails = memo(({className, id}: ArticleDetailsProps) => {
	const {t} = useTranslation('article');
	const dispatch = useAppDispatch();
	const isLoading = useSelector(getArticleDetailsIsLoading);
	const error = useSelector(getArticleDetailsError);
	const article = useSelector(getArticleDetailsData);

	const renderBlock = useCallback((block: ArticleBlock) => {
		switch (block.type) {
		case ArticleBlockType.CODE:
			return <ArticleCodeBlockComponent key={block.id} className={cls.block} block={block}/>;
		case ArticleBlockType.IMAGE:
			return <ArticleImageBlockComponent key={block.id} className={cls.block} block={block}/>;
		case ArticleBlockType.TEXT:
			return <ArticleTextBlockComponent key={block.id} className={cls.block} block={block}/>;
		default:
			return null;
		}
	}, []);
	
	useEffect(() => {
		if(__PROJECT__ !== 'storybook') {
			
			dispatch(fetchArticleByID(id));
		}
	},[dispatch, id]);

	let content;

	if(isLoading) {
		content = (
			<>
				<Skeleton className={cls.avatar} width={200} height={200} border={'50%'}/>
				<Skeleton className={cls.title} width={300} height={32}/>
				<Skeleton className={cls.skeleton} width={600} height={24}/>
				<Skeleton className={cls.skeleton} width={'100%'} height={200}/>
				<Skeleton className={cls.skeleton} width={'100%'} height={200}/>
				<Skeleton className={cls.skeleton} width={'100%'} height={200}/>
				<Skeleton className={cls.skeleton} width={'100%'} height={200}/>
			</>
		);
	} else if(error) {
		content = (
			<Text
				align={TextAlign.CENTER}
				title={t('An error occurred during the uploading of an article')}
			/>
		);
	} else {
		content = (
			<>
				<div className={cls.avatarWrapper}>
					<Avatar 
						size={200} 
						src={article?.img} 
						className={cls.avatar}
					/>
				</div>

				<Text
					className={cls.title}
					title={article?.title}
					text={article?.subtitle}
					size={TextSize.L}
				/>
				<div className={cls.articleInfo}>
					<Icon className={cls.icon} Svg={EyeIcon}/>
					<Text text={String(article?.views)}/>
				</div>
				<div className={cls.articleInfo}>
					<Icon className={cls.icon} Svg={ECalendarIcon}/>
					<Text text={article?.releaseDate}/>
				</div>
				{article?.blocks.map(renderBlock)}
			</>
		);
	}
	
	return (
		<DynamicModuleLoader reducers={reducers} removeAfterUnmount={true}>
			<div className={classNames(cls.articleDetails, {}, [className])}>
				{content}
			</div>
		</DynamicModuleLoader>
		
	);
});