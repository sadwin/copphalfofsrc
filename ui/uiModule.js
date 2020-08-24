/* Constants */

const OPEN_CONFIRMATION_DIALOG = "OPEN_CONFIRMATION_DIALOG";
const CLOSE_CONFIRMATION_DIALOG = "CLOSE_CONFIRMATION_DIALOG";

/* action */
export const confirmAction = payload => ({
  type: OPEN_CONFIRMATION_DIALOG,
  payload // {title, message, action, confirmLabel, cancelLabel}
});

export const closeConfirmationDialog = () => ({
  type: CLOSE_CONFIRMATION_DIALOG
});

/* reducer */

const initialState = {
  showConfirmDialog: false,
  opened: false,
  confirmOptions: {}
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case OPEN_CONFIRMATION_DIALOG: {
      return {
        ...state,
        opened: true,
        confirmOptions: action.payload
      };
    }
    case CLOSE_CONFIRMATION_DIALOG: {
      return {
        opened: false,
        confirmOptions: {}
      };
    }

    default:
      return state;
  }
}
