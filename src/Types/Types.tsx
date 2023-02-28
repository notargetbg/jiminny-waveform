import { Moment } from "moment";

export type IndicatorPosition = null | number;

export type Message = {
    id: number
    text: string
    time: Time
}

export type Messages = Array<Message>;

export type UI = {
    shouldFormShow?: boolean;
    shouldIndicatorShow?: boolean;
}

export type Waveform = {
    waveformDataTotalDuration: number
}

export type Time = Moment | string;