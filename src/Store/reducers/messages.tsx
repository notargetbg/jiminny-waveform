import { Message } from "../../Types/Types";

type Action = {
    type: string,
    payload: Message
  }

const messages = (state = [], action: Action) => {
  switch (action.type) {
    case 'ADD_MESSAGE':
        return [ ...state, {
            id: action.payload.id,
            text: action.payload.text,
            time: action.payload.time
            }
        ];
    case 'EDIT_MESSAGE':
        return state.map((message: Message) => { 
            return message.id === action.payload.id ? {...message, text: action.payload.text} : message;
        });
    case 'REMOVE_MESSAGE':
        return [...state.slice(0, action.payload.id), ...state.slice(action.payload.id + 1)];
    default:
      return state;
  }
}

export default messages;