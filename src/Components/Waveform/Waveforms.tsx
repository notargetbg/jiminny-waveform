import React from 'react';
import { connect } from 'react-redux';
import Waveform from './Waveform';
import Indicator from '../Indicator/Indicator';
import Loader from '../Loader/Loader';
import { getWaveformData, updateWaveformTotalDuration } from '../../Store/actions/main';
import { Action, ActionCreator } from 'redux';
import { AppState } from '../../Store/reducers/main';
import { TalkTimes } from '../../Types/Types';

type Props = {
    dispatch: ActionCreator<Action>,
    waveformDataTotalDuration: number,
    waveformData: {
        talkTimes: TalkTimes
    }
};

type State = {
    waveformsWidth: number,
};

class Waveforms extends React.Component<Props, State> {
    waveformsEl?: HTMLDivElement | null;

    constructor(props: Props) {
        super(props);
        this.state = {
            waveformsWidth: 0
        };
    }

    setWaveformsWidth = (width: number) => {
        this.setState({
            waveformsWidth: width
        });
    }

    componentDidMount() {       
        this.props.dispatch(getWaveformData());
        if (this.waveformsEl) {
            this.setWaveformsWidth(this.waveformsEl.clientWidth);
        }
    }

    componentDidUpdate() {
        const {waveformDataTotalDuration, waveformData} = this.props;

        if (!waveformDataTotalDuration && waveformData.talkTimes) {

            const talkTimesSpeechEndings = Object.entries(waveformData.talkTimes).map(talkTime => {
                return talkTime[1].slice(-1);
            }).map(x => x[0][1]);

            const duration = Math.max(...talkTimesSpeechEndings);
            this.props.dispatch(updateWaveformTotalDuration(duration));
        }
    }

    render() {
        const { waveformData, waveformDataTotalDuration } = this.props;

        console.log(waveformData);

        return (            
            <div className="waveforms" ref={(el) => { this.waveformsEl = el; }}>
                { !waveformData.talkTimes &&
                    <Loader color="#07b874" />
                }
                {waveformData.talkTimes &&
                <div>
                    <Indicator totalLength={this.state.waveformsWidth} />			
                    <Waveform totalLength={waveformDataTotalDuration} waveformData={waveformData.talkTimes.user} background={"#f23e57"}/>
                    <Waveform totalLength={waveformDataTotalDuration} waveformData={waveformData.talkTimes.customer} background={"#02B875"} />
                </div>
                }
            </div>
        )
    }
}

const mapStateToProps = (state: AppState) => {
    return {
        waveformData: state.waveform,
        waveformDataTotalDuration: state.waveform.waveformDataTotalDuration
    }
}

export default connect(mapStateToProps)(Waveforms);