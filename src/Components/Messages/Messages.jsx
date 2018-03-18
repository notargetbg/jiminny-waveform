import React from 'react';
import { connect } from 'react-redux';
import { removeMessage, editMessage } from '../../Store/actions/index';
import { ListGroup, ListGroupItem, Glyphicon, FormControl } from 'react-bootstrap';
import './messages.css';

class Messages extends React.Component {
    constructor() {
        super();
        this.state = {
          shouldShowField: false
        };
    }

    editMessage = (id, text) => () => {
        this.props.dispatch(editMessage(id, text));
        this.state.shouldShowField;

        this.setState({
            shouldShowField: true
        });
        console.log('editing');
    }

    deleteMessage = (id) => (e) => {
        this.props.dispatch(removeMessage(id));
        this.setState({
            shouldShowField: false
        });
    }

    render() {
        const { messages } = this.props;
        console.log(messages);

        return (
           <ListGroup className="messages">
                {messages.length > 0 &&
                    <h4>User messages</h4>
                }
                {messages.map((message, index) => (
                    <ListGroupItem key={message.id} className="message">
                        <div 
                           // onClick={this.editMessage(message.id, 'test edit')}
                        >
                            {!this.state.shouldShowField &&
                                <span>
                                    <Glyphicon glyph="time" /> {message.time} {message.text}
                                </span>
                            }
                            {this.state.shouldShowField &&
                                <FormControl className="comment-input" type="text" onChange={this.updateInput} placeholder="Enter a comment" />
                            }
                        </div>
                        <Glyphicon className="delete-message" glyph="remove-circle" onClick={this.deleteMessage(index)} />
                    </ListGroupItem>
                ))}
            </ListGroup>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        messages: state.messages
    }
}

export default connect(mapStateToProps)(Messages);