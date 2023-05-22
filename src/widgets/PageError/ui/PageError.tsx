import { classNames } from 'shared/lib/classNames/classNames';
import cls from './PageError.module.scss';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';


interface PageErrorProps {
	className?: string;
}

export const PageError = ({className}: PageErrorProps) => {

	const {t} = useTranslation();

	const reloadPage = () => {
		location.reload();
	};
	
	return (
		<div className={classNames(cls.pageError, {}, [className])}>
			<p>{t('An unexpected error has occurred')}</p>
			<Button theme={ThemeButton.SWITCHERLIGHT} onClick={reloadPage}>
				{t('Refresh page')}
			</Button>
		</div>
	);
};