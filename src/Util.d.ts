export = Util;
declare class Util {
    static toVarint(i: any): Buffer | {
        value: Buffer;
        length: number;
    };
    static fromVarInt(buf: any): {
        value: number;
        consumed: number;
    };
    static encodeVersion(major: any, minor: any, patch: any): number;
    static cloneObject(obj: any): any;
    static adjustNetworkBandwidth(bitspersec: any): number;
    static getNetworkBandwidth(bitrate: any, frames: any): any;
    /**
    * Sets default properties on an object that aren't already specified.
    * @param {Object} def Default properties
    * @param {Object} given Object to assign defaults to
    * @returns {Object}
    * @private
    */
    private static mergeDefault;
}
