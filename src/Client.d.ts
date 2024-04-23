export = Client;
/**
 * The main class for interacting with the Mumble server
 * @extends EventEmitter
 */
declare class Client extends EventEmitter<[never]> {
    /**
     * @param  {ClientOptions} [options] Options for the client
     */
    constructor(options?: ClientOptions);
    /**
     * The options the client is instantiated with
     * @type {ClientOptions}
     */
    options: ClientOptions;
    /**
     * The connection to the Mumble server
     * @type {Connection}
     * @private
     */
    private connection;
    /**
     * All of the {@link Channel} objects that are synced with the server,
     * mapped by their IDs
     * @type {Collection<id, Channel>}
     */
    channels: any;
    /**
     * All of the {@link User} objects that are synced with the server,
     * mapped by their sessions
     * @type {Collection<session, User>}
     */
    users: any;
    /**
     * The {@link Dispatcher} for the voiceConnection
     * @type {Dispatcher}
     */
    voiceConnection: Dispatcher;
    /**
     * The ping routine for the client to keep the connection alive
     * @private
     */
    private _pingRoutine;
    ping: NodeJS.Timeout;
    connect(): void;
    /**
     * Sends a message to the {@link Channel} where the client is currently
     * connected
     * @param  {String} message   The message to be sent
     * @param  {Boolean} recursive If the message should be sent down the tree
     * @return {Promise<TextMessage>}
     */
    sendMessage(message: string, recursive: boolean): Promise<TextMessage>;
    /**
     * Switches to another channel
     * @param  {Number} id         The id of the channel to switch to
     * @return {Promise<any>}
     */
    switchChannel(id: number): Promise<any>;
    /**
     * Starts listening to another channel without joining it
     * @param  {Number} id         The id of the channel to start listening to
     * @return {Promise<any>}
     */
    startListeningToChannel(id: number): Promise<any>;
    /**
     * Stops listening to another channel
     * @param  {Number} id         The id of the channel to stop listening to
     * @return {Promise<any>}
     */
    stopListeningToChannel(id: number): Promise<any>;
    /**
     * Set up a voiceTarget to be optionally used when sending voice data
     * @param  {Number} targetId       The id for this voiceTarget. Must be between 4 and 30
     * @param  {Array.<Number>} userIds  Array of user sessions to send to. Can be empty.
     * @param  {Number} channelId      ChannelId to send to. Ignored when userIds is not empty.
     * @return {Promise<any>}
     */
    setupVoiceTarget(targetId: number, userIds: Array<number>, channelId: number): Promise<any>;
    mute(): void;
    unmute(): void;
    destroy(): any;
}
import EventEmitter_1 = require("events");
import EventEmitter = EventEmitter_1.EventEmitter;
import Dispatcher = require("./voice/Dispatcher");
import TextMessage = require("./handlers/TextMessage");
