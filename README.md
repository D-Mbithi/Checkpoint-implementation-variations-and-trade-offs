# Checkpoint: Implementation Variations and Trade-offs

This project compares several queue and priority queue implementations in JavaScript:

- Array-based queue
- Linked list-based queue
- Min-heap-based priority queue
- Ordered array-based priority queue

Each implementation shows a different approach to storage, performance, and behavior. The repository includes tests and a small usage script so you can compare them side by side.

## Project Structure

- [array-based-queue.js](array-based-queue.js)
- [linked-based-queue.js](linked-based-queue.js)
- [Min-Heap-based-Priority-Queue.js](Min-Heap-based-Priority-Queue.js)
- [Ordered-Array-based-Priority-Queue.js](Ordered-Array-based-Priority-Queue.js)
- [queue.test.js](queue.test.js)
- [usage.js](usage.js)

## Implementations

### Array-based queue

A fixed-size circular queue backed by an array.

- Fast enqueue/dequeue with predictable indexing
- Requires a capacity limit
- Good when the maximum size is known

### Linked list-based queue

A dynamically growing queue backed by linked nodes.

- No fixed capacity
- Enqueue and dequeue stay efficient
- Uses extra memory per node

### Min-heap-based priority queue

A priority queue that always returns the smallest value first.

- Efficient insertion and removal
- Better than a sorted array when there are many updates
- Best when the priority order must be maintained efficiently

### Ordered array-based priority queue

A priority queue that keeps the array sorted on insert.

- Simple to understand and implement
- Fast access to the minimum element
- Insertions are more expensive because the array must stay ordered

## Complexity Summary

| Structure | Enqueue/Insert | Dequeue/Extract | Peek |
| --- | --- | --- | --- |
| Array queue | O(1) | O(1) | O(1) |
| Linked list queue | O(1) | O(1) | O(1) |
| Min-heap priority queue | O(log n) | O(log n) | O(1) |
| Ordered array priority queue | O(n) | O(1) | O(1) |

## Running the Project

Install dependencies if needed, then run:

```bash
npm test
```

This runs the automated test suite in [queue.test.js](queue.test.js).

To see the sample output from each implementation:

```bash
npm run dev
```

## Notes

- The priority queue implementations assume values can be compared with the default JavaScript comparison operators.
- The tests cover FIFO behavior, empty-state errors, circular queue behavior, and minimum extraction for the priority queues.