import { StateSchema } from 'app/providers/StoreProvider';

export const getBurgerIsOpen = (state: StateSchema) => state.burger.isOpen || false;


