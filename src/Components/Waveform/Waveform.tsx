import React from 'react';
import WaveformActivePart from './WaveformActivePart';
import * as Convertor from '../../Helpers/Convertor';

type Props = {
    waveformData: Array<Array<number>>,
    background: string,
    totalLength: number
};

class Waveform extends React.Component<Props> {      

    render() {
        const { waveformData, background, totalLength } = this.props;

        if (!waveformData) {
            return null;
        }
        
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