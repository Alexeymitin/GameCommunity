import { Suspense, memo, useCallback } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AppRoutesProps, routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader';
import { RequireAuth } from './RequireAuth';

const AppRouter = () => {
	const renderWithWrapper = useCallback((route: AppRoutesProps) => {
		const element = (
			<Suspense fallback={<PageLoader/>}>
				{route.element}
			</Suspense>
		);
		return (
			<Route
				key={route.path}
				path={route.path}
				element={route.authOnly ? <RequireAuth>{element}</RequireAuth> : element}
			/>
		);
	},[]);

	return (
		<Routes>
			{Object.values(routeConfig).map(renderWithWrapper)}
			
			{/* Если без закрытых путей, то использовать данный вариант:
			{routes.map(({element, path}) => (
				<Route
					key={path}
					path={path}
					element={(
						<Suspense fallback={<PageLoader/>}>
							<div className='pageWrapper'>
								{element}
							</div>
						</Suspense>

					)}
				/>
			))} */}
		</Routes>
	);
};

export default memo(AppRouter); 