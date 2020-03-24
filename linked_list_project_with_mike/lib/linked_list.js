// ============================================================================
// Implementation Exercise: Singly Linked List
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Singly Linked List and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those 
// in the table provided in the Time and Space Complexity Analysis section
// of your Linked List reading!
//
// -----------
// Let's Code!
// -----------

// TODO: Implement a Linked List Node class here
class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }

}

// TODO: Implement a Singly Linked List class here
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // TODO: Implement the addToTail method here
    addToTail(val) {
        let newTail = new Node(val) /// creates a new node for the tail
        if (this.tail) {  // if tail
            this.tail.next = newTail    //the old tails next node becomees the new Tail (new Node)
        }
        this.tail = newTail /// setting tail node as newest node
        if (this.length === 0) {
            this.head = this.tail
        }
        this.length += 1
        return this;
    }

    // TODO: Implement the removeTail method here
    removeTail() {
        if (!this.length) {
            return undefined
        }
        let oldTail = this.tail
        if (this.length === 1) {
            this.tail = null;
            this.head = null;
        } else {
            let currentNode = this.head
            for (let i = 1; i <= this.length; i++) {
                if (currentNode.next === this.tail) {
                    currentNode.next = null
                    this.tail = currentNode;
                } else {
                    currentNode = currentNode.next 
                }
            }
        }
        this.length -= 1
        return oldTail
    }


    // linkedlist {
    //     this.head = 23
    //     this.tail = 73
    //     this.length = 4
    // }

    // [23] => [42] => [52] => [73]


    // TODO: Implement the addToHead method here
    addToHead(val) {
        let newNode = new Node(val);///makes new node;

        if (this.head) {
            let oldHead = this.head;///current head
            this.head = newNode; /// head is reassigned to new node
            this.head.next = oldHead ///old head === next node in chain
        }

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        this.length += 1
        return this;    
    }

    // TODO: Implement the removeHead method here
    removeHead() {
        if (!this.length) return undefined;
        let oldHead = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {         
            let newHead = oldHead.next;
            this.head = newHead;
        }
        this.length -= 1;
        return oldHead;
    }

    // TODO: Implement the contains method here
    contains(target) {
        let currentNode = this.head
        for (let i = 0; i < this.length; i++) {
            if (currentNode.value === target) {
                return true
            }
            currentNode = currentNode.next
        }
        return false
    }

    // TODO: Implement the get method here
    get(index) {
        let currentNode = this.head;
        for (let i = 0; i < this.length; i++) {
            if (i === index) {
                return currentNode;
            }
            currentNode = currentNode.next
        }
        return null;
    }

    // TODO: Implement the set method here
    set(index, val) {
        let currentNode = this.head;
        for (let i = 0; i < this.length; i++) {
            if (i === index) {
                currentNode.value = val;
                return true
            }
            currentNode = currentNode.next
        }
        return false;
    }

    // TODO: Implement the insert method here
    insert(index, val) {
        if (index >= this.length) return false
        let currentNode = this.head;
        let newNode = new Node(val)
        if (index === 0) {
            newNode.next = this.head
            this.head = newNode
            this.length += 1;
        }
        for (let i = 1; i < this.length; i++) {
            if (i === index) {
                let oldNext = currentNode.next;
                currentNode.next = newNode;
                newNode.next = oldNext;
                this.length += 1;
                return true
            }
            currentNode = currentNode.next
        }
        return false;
    }
        // [A] => [B] => [D]
        

    // TODO: Implement the remove method here
    remove(index) {
        if (index >= this.length) return undefined
        let currentNode = this.head;

        if (index === 0) {
            this.head = currentNode.next
            this.length -= 1;
        }
        for (let i = 1; i < this.length; i++) {
            if (i === index) {
                let oldNext = currentNode.next;
                currentNode.next = oldNext.next;
                this.length -= 1;
                return oldNext
            }
            currentNode = currentNode.next
        }
        return undefined;
    }

    // TODO: Implement the size method here
    size() {
        if(!this.length){
            return 0;
        }else{
            return this.length;
        }
    }
}

exports.Node = Node;
exports.LinkedList = LinkedList;
