/**
 * @class NonResizableArray
 */
export default class NonResizableArray {
  /**
   * @constructs NonResizableArray
   */
  constructor() {
    this._array = [];
    this.length = 0;
  }

  /**
   * @method peek
   * @public
   * @param {uint} index
   * @returns {any}
   */
  peek(index) {
    return this._array[index];
  }

  /**
   * @method push
   * @public
   * @param {any} value
   */
  push(value) {
    this._array[this.length++] = value;
  }

  /**
   * @method pop
   * @public
   * @returns {any}
   */
  pop() {
    return this._array[--this.length];
  }

  /**
   * @method clear
   * @public
   */
  clear() {
    const diff = this._array.length - this.length;
    this._array.length -= diff;
  }

  /**
   * @method dispose
   * @public
   */
  dispose() {
    this._array = null;
  }
}
