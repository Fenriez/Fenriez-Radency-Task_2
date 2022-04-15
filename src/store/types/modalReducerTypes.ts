export interface modalState {
  modalVisible: boolean;
}

export enum modalActionTypes {
  TOGGLE_MODAL = "TOGGLE_MODAL",
}

interface toggleModal {
  type: modalActionTypes.TOGGLE_MODAL;
  payload?: boolean;
}

export type modalAction = toggleModal;
