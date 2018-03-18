import React from 'react';
import { connect } from 'react-redux';
import { removeMessage, updateSettingsUI } from '../../Store/actions/index';
import { ListGroup, ListGroupItem, Glyphicon } from 'react-bootstrap';
import './messages.css';

class Messages extends React.Component {
    deleteMessage = (id) => (e) => {
        this.props.dispatch(removeMessage(id));
    }

    toggleSort = () => {
        this.props.dispatch(updateSettingsUI({isMessageOrderToggled: !this.props.isMessageOrderToggled}));
    }

    sortByTime = (a, b) => { 
        return a.time > b.time;
    };

    sortByTimeDescending = (a, b) => { 
        return a.time < b.time;
    };

    render() {
        const { messages, isMessageOrderToggled } = this.props;

        return (
           <ListGroup className="messages">
                {messages.length > 0 &&
                    <h4>
                        Party messages 
                        {messages.length > 1 &&
                            <Glyphicon className="sort-by-date" glyph="sort" onClick={this.toggleSort} />
                        }
                    </h4>
                }
                {messages.sort((isMessageOrderToggled ? this.sortByTimeDescending : this.sortByTime)).map((message, index) => (
                    <ListGroupItem key={message.id} className="message">
                        <span>
                            <Glyphicon glyph="time" /> [{message.time.format("HH:mm:ss") }] {message.text}
                        </span>
                        <Glyphicon className="delete-message" glyph="remove-circle" onClick={this.deleteMessage(index)} />
                    </ListGroupItem>
                ))}
            </ListGroup>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        messages: state.messages,
        isMessageOrderToggled: state.ui.isMessageOrderToggled
    }
}

export default connect(mapStateToProps)(Messages);