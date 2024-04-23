export = UserState;
declare class UserState extends AbstractHandler {
    handle(data: any): void;
}
import AbstractHandler = require("./AbstractHandler");
