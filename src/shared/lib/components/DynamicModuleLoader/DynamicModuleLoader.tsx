import { FC, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { ReduxStoreWithManager } from 'app/providers/StoreProvider';
import { StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema';
import { Reducer } from '@reduxjs/toolkit';

export type ReducersList = {
	[name in StateSchemaKey]?: Reducer;
}

type ReducerListEntry = [StateSchemaKey, Reducer]

interface DynamicModuleLoaderProps {
	reducers: ReducersList
	removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader:FC<DynamicModuleLoaderProps> = (props) => {
	const {
		children, 
		reducers,
		removeAfterUnmount
	} = props;

	const store = useStore() as ReduxStoreWithManager;
	const dispatch = useDispatch();

	useEffect(() => {
		Object.entries(reducers).forEach(([name, reducer]:ReducerListEntry) => {
			store.reducerManager.add(name, reducer);
			dispatch({type: `@INIT ${name} reducer`});
		});
		
		return () => {			
			// TODO: возможно стоить изменить на !removeAfterUnmount что бы не передавать его пропсами постоянно
			if(removeAfterUnmount) {
				Object.entries(reducers).forEach(([name]:ReducerListEntry) => {
					store.reducerManager.remove(name);
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