/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    if (this.root === null) return 0;

    let paths = [];
    let path = 1;
    const queue = [this.root];

    while (queue.length !== 0) {
      const curr = queue.shift();
      if (curr.left === null || curr.right === null) {
        paths.push(path);
      }
      path++;
      if (curr.left) queue.push(curr.left);
      if (curr.right) queue.push(curr.right);
    }

    return Math.min(...paths);
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    if (this.root === null) return 0;

    let depth = 1;
    const queue = [this.root];

    while (queue.length !== 0) {
      const curr = queue.shift();
      if (curr.left || curr.right) {
        depth += 1;
        if (curr.left) queue.push(curr.left);
        if (curr.right) queue.push(curr.right);
      }
    }

    return depth;
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    let result = 0;

    function maxSumHelper(node) {
      if (node === null) return 0;
      const leftSum = maxSumHelper(node.left);
      const rightSum = maxSumHelper(node.right);
      result = Math.max(result, node.val + leftSum + rightSum);
      return Math.max(0, leftSum + node.val, rightSum + node.val);
    }

    maxSumHelper(this.root);
    return result;
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    if (this.root === null) return this.root;

    const queue = [this.root];
    const valsLargerThanLowerBound = [];

    while (queue.length !== 0) {
      const curr = queue.shift();
      if (curr.val > lowerBound) valsLargerThanLowerBound.push(curr.val);

      if (curr.left) queue.push(curr.left);
      if (curr.right) queue.push(curr.right);
    }

    if (valsLargerThanLowerBound.length === 0) return null;
    return Math.min(...valsLargerThanLowerBound);
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {}

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {}

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {}

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {}
}

module.exports = { BinaryTree, BinaryTreeNode };
