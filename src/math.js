/**
 * Determines the greatest common denominator between two values
 *
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
export function gcd (a, b) {
  if (b == 0) {
    return a
  }

  return gcd(b, a % b)
}

/**
 * Modifies a value so that it is always between the provided min and max
 *
 * @param {number} value
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
export function clamp (value, min = 0, max = 1) {
  return Math.min(max, Math.max(min, value))
}

/**
 * Interpolation function returning the value between x and y at a specific ratio
 *
 * @param {number} value
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
export function lerp (ratio, x, y) {
  return (x * (1 - ratio)) + (y * ratio)
}

/**
 * Interpolation function returning the ratio of a value clamped between x and y
 *
 * @param {number} value
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */

export function invlerp (value, x, y) {
  return clamp((value - x) / (y - x))
}

/**
 * Determines the element found in an array at a given ratio
 *
 * @param {float} ratio
 * @param {Array} all
 */
export function steps (ratio, all) {
  ratio %= 1

  if (ratio < 0) ratio += 1

  return all[Math.floor(ratio * all.length)]
}
