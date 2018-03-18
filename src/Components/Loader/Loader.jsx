import React from 'react';
import './loader.css';

class Loader extends React.Component {
    render() {
        return (
            <div style={{color: this.props.color}} className="loader" />
        )
    }
}

export default Loader;