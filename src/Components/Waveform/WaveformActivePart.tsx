import React from 'react';

const WaveformActivePart = ({ start, end, background }) => {  
    return (
        <span 
            className="talk-time"                
            style={{
                left: start + "%", 
                width: end - start + "%",
                background: background
            }}
        />
    );
}

export default WaveformActivePart;