export = AbstractHandler;
declare class AbstractHandler {
    constructor(client: any);
    client: any;
    handle(data: any): any;
}
