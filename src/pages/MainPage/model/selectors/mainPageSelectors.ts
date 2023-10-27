import { StateSchema } from 'app/providers/StoreProvider';

export const getMainPageIsLoading = (state: StateSchema) => state.mainPage?.isLoading || false;
export const getMainPageError = (state: StateSchema) => state.mainPage?.error;
export const getMainPagePageData = (state: StateSchema) => state.mainPage?.data;

