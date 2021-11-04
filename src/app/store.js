import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import ModalReducer from '../features/modalSlice';

export default configureStore({
    reducer: userReducer,
});
