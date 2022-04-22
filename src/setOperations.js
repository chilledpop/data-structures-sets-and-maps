/**
 * return the union of two sets
 */
function union(s1, s2) {
  return new Set([...s1, ...s2]);
}

/**
 * return the intersection of two sets
 */
function intersect(s1, s2) {
  let intersect = new Set();
  for (let value of s1) {
    if (s2.has(value)) {
      intersect.add(value);
    }
  }

  return intersect;
}

/**
 * return the difference of two sets
 */
function difference(s1, s2) {
  let difference = new Set();
  for (let value of s1) {
    if (!s2.has(value)) {
      difference.add(value);
    }
  }

  return difference;
}

module.exports = { union, intersect, difference };
