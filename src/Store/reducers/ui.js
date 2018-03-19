const initialState = {
    shouldIndicatorShow: false,
    shouldFormShow: false,
    order: 'ASC'
  };

const ui = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_SETTINGS_UI':
        return {...state,  ...{...action.payload }};
        
        default:
            return state;
    }
  }
  
  export default ui;