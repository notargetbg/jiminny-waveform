import React from 'react';
import moment, { Moment } from 'moment';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import * as Convertor from '../../Helpers/Convertor';
import { updateSettingsUI } from '../../Store/actions/main';
import CommentForm from './CommentForm';
import Marker from './Marker';
import { IndicatorPosition, Time } from '../../Types/Types';
import { AppState } from '../../Store/reducers/main';

interface Props {
    waveformDataTotalDuration: number;
    totalLength: number;
    shouldFormShow: boolean;
    shouldIndicatorShow: boolean;
    dispatch: Dispatch;
}

interface State {
    indicatorPosition: IndicatorPosition;
    time: Time | null;
    message: string | null;
}

class Indicator extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            indicatorPosition: null,
            time: null,
            message: null
        };
    }

    setIndicatorPositionAndTime = (position: number, time: Moment) => {
        this.setState({
            indicatorPosition: position,
            time
        });
    }

    handleIndicator = (e: React.MouseEvent) => {
        const { waveformDataTotalDuration, totalLength, shouldFormShow } = this.props;
		const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const indicatorPositionInPercents = Convertor.convertPixelsToPercents(x, totalLength);
        const indicatorPositionInSeconds = Convertor.convertPercentsToSeconds(indicatorPositionInPercents, waveformDataTotalDuration);
        const time = moment.utc(indicatorPositionInSeconds * 1000);

        if (!shouldFormShow) {
            this.setIndicatorPositionAndTime(x, time);
        }
    }

    showIndicator = () => {
        this.props.dispatch(updateSettingsUI({shouldIndicatorShow: true}));
    }

    hideIndicator = () => {
        if (!this.props.shouldFormShow) {
            this.props.dispatch(updateSettingsUI({shouldIndicatorShow: false}));
        }
    }

    render() {
        return (           
            <div className="waveform-indicator-holder"
                onMouseMove={this.handleIndicator}
                onMouseEnter={this.showIndicator}
                onMouseLeave={this.hideIndicator}>

                {this.props.shouldIndicatorShow && this.state.time &&
                    <Marker time={this.state.time as Moment} indicatorPosition={this.state.indicatorPosition} />
                }
                {this.props.shouldFormShow &&
                    <CommentForm indicatorPosition={this.state.indicatorPosition} time={this.state.time as Moment} />
                }
            </div>
        )
    }
}

const mapStateToProps = (state: AppState) => {
    return {
        shouldIndicatorShow: state.ui.shouldIndicatorShow,
        shouldFormShow: state.ui.shouldFormShow,
        waveformDataTotalDuration: state.waveform.waveformDataTotalDuration
    }
}

export default connect(mapStateToProps)(Indicator);