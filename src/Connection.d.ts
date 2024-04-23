/// <reference types="node" />
export = Connection;
declare class Connection extends EventEmitter<[never]> {
    static codec(): {
        Celt: number;
        Ping: number;
        Speex: number;
        CeltBeta: number;
        Opus: number;
    };
    constructor(options: any);
    options: any;
    opusEncoder: OpusEncoder;
    currentEncoder: OpusEncoder;
    codec: number;
    voiceSequence: number;
    codecWarningShown: {};
    connect(): void;
    protobuf: any;
    socket: tls.TLSSocket;
    close(): void;
    _onReceiveData(data: any): void;
    _processData(type: any, data: any): void;
    _processMessage(type: any, msg: any): void;
    _writePacket(buffer: any): void;
    _writeHeader(type: any, data: any): void;
    writeProto(type: any, data: any): any;
    readAudio(data: any): void;
    writeAudio(packet: any, whisperTarget: any, codec: any, voiceSequence: any, final: any): number;
}
import EventEmitter_1 = require("events");
import EventEmitter = EventEmitter_1.EventEmitter;
import OpusEncoder_1 = require("@discordjs/opus");
import OpusEncoder = OpusEncoder_1.OpusEncoder;
import tls = require("tls");
