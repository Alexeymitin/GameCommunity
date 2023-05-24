/* eslint-disable i18next/no-literal-string */
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { useEffect, useState } from 'react';


//Компонент для тестирования ошибок

export const BugButton = () => {

	const [error, setError] = useState(false);

	const onThrow = () => setError(true);

	useEffect(() => {
		if(error) {
			throw new Error();
		}
			
	}, [error]);

	return (
		<Button 
			onClick={onThrow}
			theme={ThemeButton.SWITCHERLIGHT}
		>
			throw Error
		</Button>
	);
};