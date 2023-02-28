export type IndicatorPosition = null | number;

export type Message = {
    id: number
    text: string
    time: string
}

export type Messages = Array<Message>;

export type UI = {
    shouldFormShow: boolean;
    shouldIndicatorShow: boolean;
}

export type Waveform = {
    waveformDataTotalDuration: number
}
