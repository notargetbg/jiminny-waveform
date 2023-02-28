import React from 'react';
import { connect } from 'react-redux';
import { updateSettingsUI } from '../../Store/actions/main';
import { Moment } from 'moment';
import { Action, Dispatch } from 'redux';
import { IndicatorPosition } from '../../Types/Types';

type Props = {
    time: Moment,
    indicatorPosition: IndicatorPosition,
    dispatch: Dispatch<Action>
};

class Marker extends React.Component<Props> {
    showForm = () => {
        this.props.dispatch(updateSettingsUI({shouldFormShow: true}));
    }   

    render() {
        const {time, indicatorPosition} = this.props;

        return (
            <div className="hover-indicator"
                style={{left: `${indicatorPosition}px`, display: "block"}}
                onClick={this.showForm}
                data-time={time.format("HH:mm:ss")}>
            </div>
        )
    }
}

export default connect()(Marker);