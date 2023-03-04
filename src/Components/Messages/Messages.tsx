import React from 'react';
import { connect } from 'react-redux';
import { removeMessage, updateSettingsUI } from '../../Store/actions/main';
import { ListGroup, ListGroupItem, Glyphicon } from 'react-bootstrap';
import { Message, Messages as MessagesType } from '../../Types/Types';
import { Dispatch } from 'redux';
import { AppState } from '../../Store/reducers/main';

type Props = {
    messages: MessagesType,
    dispatch: Dispatch,
    isMessageOrderToggled: boolean
};

class Messages extends React.Component<Props> {
    deleteMessage = (id: number) => () => {
        this.props.dispatch(removeMessage(id));
    }

    toggleSort = () => {
        this.props.dispatch(updateSettingsUI({isMessageOrderToggled: !this.props.isMessageOrderToggled}));
    }

    sortByTime = (a: Message, b: Message): number => { 
        return a.time > b.time ? 1 : -1;
    };

    sortByTimeDescending = (a: Message, b: Message): number => { 
        return a.time < b.time ? 1 : -1;
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
                {messages.sort((isMessageOrderToggled ? this.sortByTimeDescending : this.sortByTime)).map((message: Message, index) => (
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

const mapStateToProps = (state: AppState) => {
    return {
        messages: state.messages,
        isMessageOrderToggled: state.ui.isMessageOrderToggled
    }
}

export default connect(mapStateToProps)(Messages);