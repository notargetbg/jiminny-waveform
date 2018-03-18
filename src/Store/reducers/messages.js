const messages = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MESSAGE':
        return [ ...state, {
            id: action.payload.id,
            text: action.payload.text,
            time: action.payload.time
            }
        ];
    case 'EDIT_MESSAGE':
        return state.map((message, i) => { 
            return message.id === action.payload.id ? {...message, text: action.payload.text} : message;
        });
    case 'REMOVE_MESSAGE':
        return [...state.slice(0, action.payload), ...state.slice(action.payload + 1)];
    default:
      return state;
  }
}

export default messages;