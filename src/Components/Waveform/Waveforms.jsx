import React from 'react';
import waveformData from '../../Store/dummy';
import Waveform from '../Waveform/Waveform';
import Indicator from '../Waveform/Indicator';
import './indicator.css';

class Waveforms extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
            waveformsWidth: null
        };
    }

    setWaveformsWidth = (width) => {
        this.setState({
            waveformsWidth: width
        });
    }

    componentDidMount() {
        this.setWaveformsWidth(this.waveformsEl.clientWidth);
    }

    render() {
        // todo get data...
        
        return (            
            <div className="waveforms" ref={(el) => { this.waveformsEl = el; }}>	
                <Indicator totalLength={this.state.waveformsWidth} />			
                <Waveform waveformData={waveformData.talkTimes.user} background={"#f23e57"}/>
                <Waveform waveformData={waveformData.talkTimes.customer} background={"#02B875"} />
            </div>
        )
    }
}

export default Waveforms;