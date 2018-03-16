let messageId = 0
export const addMessage = (text) => ({
  type: 'ADD_MESSAGE',
  payload: {
    id: messageId++,
    text
  }
});

export const removeMessage = (id) => ({
  type: 'REMOVE_MESSAGE',
  payload: id,
});

// Todo add edit message and love action