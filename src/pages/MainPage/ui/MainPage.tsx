import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/ErrorBoundary';
import { Counter } from 'entities/Counter';
import { Input } from 'shared/ui/Input/Input';
import { useState } from 'react';

const MainPage = () => {

	const {t} = useTranslation('main');

	const [value, setValue] = useState('');

	const onChange = (val: string) => {
		setValue(val);
	};

	return (
		<div>
			<BugButton/>
			{t('Main Page')}
			<Counter/>

			<Input
				placeholder={'Введите текст'}
				value={value}
				onChange={onChange}			
			/>
		</div>
	);
};

export default MainPage;