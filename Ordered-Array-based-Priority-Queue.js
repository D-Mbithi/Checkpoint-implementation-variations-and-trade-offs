// Ordered Array-based Priority Queue

class OrderedArrayPriorityQueue {
  constructor() {
    this.queue = [];
  }

  insert(element) {
    let i = 0;

    while(i < this.queue.length && this.queue[i] < element){
      i++
    }

    this.queue.splice(i, 0, element)
  }

  isEmpty() {
    return this.queue.length === 0;
  }

  extractMin() {
    if (this.isEmpty()) {
      throw new Error("This queue is empty");
    }

    return this.queue.shift()
  }

  peekMin() {
    if (this.isEmpty()) {
      throw new Error("This queue is empty");
    }
    return this.queue[0];
  }
}

module.exports = { OrderedArrayPriorityQueue };
