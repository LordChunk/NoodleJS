export = Channel;
/**
 * Represents a channel on Mumble
 */
declare class Channel {
    /**
     * @param  {Client} client The client that instantiated the channel
     * @param  {ChannelData} data Information about the channel
     */
    constructor(client: Client, data: ChannelData);
    children: Collection;
    links: Collection;
    setup(data: any): void;
    id: any;
    parent: any;
    name: any;
    description: any;
    temporary: any;
    position: any;
    sendMessage(message: any, recursive: any): any;
}
import Client from "../Client";
import Collection = require("./Collection");
import ChannelData = require("./ChannelData");