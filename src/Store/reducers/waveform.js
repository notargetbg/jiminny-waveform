const waveform = (state = [], action) => {
  switch (action.type) {
    case 'GET_WAVEFORM_DATA':
        return [ ...state, {
            waveformData: action.payload,
            }
        ];    
    default:
      return state;
  }
}

export default waveform;