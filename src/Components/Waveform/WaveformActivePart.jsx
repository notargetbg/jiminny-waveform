import React from 'react';

const WaveformActivePart = ({ start, end, background }) => (
        <span 
        className="talk-time"                
        style={{
            left: start + "%", 
            width: end - start + "%",
            background: background
        }} 
    />
);

export default WaveformActivePart;