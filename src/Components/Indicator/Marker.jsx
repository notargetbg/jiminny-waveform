import React from 'react';
import { updateSettingsUI } from '../../Store/actions/index';
import { connect } from 'react-redux';

class Marker extends React.Component {
    showForm = () => {
        this.props.dispatch(updateSettingsUI({shouldFormShow: true}));
    }   

    render() {
        const {time, indicatorPosition} = this.props;

        return (
            <div className="hover-indicator"
                style={{left: indicatorPosition, display: "block"}}
                onClick={this.showForm}
                data-time={time.format("HH:mm:ss")}>
            </div>
        )
    }
}

export default connect()(Marker);