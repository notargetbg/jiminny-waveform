import React from 'react';
import * as Convertor from '../../Helpers/Convertor';
import { connect } from 'react-redux';
import { addMessage } from '../../Store/actions/index';
import moment from 'moment';
import { FormControl, FormGroup, Glyphicon } from 'react-bootstrap';
import './indicator.css';


class Indicator extends React.Component {
    constructor() {
        super();
        this.state = {
          indicatorPosition: null,
          time: null,
          shouldIndicatorShow: false,
          shouldFormShow: false,
          message: null
        };
    }

    setIndicatorPositionAndTime = (position, time) => {
        this.setState({
            indicatorPosition: position,
            time
        });
    }

    handleIndicator = (e) => {
		const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;

        const indicatorPositionInPercents = Convertor.convertPixelsToPercents(x, this.props.totalLength);
        const indicatorPositionInSeconds = Convertor.convertPercentsToSeconds(indicatorPositionInPercents, 1863.166625);
        const time = moment.utc(indicatorPositionInSeconds * 1000).format("HH:mm:ss");

        if(!this.state.shouldFormShow) {
            this.setIndicatorPositionAndTime(x, time);
        }
    }

    showIndicator = () => {
        this.setState({
            shouldIndicatorShow: true
        });
    }

    hideIndicator = () => {
        if (!this.state.shouldFormShow) {
            this.setState({
                shouldIndicatorShow: false
            });
        }
    }

    showForm = () => {
        this.setState({
            shouldFormShow: true
        });
    }

    hideForm = () => {
        this.setState({
            shouldFormShow: false
        });
    }

    updateInput = (e) => {
        this.setState({
            message: e.target.value
        });
    }

    addMessage = (e) => {
        e.preventDefault();
        this.props.dispatch(addMessage(this.state.message, this.state.time));

        this.setState({
            shouldFormShow: false
        });
    }
    
    render() {
        const { IndicatorData, background } = this.props;
        
        return (            
            <div className="waveform-indicator-holder"
                onMouseMove={this.handleIndicator}
                onMouseEnter={this.showIndicator}
                onMouseLeave={this.hideIndicator}>

                {this.state.shouldIndicatorShow &&
                    <div data-time={this.state.time}
                        onClick={this.showForm}
                        style={{left: this.state.indicatorPosition, display: "block"}}
                        className="hover-indicator">
                    </div>
                }

                {this.state.shouldFormShow &&
                    <form className="comment-form" onSubmit={this.addMessage} style={{left: this.state.indicatorPosition - 100, display: "block"}}>
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
        messages: state.messages
    }
}

export default connect(mapStateToProps)(Indicator);