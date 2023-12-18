/* eslint-disable i18next/no-literal-string */
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { PageWrapper } from 'widgets/PageWrapper/PageWrapper';
import Logo from '../../../shared/assets/img/logo.png';
import cls from './NotFoundPage.module.scss';


interface NotFoundPageProps {
	className?: string;
}

export const NotFoundPage = ({className}: NotFoundPageProps) => {

	const {t} = useTranslation();

	return (
		<PageWrapper data-testid="NotFoundPage" className={classNames(cls.notFoundPage, {}, [className])}>
			<div className={classNames(cls.wrapper, {}, [className])}>
				<img src={Logo} alt="logo" />
				<h1>TeamHost</h1>
			</div>
			<h2>{t('PAGE NOT FOUND')}</h2>
		</PageWrapper>
	);
};