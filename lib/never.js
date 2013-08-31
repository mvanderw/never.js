
/**
 * Never (sync & async)
 * @param {Anything} Anything at all, it'll never execute!
 */

module.exports = { never: function(fn) { return; }, neverSync: function(fn) { return; } };
