import { classNames } from 'shared/lib/classNames/classNames';
import cls from './PageWrapper.module.scss';
import { MutableRefObject, ReactNode, memo, useRef } from 'react';
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';

interface PageWrapperProps {
	className?: string;
	children: ReactNode;
	onScrollEnd?: () => void
}

export const PageWrapper = memo(({className, children, onScrollEnd}: PageWrapperProps) => {
	const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
	const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

	useInfiniteScroll({
		triggerRef,
		wrapperRef,
		callback: onScrollEnd
	});

	return (
		<section 
			ref={wrapperRef}
			className={classNames(cls.pageWrapper, {}, [className])}
		>
			{children}
			<div ref={triggerRef}/>
		</section>
	);
});