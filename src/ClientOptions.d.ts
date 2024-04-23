export = ClientOptions;

declare type ClientOptions = {
  /**
   * The address of the Mumble server
   * @type {String}
   */
  address: string;
  /**
   * The username of the client
   * @type {String}
   */
  name: string;
  /**
   * The password of the client
   * @type {String}
   */
  password: string;
  /**
   * The tokens to use to connect to the server
   * @type {Array<String>}
   */
  tokens: Array<string>;
};