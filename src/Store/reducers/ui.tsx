import { UI } from "../../Types/Types";

type Action = {
  type: string,
  payload: UI
}

const initialState = {
    shouldIndicatorShow: false,
    shouldFormShow: false,
    isMessageOrderToggled: false,
    order: 'ASC'
  };

const ui = (state = initialState, action: Action) => {
    switch (action.type) {
        case 'UPDATE_SETTINGS_UI':
        return {...state,  ...{...action.payload }};
        
        default:
            return state;
    }
  }
  
  export default ui;