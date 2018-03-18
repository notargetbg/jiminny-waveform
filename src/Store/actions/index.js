const WAVEFORM_API_EDPOINT = 'https://rawgit.com/jiminny/join-the-team/master/assets/wavedata.json';

let messageId = 0
export const addMessage = (text, time) => ({
  type: 'ADD_MESSAGE',
  payload: {
    id: messageId++,
    text,
    time
  }
});

export const editMessage = (id, text) => ({
  type: 'EDIT_MESSAGE',
  payload: {
    id,
    text
  }
});

export const removeMessage = (id) => ({
  type: 'REMOVE_MESSAGE',
  payload: id,
});

export const updateWaveformsWidth = (width) => ({
  type: 'UPDATE_WAVEFORMS_WIDTH',
  payload: width,
});

export const updateSettingsUI = (options) => ({
  type: 'UPDATE_SETTINGS_UI',
  payload: options,
});

export const getWaveformData = () => {
  return (dispatch) => {
    return fetch(WAVEFORM_API_EDPOINT)
    .then(response => response.json())
    .then(json => dispatch(getWaveformDataResolved(json)))
  }
}

export const getWaveformDataResolved = (payload) => {
  return {
    type: 'GET_WAVEFORM_DATA',
    payload
  }
}

export const updateWaveformTotalDuration = (duration) => {
  return {
    type: 'UPDATE_WAVEFORM_TOTAL_DURATION',
    payload: duration
  }
}