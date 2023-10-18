import { ArticleView } from '../../model/consts/articleConsts';
import { memo } from 'react';
import ListIcon from 'shared/assets/icons/list.svg';
import PlateIcon from 'shared/assets/icons/plate.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import cls from './ArticleViewSelector.module.scss';

interface ArticleViewSelectorProps {
	className?: string;
	view: ArticleView;
	onViewClick?: (view: ArticleView) => void;
}

const viewTypes = [
	{
		view: ArticleView.PLATE,
		icon: PlateIcon
	},
	{
		view: ArticleView.LIST,
		icon: ListIcon
	},
];

export const ArticleViewSelector = memo(({className, view, onViewClick}: ArticleViewSelectorProps) => {

	const onClick = (newView: ArticleView) => () => {
		onViewClick?.(newView);
	};

	return (
		<div className={classNames(cls.articleViewSelector, {}, [className])}>
			{viewTypes.map(viewType => (
				<Button 
					theme={ButtonTheme.CLEAR} 
					onClick={onClick(viewType.view)}
					key={viewType.view}
				>
					<Icon 
						Svg={viewType.icon}
						className={classNames('', {[cls.selected]: viewType.view === view})}
					/>
				</Button>
			))}
		</div>
	);
});