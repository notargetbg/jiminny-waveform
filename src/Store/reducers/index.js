import { combineReducers } from 'redux';
import messages from './messages';
import waveform from './waveform';
import ui from './ui';

export default combineReducers({
  messages,
  waveform,
  ui
});