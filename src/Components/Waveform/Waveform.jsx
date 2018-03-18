import React from 'react';
import WaveformActivePart from './WaveformActivePart';
import * as Convertor from '../../Helpers/Convertor';
import './waveform.css';

class Waveform extends React.Component {      

    render() {
        const { waveformData, background } = this.props;

        if (!waveformData) {
            return null;
        }
        
        const talkTimesLength = waveformData.length;
        const totalLength = waveformData[talkTimesLength - 1][1];
        
        return (
            <div className="waveform-holder">
				{waveformData.map((wfData, index) => (
					<WaveformActivePart
						key={index} 
						start={Convertor.convertSecondsToPercents(wfData[0], totalLength)} 
						end={Convertor.convertSecondsToPercents(wfData[1], totalLength)} 
						background={background} 
					/>
				))}
			</div>
        )
    }
}

export default Waveform;