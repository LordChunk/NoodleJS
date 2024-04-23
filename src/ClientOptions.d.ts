export = ClientOptions;

// Generated based on: src/Constants.js

declare type ClientOptions = {
  /**
   * The URL of the Mumble server
   * @type {String}
   */
  url?: string;
  /**
   * The port the Mumble server is listening on
   * @type {String}
   */
  port?: string;
  /**
   * Whether we should reject invalid certificates
   * @type {Boolean}
   */
  rejectUnauthorized?: boolean;
  /**
   * The name of the user that will connect
   * @type {String}
   */
  name?: string;
  /**
   * A password when the server has one
   * @type {String}
   */
  password?: string;

  tokens?: Array<string>;
};