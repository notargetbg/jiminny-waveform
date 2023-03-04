import React from 'react';

type Props = {
    start: number,
    end: number,
    background: string
}

const WaveformActivePart = (props: Props) => {
    const { start, end, background } = props
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