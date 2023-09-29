/* eslint-disable max-len */
import { ArticleDetails } from 'entities/Article';
import { ArticleRecommendationsList } from 'features/articleRecommendationsList';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { PageWrapper } from 'widgets/PageWrapper/PageWrapper';
import { articleDetailsPageReducer } from '../../model/slices';
import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import cls from './ArticleDetailsPage.module.scss';


interface ArticleDetailsPageProps {
	className?: string;
}

const reducers: ReducersList = {
	articleDetailsPage: articleDetailsPageReducer
};

const ArticleDetailsPage = ({className}: ArticleDetailsPageProps) => {
	const {t} = useTranslation('article');
	const {id} = useParams<{id: string}>();

	return (
		<DynamicModuleLoader reducers={reducers} removeAfterUnmount>
			<PageWrapper className={classNames(cls.articleDetailsPage, {}, [className])}>
				<ArticleDetailsPageHeader/>		
				<ArticleDetails id={id}/>
				<ArticleRecommendationsList/>
				<ArticleDetailsComments id={id}/>
			</PageWrapper>
		</DynamicModuleLoader>
	);
};

export default memo(ArticleDetailsPage);