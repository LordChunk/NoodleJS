export = User;
declare class User {
    constructor(client: any, data: any);
    setup(data: any): void;
    id: any;
    channel: any;
    actor: any;
    sendMessage(message: any): any;
}
