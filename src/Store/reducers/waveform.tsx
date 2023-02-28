import { Waveform } from "../../Types/Types";

type Action = {
  type: string,
  payload: Waveform
}

const waveform = (state = {}, action: Action) => {
  switch (action.type) {
    case 'GET_WAVEFORM_DATA':
        return {...state, ...action.payload};
    case 'UPDATE_WAVEFORM_TOTAL_DURATION':
        return {...state,  ...{ waveformDataTotalDuration: action.payload} };
    default:
      return state;
  }
}

export default waveform;