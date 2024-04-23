export = Dispatcher;
declare class Dispatcher extends EventEmitter<[never]> {
    constructor(client: any);
    client: any;
    connection: any;
    playFile(filename: any, voiceTarget: any): void;
    playStream(stream: any, voiceTarget: any): void;
    play(unknown: any, voiceTarget: any): void;
    dispatchStream: DispatchStream;
    command: any;
    setVolume(volume: any): void;
    getVolume(): number;
    stopStream(): void;
    stop(): void;
}
import EventEmitter_1 = require("events");
import EventEmitter = EventEmitter_1.EventEmitter;
import DispatchStream = require("./DispatchStream");
