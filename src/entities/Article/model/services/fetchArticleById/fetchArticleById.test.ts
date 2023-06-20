import { fetchArticleByID } from './fetchArticleById';
import { TestAsyncThunk } from 'shared/lib/tests/testAsyncThunk/testAsyncThunk';

const data = {
	id: '1',
};

describe('fetchArticleByID.test', () => {

	test('success', async () => {	
		const thunk = new TestAsyncThunk(fetchArticleByID);
		thunk.api.get.mockReturnValue(Promise.resolve({data: data}));

		const result = await thunk.callThunk(data.id);

		expect(thunk.api.get).toHaveBeenCalled();
		expect(result.meta.requestStatus).toBe('fulfilled');
		expect(result.payload).toEqual({id: data.id});
	});

	test('error', async () => {
		const thunk = new TestAsyncThunk(fetchArticleByID);
		thunk.api.get.mockReturnValue(Promise.resolve({status: 403}));
		const result = await thunk.callThunk('error');

		expect(result.meta.requestStatus).toBe('rejected');
	});
});