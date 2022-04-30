const formVisibilityControl = (state = {visibility: false}, action) => {
  switch(action.type) {
    case 'SET_FORM_VISIBLE':
      return {
        ...state,
        visibility: true,
        note: action.note
      };
    case 'SET_FORM_INVISIBLE':
      return {
        visibility: false
      };
    default:
      return state;
  }
}

export default formVisibilityControl;
