import { MainPage } from 'pages/MainPage';
import { AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { ArticleDetailsSchema } from 'entities/Article';
import { CounterSchema } from 'entities/Counter';
import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUsername';
import { addCommentFormSchema } from 'features/addCommentForm';
import { ProfileSchema } from 'features/editableProfileCard';
import { ScrollSaveSchema } from 'features/scrollSave';
import { 
	ArticleDetailsPageSchema, 
} from 'pages/ArticleDetailsPage';
import { ArticlesPageSchema } from 'pages/ArticlesPage';
import { rtkApi } from 'shared/api/rtkApi';
import { BurgerSchema } from 'shared/ui/Burger';
import { MainPageSchema } from 'pages/MainPage/model/types/mainPageSchema';

export interface StateSchema {
	counter: CounterSchema;
	user: UserSchema;
	scrollSave: ScrollSaveSchema;
	burger: BurgerSchema;
	[rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;

	// Async reducers
	loginForm?: LoginSchema;
	profile?: ProfileSchema;
	articleDetails?: ArticleDetailsSchema;
	addCommentForm?: addCommentFormSchema;
	articlesPage?: ArticlesPageSchema;
	mainPage?: MainPageSchema;
	articleDetailsPage?: ArticleDetailsPageSchema;
	
}

export type StateSchemaKey = keyof StateSchema;
export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>

export interface ReducerManager {
	getReducerMap: () => ReducersMapObject<StateSchema>;
	reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
	add: (key: StateSchemaKey, reducer: Reducer) => void;
	remove: (key: StateSchemaKey) => void;
	getMountedReducers: () => MountedReducers;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema>{
	reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
	api: AxiosInstance;
}

export interface ThunkConfig<T> {
	rejectValue: T;
	extra: ThunkExtraArg;
	state: StateSchema;
}