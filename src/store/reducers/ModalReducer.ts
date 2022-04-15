interface modalState {
  modalVisible: boolean;
}

enum modalActionTypes {
  TOGGLE_MODAL = "TOGGLE_MODAL",
}

interface toggleModal {
  type: modalActionTypes.TOGGLE_MODAL;
  payload?: boolean;
}

type modalAction = toggleModal;

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
