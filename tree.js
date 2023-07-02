/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    if (this.root === null) return 0;

    let sum = 0;
    const queue = [this.root];

    while (queue.length !== 0) {
      const curr = queue.shift();
      sum += curr.val;

      for (const child of curr.children) {
        if (child !== null) {
          queue.push(child);
        }
      }
    }

    return sum;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    if (this.root === null) return 0;

    let count = 0;
    const queue = [this.root];

    while (queue.length !== 0) {
      const curr = queue.shift();
      if (curr.val % 2 === 0) {
        count++;
      }

      for (const child of curr.children) {
        if (child !== null) {
          queue.push(child);
        }
      }
    }

    return count;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    if (this.root === null) return 0;

    let count = 0;
    const queue = [this.root];

    while (queue.length !== 0) {
      const curr = queue.shift();
      if (curr.val > lowerBound) {
        count++;
      }

      for (const child of curr.children) {
        if (child !== null) {
          queue.push(child);
        }
      }
    }

    return count;
  }
}

module.exports = { Tree, TreeNode };
