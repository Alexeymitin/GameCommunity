import { ReactNode, useEffect } from 'react';
import { useStore } from 'react-redux';
import { ReduxStoreWithManager } from 'app/providers/StoreProvider';
import { StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema';
import { Reducer } from '@reduxjs/toolkit';
import { useAppDispatch } from '../../hooks/useAppDispatch/useAppDispatch';

export type ReducersList = {
	[name in StateSchemaKey]?: Reducer;
}

interface DynamicModuleLoaderProps {
	reducers: ReducersList
	removeAfterUnmount?: boolean;
	children: ReactNode;
}

export const DynamicModuleLoader = (props: DynamicModuleLoaderProps) => {
	const {
		children, 
		reducers,
		removeAfterUnmount = true
	} = props;

	const store = useStore() as ReduxStoreWithManager;
	const dispatch = useAppDispatch();

	useEffect(() => {
		const mountedReducers = store.reducerManager.getMountedReducers();

		Object.entries(reducers).forEach(([name, reducer]) => {
			const mounted = mountedReducers[name as StateSchemaKey];
			if(!mounted) {
				store.reducerManager.add(name as StateSchemaKey, reducer);
				//TODO убрать dispatch, он нужен только для отслеживания в консоле
				dispatch({type: `@INIT ${name} reducer`});
			}			
		});
		
		return () => {			
			if(removeAfterUnmount) {
				Object.entries(reducers).forEach(([name]) => {
					store.reducerManager.remove(name as StateSchemaKey);
					//TODO убрать dispatch, он нужен только для отслеживания в консоле
					dispatch({type: `@DESTROY ${name} reducer`});
				});
			}			
		};
	// eslint-disable-next-line react-hooks/exhaustive-deps
	},[]);

	return (
		<>
			{children}
		</>
	);
};