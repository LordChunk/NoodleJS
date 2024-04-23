export = Protobuf;
declare class Protobuf {
    mumble: protobufjs.Root;
    encodePacket(type: any, payload: any): any;
    decodePacket(type_id: any, buffer: any): any;
    nameById(id: any): any;
    idByName(name: any): string;
}
import protobufjs = require("protobufjs");
