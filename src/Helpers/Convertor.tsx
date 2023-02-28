const convertSecondsToPercents = (seconds: number, totalLength: number): number => {
    // ( seconds / length ) * 100
    return ( seconds / totalLength ) * 100;
}

const convertPixelsToPercents = (pixels: number, totalLength: number): number => {
    // ( pixels / length ) * length
    return ( pixels / totalLength ) * 100;
}

const convertPercentsToSeconds = (percents: number, totalLength: number): number => {
    // ( percents * totalLength ) / 100
    return ( percents * totalLength ) / 100;
}

export { convertSecondsToPercents, convertPixelsToPercents, convertPercentsToSeconds };