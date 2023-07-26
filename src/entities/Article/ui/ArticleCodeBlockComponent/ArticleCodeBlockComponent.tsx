import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleCodeBlockComponent.module.scss';
import { memo } from 'react';
import { Code } from 'shared/ui/Code/Code';
import { ArticleCodeBlock } from '../../model/types/article';

interface ArticleCodeBlockComponentProps {
	className?: string;
	block: ArticleCodeBlock
}

export const ArticleCodeBlockComponent = memo(({className, block}: ArticleCodeBlockComponentProps) => {

	return (
		<div className={classNames(cls.articleCodeBlockComponent, {}, [className])}>
			<Code text={block.code}/>
		</div>
	);
});