// Given the head of a Singly LinkedList, 
// write a function to determine if the LinkedList has a cycle in it or not.

// convention for creating "node"
class Node {
    constructor(val, next = null) {
        this.val = val
        this.next = next
    }
}


const has_cycle = (head) => {
    // declare pointers, have them start at start of linkedlists a.k.a HEAD
    let slowPointer = head
    let fastPointer = head

    // loop through linked list and check for cycle 
    while (fastPointer !== null && fastPointer.next !== null) {
        slowPointer = slowPointer.next // increment slow pointer by one or up
        fastPointer = fastPointer.next.next // increment fast pointer by two or next.next
        
        // if the pointers equal each other, then print true
        if (fastPointer === slowPointer) {
            return true
        }
    }

    return false
}

head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(3)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(5)
head.next.next.next.next.next = new Node(6)
// console.log(`LinkedList has cycle: ${has_cycle(head)}`)

head.next.next.next.next.next.next = head.next.next
console.log(`LinkedList has cycle: ${has_cycle(head)}`)

head.next.next.next.next.next.next = head.next.next.next
console.log(`LinkedList has cycle: ${has_cycle(head)}`)