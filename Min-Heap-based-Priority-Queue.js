// Min-Heap-based Priority Queue

class MinHeapPriorityQueue {
  constructor() {
    this.heap = [];
  }

  insert(element) {
    this.heap.push(element);
    this.heapifyUp(this.heap.length - 1);
  }

 extractMin() {
    if (this.isEmpty()) throw new Error("Empty");

    const min = this.heap[0];
    const end = this.heap.pop();

    if (!this.isEmpty()) {
      this.heap[0] = end;
      this.heapifyDown(0);
    }

    return min;
 }



  peekMin() {
    if (this.isEmpty()) {
      throw new Error("Heap priority queue is empty.");
    }
    return this.heap[0];
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  heapifyUp(index) {
    let parent = Math.floor((index - 1) / 2);

    while (index > 0 && this.heap[parent] > this.heap[index]) {
      [this.heap[parent], this.heap[index]] = [
        this.heap[index],
        this.heap[parent],
      ];

      index = parent;
      parent = Math.floor((index - 1) / 2);
    }
  }

  heapifyDown(index) {
    let smallest = index;
    const left = 2 * index + 1;
    const right = 2 * index + 2;

    if (left < this.heap.length && this.heap[left] < this.heap[smallest]) {
      smallest = left;
    }

    if (right < this.heap.length && this.heap[right] < this.heap[smallest]) {
      smallest = right;
    }

    if (smallest !== index) {
      [this.heap[index], this.heap[smallest]] = [
        this.heap[smallest],
        this.heap[index],
      ];

      this.heapifyDown(smallest);
    }
  }
}

module.exports = { MinHeapPriorityQueue };
