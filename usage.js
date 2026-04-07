const { ArrayQueue } = require("./array-based-queue");
const { LinkedListQueue } = require("./linked-based-queue");
const { MinHeapPriorityQueue } = require("./Min-Heap-based-Priority-Queue");
const {
  OrderedArrayPriorityQueue,
} = require("./Ordered-Array-based-Priority-Queue");

// Example usage of ArrayQueue
console.log("Testing ArrayQueue:");
const newArray = new ArrayQueue(10);

newArray.enqueue(1);
newArray.enqueue(2);
newArray.enqueue(3);

console.log(newArray.dequeue()); // Output: 1
console.log(newArray.peek()); // Output: 2

// Example usage of LinkedListQueue
console.log("Testing LinkedListQueue:");
const linkedListQueue = new LinkedListQueue();

linkedListQueue.enqueue(1);
linkedListQueue.enqueue(2);
linkedListQueue.enqueue(3);

console.log(linkedListQueue.dequeue()); // Output: 1
console.log(linkedListQueue.peek()); // Output: 2


// Example usage of MinHeapPriorityQueue
console.log("Testing MinHeapPriorityQueue:");
const minHeapPQ = new MinHeapPriorityQueue();

minHeapPQ.insert(5);
minHeapPQ.insert(3);
minHeapPQ.insert(8);

console.log(minHeapPQ.extractMin()); // Output: 3
console.log(minHeapPQ.peekMin()); // Output: 5

// Example usage of OrderedArrayPriorityQueue
console.log("Testing OrderedArrayPriorityQueue:");
const orderedArrayPQ = new OrderedArrayPriorityQueue();

orderedArrayPQ.insert(5);
orderedArrayPQ.insert(3);
orderedArrayPQ.insert(8);

console.log(orderedArrayPQ.extractMin()); // Output: 3
console.log(orderedArrayPQ.peekMin()); // Output: 5