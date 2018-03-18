import React from 'react';
import * as Convertor from '../../Helpers/Convertor';
import { connect } from 'react-redux';
import { addMessage, updateSettingsUI } from '../../Store/actions/index';
import moment from 'moment';
import { FormControl, FormGroup, Glyphicon } from 'react-bootstrap';
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

    showForm = () => {
        this.props.dispatch(updateSettingsUI({shouldFormShow: true}));
    }

    hideForm = () => {
        this.props.dispatch(updateSettingsUI({shouldFormShow: false}));
    }

    updateInput = (e) => {
        this.setState({
            message: e.target.value
        });
    }

    addMessage = (e) => {
        e.preventDefault();
        this.props.dispatch(addMessage(this.state.message, this.state.time));
        this.props.dispatch(updateSettingsUI({shouldFormShow: false}));
    }
    
    render() {
        return (           
            <div className="waveform-indicator-holder"
                onMouseMove={this.handleIndicator}
                onMouseEnter={this.showIndicator}
                onMouseLeave={this.hideIndicator}>

                {this.props.shouldIndicatorShow && this.state.time &&
                    <div className="hover-indicator"
                        style={{left: this.state.indicatorPosition, display: "block"}}
                        onClick={this.showForm}
                        data-time={this.state.time.format("HH:mm:ss")}>
                    </div>
                }

                {this.props.shouldFormShow &&
                    <form className="comment-form"
                        style={{left: this.state.indicatorPosition - 100, display: "block"}}
                        onSubmit={this.addMessage}>
                        <FormGroup bsSize="small">
                            <FormControl className="comment-input" type="text" onChange={this.updateInput} placeholder="Enter a comment" />
                        </FormGroup>
                        <Glyphicon className="comment-cancel" glyph="remove-circle" onClick={this.hideForm} />
                    </form>
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