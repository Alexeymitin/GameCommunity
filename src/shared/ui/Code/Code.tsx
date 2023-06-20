import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Code.module.scss';
import { memo, useCallback } from 'react';
import { Button, ButtonTheme } from '../Button/Button';
import { Icon } from '../Icon/Icon';
import CopyIcon from 'shared/assets/icons/iconButton.svg';

interface CodeProps {
	className?: string;
	text: string;
}

export const Code = memo(({className, text}: CodeProps) => {

	const onCopy = useCallback(() => {
		navigator.clipboard.writeText(text);
	},[text]);

	return (
		<pre className={classNames(cls.code, {}, [className])}>
			<Button 
				onClick={onCopy}
				className={cls.copyBtn} 
				theme={ButtonTheme.CLEAR}
			>
				<Icon Svg={CopyIcon}/>
			</Button>
			<code>
				{text}
			</code>
		</pre>
		
	);
});