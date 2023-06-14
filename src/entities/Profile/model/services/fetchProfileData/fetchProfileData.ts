import { createAsyncThunk } from '@reduxjs/toolkit'; 
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile } from '../../types/profile';

export const fetchProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
	'login/fetchProfileData',
	async (_, thunkApi) => {
		
		const {extra, rejectWithValue} = thunkApi;

		try {
			const response = await extra.api.get<Profile>('/profile');
			
			if(!response.data) {
				throw new Error();
			}
			
			return response.data;
		} catch (e) {
			console.log(e);
			return rejectWithValue('error');
		}
		
	}
);