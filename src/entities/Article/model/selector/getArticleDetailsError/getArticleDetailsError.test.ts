import { StateSchema } from 'app/providers/StoreProvider';
import { getArticleDetailsError } from './getArticleDetailsError';

describe('getArticleDetailsError.test', () => {
	test('should return error', () => {
		const state: DeepPartial<StateSchema> = {
			articleDetails: {
				error: '123'
			}
		};
		expect(getArticleDetailsError(state as StateSchema)).toEqual('123');
	});

	test('should work with empty state', () => {
		const state: DeepPartial<StateSchema> = {};
		expect(getArticleDetailsError(state as StateSchema)).toEqual(undefined);
	});
});