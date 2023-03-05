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
    isMessageOrderToggled?: boolean;
}

export type WaveformType = {
    waveformDataTotalDuration: number
    talkTimes: TalkTimes
}

export type TalkTimes = {
    user: WaveformDataList,
    customer: WaveformDataList
};

export type WaveformDataList = Array<Array<number>>;

export type Time = Moment;