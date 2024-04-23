export = Collection;
/**
 * A Map with additional utility methods. This is used throughout discord.js rather than Arrays for anything that has
 * an ID, for significantly improved performance and ease-of-use.
 * @extends {Map}
 */
declare class Collection extends Map<any, any> {
    constructor(iterable: any);
    set(key: any, val: any): this;
    _array: any[];
    _keyArray: any;
    delete(key: any): boolean;
    /**
     * Creates an ordered array of the values of this collection, and caches it internally. The array will only be
     * reconstructed if an item is added to or removed from the collection, or if you change the length of the array
     * itself. If you don't want this caching behaviour, use `Array.from(collection.values())` instead.
     * @returns {Array}
     */
    array(): any[];
    /**
     * Searches for a single item where its specified property's value is identical to the given value
     * (`item[prop] === value`), or the given function returns a truthy value. In the latter case, this is identical to
     * [Array.find()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find).
     * <warn>All collections used in Discord.js are mapped using their `id` property, and if you want to find by id you
     * should use the `get` method. See
     * [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/get) for details.</warn>
     * @param {string|Function} propOrFn The property to test against, or the function to test with
     * @param {*} [value] The expected value - only applicable and required if using a property for the first argument
     * @returns {*}
     * @example
     * collection.find('username', 'Bob');
     * @example
     * collection.find(val => val.username === 'Bob');
     */
    find(propOrFn: string | Function, value?: any): any;
}
