export namespace Audio {
    let sampleRate: number;
    let channels: number;
    let bitDepth: number;
    let frameSize: number;
    let frameLength: number;
}
export namespace Network {
    let framesPerPacket: number;
    let quality: number;
}
export namespace DefaultOptions {
    let url: string;
    let port: string;
    let rejectUnauthorized: boolean;
    let name: string;
    let password: string;
    let tokens: any[];
}
/**
 * Options for a client
 */
export type ClientOptions = {
    /**
     * The URL of the Mumble server
     */
    url?: string;
    /**
     * The port the Mumble server is listening on
     */
    port?: string;
    /**
     * Whether we should reject invalid certificates
     */
    rejectUnauthorized?: boolean;
    /**
     * The name of the user that will connect
     */
    name?: string;
    /**
     * A password when the server has one
     */
    password?: string;
};
