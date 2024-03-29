import { Dispatch } from "redux";
import { TalkTimes, Time, UI } from "../../Types/Types";

const WAVEFORM = '../dummy.json';

let messageId = 0
export const addMessage = (text: string, time: Time) => ({
  type: 'ADD_MESSAGE',
  payload: {
    id: messageId++,
    text,
    time
  }
});

export const editMessage = (id: number, text: string) => ({
  type: 'EDIT_MESSAGE',
  payload: {
    id,
    text
  }
});

export const removeMessage = (id: number) => ({
  type: 'REMOVE_MESSAGE',
  payload: id,
});

export const updateSettingsUI = (options: UI) => ({
  type: 'UPDATE_SETTINGS_UI',
  payload: options,
});

export const getWaveformData = () => {

  return (dispatch: Dispatch)  => {
    return fetch(WAVEFORM, {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    })
    .then(response => response.json())
    .then(json => {
      dispatch(getWaveformDataResolved(json))
    })
  }
}

export const getWaveformDataResolved = (payload: TalkTimes) => {
  return {
    type: 'GET_WAVEFORM_DATA',
    payload
  }
}

export const updateWaveformTotalDuration = (duration: number) => {
  return {
    type: 'UPDATE_WAVEFORM_TOTAL_DURATION',
    payload: duration
  }
}