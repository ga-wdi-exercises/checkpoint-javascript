// Given a binary tree where each node can only have a digit (0-9) value, each root-to-leaf path will represent a number. 
// Find the total sum of all the numbers represented by all paths.

class TreeNode {

    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
};

/*
create base case or edge case? If root if is equal to null then return null

*/

const find_sum_of_path_numbers = function (root) {

};

var root = new TreeNode(1)
root.left = new TreeNode(0)
root.right = new TreeNode(1)
root.left.left = new TreeNode(1)
root.right.left = new TreeNode(6)
root.right.right = new TreeNode(5)
console.log(`Total Sum of Path Numbers: ${find_sum_of_path_numbers(root)}`)
