import React from 'react';

class Waveform extends React.Component {    

    render() {
        const { start, end, background } = this.props;
        
        return (
            <span 
                className="talk-time"                
                style={{
                    left: start + "%", 
                    width: end - start + "%",
                    background: background
                }} 
            />
        )
    }
}

export default Waveform;