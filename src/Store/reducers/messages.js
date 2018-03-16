const messages = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MESSAGE':
        return [ ...state, {
            id: action.payload.id,
            text: action.payload.text,
            time: null
            }
        ];
    case 'REMOVE_MESSAGE':
        return [...state.slice(0, action.payload), ...state.slice(action.payload + 1)];
    default:
      return state;
  }
}

export default messages;