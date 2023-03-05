import { combineReducers } from 'redux';
import messages from './messages';
import waveform from './waveform';
import ui from './ui';
import { Message, WaveformType } from '../../Types/Types';

export default combineReducers({
  messages,
  waveform,
  ui
});

export type AppState = {
  messages: Array<Message>,
  waveform: WaveformType, 
  ui: {
    shouldFormShow: boolean,
    shouldIndicatorShow: boolean,
    isMessageOrderToggled: boolean
  }
};