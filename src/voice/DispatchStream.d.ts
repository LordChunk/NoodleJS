export = DispatchStream;
declare class DispatchStream extends WritableStream {
    constructor(connection: any, voiceTarget: any);
    connection: any;
    processObserver: EventEmitter<[never]>;
    frameQueue: any[];
    lastFrame: Buffer;
    whisperId: any;
    _volume: number;
    lastFrameWritten: number;
    lastWrite: number;
    open(): void;
    processInterval: NodeJS.Timeout;
    close(): void;
    set volume(volume: number);
    get volume(): number;
    applyFrameVolume(frame: any, gain: any): any;
    _createFrameBuffer(): Buffer;
    _processAudioBuffer(): void;
    voiceSequence: any;
    _write(chunk: any, encoding: any, next: any): any;
}
import WritableStream_1 = require("stream");
import WritableStream = WritableStream_1.Writable;
import EventEmitter_1 = require("events");
import EventEmitter = EventEmitter_1.EventEmitter;
