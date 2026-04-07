const test = require('node:test');
const assert = require('node:assert/strict');

const { ArrayQueue } = require('./array-based-queue');
const { LinkedListQueue } = require('./linked-based-queue');
const { MinHeapPriorityQueue } = require('./Min-Heap-based-Priority-Queue');
const { OrderedArrayPriorityQueue } = require("./Ordered-Array-based-Priority-Queue");

test('ArrayQueue enqueues and dequeues in FIFO order', () => {
  const queue = new ArrayQueue(3);

  queue.enqueue(10);
  queue.enqueue(20);
  queue.enqueue(30);

  assert.equal(queue.dequeue(), 10);
  assert.equal(queue.dequeue(), 20);
  assert.equal(queue.peek(), 30);
});

test('ArrayQueue throws on dequeue and peek when empty', () => {
  const queue = new ArrayQueue(2);

  assert.throws(() => queue.dequeue(), /Queue is Empty/);
  assert.throws(() => queue.peek(), /Queue is empty/);
});

test('ArrayQueue supports circular behavior', () => {
  const queue = new ArrayQueue(3);

  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);

  assert.equal(queue.dequeue(), 1);
  queue.enqueue(4);

  assert.equal(queue.dequeue(), 2);
  assert.equal(queue.dequeue(), 3);
  assert.equal(queue.dequeue(), 4);
  assert.equal(queue.isEmpty(), true);
});

test('LinkedListQueue enqueues and dequeues in FIFO order', () => {
  const queue = new LinkedListQueue();

  queue.enqueue(100);
  queue.enqueue(200);
  queue.enqueue(300);

  assert.equal(queue.dequeue(), 100);
  assert.equal(queue.peek(), 200);
  assert.equal(queue.dequeue(), 200);
  assert.equal(queue.dequeue(), 300);
  assert.equal(queue.isEmpty(), true);
});

test('LinkedListQueue throws on dequeue and peek when empty', () => {
  const queue = new LinkedListQueue();

  assert.throws(() => queue.dequeue(), /Queue is empty/);
  assert.throws(() => queue.peek(), /Queue is empty/);
});

test('LinkedListQueue handles single-item transitions', () => {
  const queue = new LinkedListQueue();

  queue.enqueue('only');
  assert.equal(queue.dequeue(), 'only');
  assert.equal(queue.isEmpty(), true);

  queue.enqueue('next');
  assert.equal(queue.peek(), 'next');
  assert.equal(queue.isEmpty(), false);
});

test('MinHeapPriorityQueue inserts and extracts minimum correctly', () => {
  const pq = new MinHeapPriorityQueue();

  pq.insert(5);
  pq.insert(3);
  pq.insert(8);

  assert.equal(pq.extractMin(), 3);
  assert.equal(pq.peekMin(), 5);
});

test('OrderedArrayPriorityQueue inserts and extracts minimum correctly', () => {
  const pq = new OrderedArrayPriorityQueue();

  pq.insert(5);
  pq.insert(3);
  pq.insert(8);

  assert.equal(pq.extractMin(), 3);
  assert.equal(pq.peekMin(), 5);
});