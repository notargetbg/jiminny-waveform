import React from 'react';
import { connect } from 'react-redux';
import { updateSettingsUI } from '../../Store/actions/main';

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