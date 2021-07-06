// Given a binary tree, populate an array to represent its level-by-level traversal. 
// You should populate the values of all nodes of each level from left to right in separate sub-arrays.

class TreeNode {

    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
};

/*
FIFO - First in first out
 
declare a queue 
declare result which is array of arrays for each level
shift the root into the queue
 
while loop where condition is if queue is not empty
  get level count
  create level element array
  inner loop: iterate level count times
    PEEK queue and remove first element
    APPEND the element to level array
 
*/

const traverse = function (root) {
    let result = [], queue = [root]

    while (queue.length > 0) {
        let currentLevelArray = []
        let numberOfNodes = queue.length

        for (let i = 0; i < numberOfNodes; i++) {
            let currentNode = queue.shift()
            currentLevelArray.push(currentNode.value)

            if (currentNode.left !== null) {
                queue.push(currentNode.left)
            }
            if (currentNode.right !== null) {
                queue.push(currentNode.right)
            }
        }
        result.push(currentLevelArray)
    }
    return result
}


var root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);


console.log(`Level order traversal: ${traverse(root)}`);