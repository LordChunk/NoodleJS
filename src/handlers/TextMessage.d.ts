export = TextMessageHandler;
declare class TextMessageHandler extends AbstractHandler {
    handle(data: any): void;
}
import AbstractHandler = require("./AbstractHandler");
