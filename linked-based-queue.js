// Linked List-based Queue (Dynamic size)
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedListQueue {
  constructor() {
    this.front = null;
    this.rear = null;
  }

  isEmpty() {
    return this.front === null;
  }

  enqueue(element) {
    const newNode = new Node(element);

    if (this.rear == null) {
      this.front = this.rear = newNode;
      return;
    }

    this.rear.next = newNode;
    this.rear = newNode;
  }

  dequeue() {
    if (this.isEmpty()) {
      throw new Error("Queue is empty");
    }
    const temp = this.front;
    this.front = this.front.next;

    if (this.front == null) {
      this.rear = null;
    }

    return temp.value;
  }

  peek() {
    if (this.isEmpty()) {
      throw new Error("Queue is empty.");
    }
    return this.front.value;
  }
}

module.exports = { Node, LinkedListQueue };

