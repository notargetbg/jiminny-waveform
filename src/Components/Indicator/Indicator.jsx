import React from 'react';
import * as Convertor from '../../Helpers/Convertor';
import { connect } from 'react-redux';
import { updateSettingsUI } from '../../Store/actions/index';
import moment from 'moment';
import CommentForm from '../Indicator/CommentForm';
import Marker from './Marker';
import './indicator.css';

class Indicator extends React.Component {
    constructor() {
        super();
        this.state = {
          indicatorPosition: null,
          time: null,
          messsage: null
        };
    }

    setIndicatorPositionAndTime = (position, time) => {
        this.setState({
            indicatorPosition: position,
            time
        });
    }

    handleIndicator = (e) => {
        const { waveformDataTotalDuration, totalLength, shouldFormShow } = this.props;
		const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const indicatorPositionInPercents = Convertor.convertPixelsToPercents(x, totalLength);
        const indicatorPositionInSeconds = Convertor.convertPercentsToSeconds(indicatorPositionInPercents, waveformDataTotalDuration);
        const time = moment.utc(indicatorPositionInSeconds * 1000);

        if(!shouldFormShow) {
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
                    <Marker time={this.state.time} indicatorPosition={this.state.indicatorPosition} />
                }
                {this.props.shouldFormShow &&
                    <CommentForm positionLeft={this.state.indicatorPosition} time={this.state.time} />
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        shouldIndicatorShow: state.ui.shouldIndicatorShow,
        shouldFormShow: state.ui.shouldFormShow,
        waveformDataTotalDuration: state.waveform.waveformDataTotalDuration
    }
}

export default connect(mapStateToProps)(Indicator);