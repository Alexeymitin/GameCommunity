/* eslint-disable i18next/no-literal-string */
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './NotFoundPage.module.scss';
import { useTranslation } from 'react-i18next';
import { PageWrapper } from 'shared/ui/PageWrapper/PageWrapper';
// import Logo from '../../../shared/assets/img/logo.png';


interface NotFoundPageProps {
	className?: string;
}

export const NotFoundPage = ({className}: NotFoundPageProps) => {

	const {t} = useTranslation();

	return (
		<PageWrapper className={classNames(cls.notFoundPage, {}, [className])}>
			<div className={classNames(cls.wrapper, {}, [className])}>
				{/* <img src={Logo} alt="logo" /> */}
				<h1>TeamHost</h1>
			</div>
			<h2>{t('PAGE NOT FOUND')}</h2>
		</PageWrapper>
	);
};