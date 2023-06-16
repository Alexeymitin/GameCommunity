import { StateSchema } from 'app/providers/StoreProvider';
import { getArticleDetailsData } from './getArticleDetailsData';
import { ArticleBlockType, ArticleType } from '../../types/article';

describe('getArticleDetailsData.test', () => {
	test('should return error', () => {
		const data = {
			id: '1',
			title: 'Javascript news',
			subtitle: 'Что нового в JS за 2022 год?',
			img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
			views: 1022,
			createdAt: '26.02.2022',
			types: ArticleType.SCIENCE,
			blocks: [{
				id: '1',
				type: ArticleBlockType.CODE,
				code: 'Code'
			}]
		};
		const state: DeepPartial<StateSchema> = {
			articleDetails: {
				data
			}
		};
		expect(getArticleDetailsData(state as StateSchema)).toEqual(data);
	});

	test('should work with empty state', () => {
		const state: DeepPartial<StateSchema> = {};
		expect(getArticleDetailsData(state as StateSchema)).toEqual(undefined);
	});
});