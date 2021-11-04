import { createSlice } from '@reduxjs/toolkit';

export const modalSlice = createSlice({
    name: 'modal',
    initialState: {
        modalOpened: false,
    },
    reducers: {
        toggleModal: (state, action) => {
            state.modalOpened = !state;
        },
    },
});

export const { toggleModal } = modalSlice.actions;

export const selectModal = (state) => state.modal.modalOpened;

export default modalSlice.reducer;
