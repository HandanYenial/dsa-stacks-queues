/** Node: node for a queue. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    let node = new Node(val); // create a new node with the value passed in

    if (!this.first){// if there is no first node-if the linked list is empty
      this.first = node; // set the first node to the new node
      this.last = node; // set the last node to the new node
    } else {
      this.last.next = node; // set the next property of the last node to the new node
      this.last = node; // set the last node to the new node
    }
    this.size++; // increment the size

  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    if(!this.first){
      throw new Error("Queue is empty");
    }
    let temp = this.first; // create a temp variable to store the first node
    if(this.first == this.last){ // if there is only one node
      this.last = null; // set the last node to null
    }
    this.first = this.first.next; // set the first node to the next node
    this.size--; // decrement the size
    return temp.val;
  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
     return this.first.val;
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    return this.size === 0;

  }
}

module.exports = Queue;
