import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AddCommentForm.module.scss';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import { getAddCommentFormText } from '../../model/selectors/addCommentFormSelectors';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { addCommentFormActions, addCommentFormReducer } from '../../model/slices/addCommentFormSlice';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

export interface AddCommentFormProps {
	className?: string;
	onSendComment: (text: string) => void;
}

const reducers: ReducersList = {
	addCommentForm: addCommentFormReducer
};
const AddCommentForm = ({className, onSendComment}: AddCommentFormProps) => {
	const {t} = useTranslation('article');
	const text = useSelector(getAddCommentFormText);
	// const error = useSelector(getAddCommentFormError);
	const dispatch = useAppDispatch();

	const onCommentTextChange = useCallback((value: string) => {
		dispatch(addCommentFormActions.setText(value));
	}, [dispatch]);

	const onSendHandler = useCallback(() => {
		onSendComment(text || '');
		onCommentTextChange('');
	},[onCommentTextChange, onSendComment, text]);

	return (
		<DynamicModuleLoader reducers={reducers}>
			<div className={classNames(cls.addCommentForm, {}, [className])}>
				<Input 
					className={cls.input}
					placeholder={t('Enter comment text')}
					value={text}
					onChange={onCommentTextChange}
				/>
				<Button
					onClick={onSendHandler}
					theme={ButtonTheme.BACKGROUND}
				>
					{t('Create')}
				</Button>
			</div>
		</DynamicModuleLoader>
	);
};

export default AddCommentForm;