import React from 'react';
import { connect } from 'react-redux';
import Waveform from '../Waveform/Waveform';
import Indicator from '../Waveform/Indicator';
import Loader from '../Loader/Loader';
import { updateWaveformsWidth , getWaveformData, updateWaveformTotalDuration } from '../../Store/actions';
import './indicator.css';

class Waveforms extends React.Component {
    componentDidMount() {       
        this.props.dispatch(getWaveformData());
    }

    componentDidUpdate() {
        const {waveformsWidth, waveformDataTotalDuration, waveformData} = this.props;

        if (!waveformsWidth) {
            this.props.dispatch(updateWaveformsWidth(this.waveformsEl.clientWidth));
        }
        if (!waveformDataTotalDuration && waveformData.talkTimes) {
            const duration = waveformData.talkTimes.user[ waveformData.talkTimes.user.length - 1 ][1];
            this.props.dispatch(updateWaveformTotalDuration(duration));
        }
    }

    render() {
        const { waveformsWidth, waveformData } = this.props;
        return (            
            <div className="waveforms" ref={(el) => { this.waveformsEl = el; }}>
                { (!waveformData || !waveformData.talkTimes) &&
                    <Loader color="#07b874" />
                }
                {waveformData && waveformData.talkTimes &&
                <div>
                    <Indicator totalLength={waveformsWidth} />			
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
        waveformsWidth: state.ui.waveformsWidth,
        waveformData: state.waveform,
        waveformDataTotalDuration: state.waveform.waveformDataTotalDuration
    }
}

export default connect(mapStateToProps)(Waveforms);