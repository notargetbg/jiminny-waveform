import React from 'react';
import { updateSettingsUI, addMessage } from '../../Store/actions/main';
import { connect } from 'react-redux';
import { FormControl, FormGroup, Glyphicon } from 'react-bootstrap';
import { Dispatch } from 'redux';
import { IndicatorPosition } from '../../Types/Types';
import { Moment } from 'moment';

interface Props {
    dispatch: Dispatch;
    time: null | Moment;
    indicatorPosition: IndicatorPosition;
}

interface State {
    message: string;
}

class CommentForm extends React.Component<Props, State> {
    updateInput = (e: React.BaseSyntheticEvent) => {
        this.setState({
            message: e.target.value
        });
    }

    addMessage = (e: React.BaseSyntheticEvent) => {
        const { dispatch, time } = this.props;
        const { message } = this.state;

        e.preventDefault();
        dispatch(addMessage(message, time));
        dispatch(updateSettingsUI({shouldFormShow: false}));
    }    

    hideForm = () => {
        this.props.dispatch(updateSettingsUI({shouldFormShow: false}));
    }
    
    render() {
        const { indicatorPosition } = this.props;
        const leftStyle = indicatorPosition ? indicatorPosition - 100 : 0;

        return (
            <form className="comment-form"
                style={{left: leftStyle, display: "block"}}
                onSubmit={this.addMessage}>
                <FormGroup bsSize="small">
                    <FormControl className="comment-input" type="text" onChange={this.updateInput} placeholder="Enter a comment" />
                </FormGroup>
                <Glyphicon className="comment-cancel" glyph="remove-circle" onClick={this.hideForm} />
            </form>
        )
    }
}

export default connect()(CommentForm);