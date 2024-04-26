/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
var argumentsLength = function(...args) {
  const result = args.length;
  return result;
};

/**
 * argumentsLength(1, 2, 3); // 3
 */