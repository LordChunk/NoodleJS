export = TextMessage;
declare class TextMessage {
    constructor(client: any, data: any);
    users: Collection;
    channels: Collection;
    trees: Collection;
    setup(data: any): void;
    sender: any;
    content: any;
    reply(message: any): any;
    toPacket(): {
        message: any;
        session: any[];
        channelId: any[];
        treeId: any[];
    };
}
import Collection = require("./Collection");
