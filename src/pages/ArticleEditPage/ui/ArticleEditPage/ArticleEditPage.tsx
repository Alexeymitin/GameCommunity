import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleEditPage.module.scss';
import { useTranslation } from 'react-i18next';
import { PageWrapper } from 'widgets/PageWrapper/PageWrapper';
import { useParams } from 'react-router-dom';

interface ArticleEditPageProps {
	className?: string;
}
const ArticleEditPage = ({className}: ArticleEditPageProps) => {
	const {t} = useTranslation();
	const {id} = useParams<{id: string}>();
	const isEdit = Boolean(id);

	return (
		<PageWrapper className={classNames(cls.articleEditPage, {}, [className])}>
			{isEdit 
				? t('Редактирование статьи с ID =') + id
				: t('Создание новой статьи')
			}
		</PageWrapper>
	);
};

export default ArticleEditPage;