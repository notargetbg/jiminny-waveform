import React from 'react';

class Loader extends React.Component {
    render() {
        return (
            <div style={{color: this.props.color}} className="loader" />
        )
    }
}

export default Loader;