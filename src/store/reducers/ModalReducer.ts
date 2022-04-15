import {
  modalAction,
  modalActionTypes,
  modalState
} from "../types/modalReducerTypes";

const initialState: modalState = {
  modalVisible: false,
};

export const modalReducer = (
  state = initialState,
  { type, payload }: modalAction
): modalState => {
  switch (type) {
    case modalActionTypes.TOGGLE_MODAL:
      return { ...state, modalVisible: !state.modalVisible };

    default:
      return state;
  }
};
