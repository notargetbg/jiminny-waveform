import React from 'react';
import { connect } from 'react-redux';
import { addMessage, removeMessage } from '../../Store/actions/index';
import { ListGroup, ListGroupItem, Glyphicon } from 'react-bootstrap';
import './messages.css';

class Messages extends React.Component {    
    componentDidMount() {
        // get messages

        //this.props.dispatch(addMessage('test'))
        //this.props.dispatch(removeMessage(1))
        
    }

    clicked = () => {
        console.log('You clicked ListGroupItem');
    }      

    render() {
        const { messages } = this.props;
        console.log(messages);

        return (
           <ListGroup className="messages">
                <h4>User messages</h4>
                {messages.map((message) => (
                    <ListGroupItem className="message" onClick={this.clicked}>
                        <Glyphicon glyph="time" /> [00:23] {message.text}
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