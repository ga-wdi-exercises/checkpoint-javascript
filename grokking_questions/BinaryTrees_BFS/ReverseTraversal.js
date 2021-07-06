/*
Given a binary tree, populate an array to represent its level-by-level traversal in reverse order, i.e., the lowest level comes first. You should populate the values of all nodes in each level from left to right in separate sub-arrays.

class Tree {
    constructor(value) {
      this.value = value
      this.left = null
      this.right = null
    }
  }
  
  /*
  edge case: if root is empty return null
  traverse down 
  */

function reverse(root) {
    let result = [], queue = [root]
    if (root === null) return result
    //have something in queue to run
    while (queue.length > 0) {
        // need sub arry to hold each 
        let currLevel = []
        let levelSize = queue.length
        //loop each level
        for (let i = 0; i < levelSize; i++) {
            //get curr
            let currNode = queue.shift()
            // remember to reference the object's value not just the object (i.e. currNode = {Object} or {Tree}--> currNode.value: 12)
            currLevel.push(currNode.value)
            if (currNode.left !== null) {
                queue.push(currNode.left)
            }
            if (currNode.right !== null) {
                queue.push(currNode.right)
            }
        }
        result.unshift(currLevel)
    }

    return
}

// Output: [[9,10,5],[7,1],[12]] 

let root = new Tree(12)
root.left = new Tree(7)
root.right = new Tree(1)
root.left.left = new Tree(9)
root.right.left = new Tree(10)
root.right.right = new Tree(5)
// console.log(reverse(root))
console.log(root)

  // Tree {
  //   value: 12,
  //   left: Tree {
  //     value: 7,
  //     left: Tree { value: 9, left: null, right: null },
  //     right: null
  //   },
  //   right: Tree {
  //     value: 1,
  //     left: Tree { value: 10, left: null, right: null },
  //     right: Tree { value: 5, left: null, right: null }
  //   }
  // }