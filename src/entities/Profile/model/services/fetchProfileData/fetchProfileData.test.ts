import { Country } from 'entities/Country';
import { fetchProfileData } from './fetchProfileData';
import { TestAsyncThunk } from 'shared/lib/tests/testAsyncThunk/testAsyncThunk';
import { Currency } from 'entities/Currency';

const data = {
	username: 'admin',
	age: 22,
	country: Country.Armenia,
	lastname: 'admin',
	first: 'admin',
	city: 'Moscow',
	currency: Currency.USD,
};

describe('fetchProfileData.test', () => {

	test('success', async () => {	
		const thunk = new TestAsyncThunk(fetchProfileData);
		thunk.api.get.mockReturnValue(Promise.resolve({data: data}));

		const result = await thunk.callThunk('1');

		expect(thunk.api.get).toHaveBeenCalled();
		expect(result.meta.requestStatus).toBe('fulfilled');
		expect(result.payload).toEqual(data);
	});

	test('error', async () => {
		const thunk = new TestAsyncThunk(fetchProfileData);
		thunk.api.get.mockReturnValue(Promise.resolve({status: 403}));
		const result = await thunk.callThunk('1');

		expect(result.meta.requestStatus).toBe('rejected');
	});
});