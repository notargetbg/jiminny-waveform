const convertSecondsToPercents = (seconds, totalLength) => {
    // seconds / length * 100
    return ( seconds / totalLength ) * 100;
}

const convertPixelsToPercents = (pixels, totalLength) => {
    // ( pixels / length ) * length
    return (pixels / totalLength ) * 100;
}

const convertPercentsToSeconds = (percents, totalLength) => {
    // percents * totalLength / 100
    return ( percents * totalLength ) / 100;
}

export { convertSecondsToPercents, convertPixelsToPercents, convertPercentsToSeconds };