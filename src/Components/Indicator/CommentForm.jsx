import React from 'react';
import { updateSettingsUI, addMessage } from '../../Store/actions';
import { connect } from 'react-redux';
import { FormControl, FormGroup, Glyphicon } from 'react-bootstrap';

class CommentForm extends React.Component {
    updateInput = (e) => {
        this.setState({
            message: e.target.value
        });
    }

    addMessage = (e) => {
        e.preventDefault();
        this.props.dispatch(addMessage(this.state.message, this.props.time));
        this.props.dispatch(updateSettingsUI({shouldFormShow: false}));
    }    

    hideForm = () => {
        this.props.dispatch(updateSettingsUI({shouldFormShow: false}));
    }
    
    render() {
        return (
            <form className="comment-form"
                style={{left: this.props.positionLeft - 100, display: "block"}}
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