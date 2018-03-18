import { combineReducers } from 'redux';
import messages from './messages';
import waveform from './waveform';

export default combineReducers({
  messages,
  waveform
});