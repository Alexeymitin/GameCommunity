import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleDetails.module.scss';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import { memo, useEffect } from 'react';
import { fetchArticleByID } from '../../model/services/fetchArticleById/fetchArticleById';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { getArticleDetailsIsLoading } from '../../model/selector/getArticleDetailsIsLoading/getArticleDetailsIsLoading';
import { getArticleDetailsError } from '../../model/selector/getArticleDetailsError/getArticleDetailsError';
import { getArticleDetailsData } from '../../model/selector/getArticleDetailsData/getArticleDetailsData';
import { Text, TextAlign } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';

interface ArticleDetailsProps {
	className?: string;
	id: string;
}

const reducers: ReducersList = {
	articleDetails: articleDetailsReducer
};

export const ArticleDetails = memo(({className, id}: ArticleDetailsProps) => {
	const {t} = useTranslation();
	const dispatch = useAppDispatch();
	const isLoading = useSelector(getArticleDetailsIsLoading);
	const error = useSelector(getArticleDetailsError);
	const article = useSelector(getArticleDetailsData);

	useEffect(() => {
		dispatch(fetchArticleByID(id));
	},[dispatch, id]);

	let content;

	if(isLoading) {
		content = (
			<div>
				<Skeleton className={cls.avatar} width={200} height={200} border={'50%'}/>
				<Skeleton className={cls.title} width={300} height={32}/>
				<Skeleton className={cls.skeleton} width={600} height={24}/>
				<Skeleton className={cls.skeleton} width={'100%'} height={200}/>
				<Skeleton className={cls.skeleton} width={'100%'} height={200}/>
				<Skeleton className={cls.skeleton} width={'100%'} height={200}/>
				<Skeleton className={cls.skeleton} width={'100%'} height={200}/>
			</div>
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
			<div>ARTICLES DETAILS</div>
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