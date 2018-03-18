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

export const getWaveformData = (data) => ({
  type: 'GET_WAVEFORM_DATA',
  payload: data,
});