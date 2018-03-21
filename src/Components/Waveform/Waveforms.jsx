import React from 'react';
import { connect } from 'react-redux';
import Waveform from '../Waveform/Waveform';
import Indicator from '../Indicator/Indicator';
import Loader from '../Loader/Loader';
import { getWaveformData, updateWaveformTotalDuration } from '../../Store/actions';

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
        this.props.dispatch(getWaveformData());
        this.setWaveformsWidth(this.waveformsEl.clientWidth);
    }

    componentDidUpdate() {
        const {waveformDataTotalDuration, waveformData} = this.props;

        if (!waveformDataTotalDuration && waveformData.talkTimes) {

            const talkTimesSpeechEndings = Object.entries(waveformData.talkTimes).map(talkTime => {
                return talkTime[1].slice(-1);
            }).map(x => x[0][1]);

            const duration = Math.max(...talkTimesSpeechEndings)
            this.props.dispatch(updateWaveformTotalDuration(duration));
        }
    }

    render() {
        const { waveformData } = this.props;

        return (            
            <div className="waveforms" ref={(el) => { this.waveformsEl = el; }}>
                { !waveformData.talkTimes &&
                    <Loader color="#07b874" />
                }
                {waveformData.talkTimes &&
                <div>
                    <Indicator totalLength={this.state.waveformsWidth} />			
                    <Waveform waveformData={waveformData.talkTimes.user} background={"#f23e57"}/>
                    <Waveform waveformData={waveformData.talkTimes.customer} background={"#02B875"} />
                </div>
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        waveformData: state.waveform,
        waveformDataTotalDuration: state.waveform.waveformDataTotalDuration
    }
}

export default connect(mapStateToProps)(Waveforms);