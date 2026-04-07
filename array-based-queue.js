// Array-based Queue (Fixed size)

class ArrayQueue{
  constructor(capacity){
    this.capacity = capacity;
    this.queue = new Array(capacity)
    this.front = 0;
    this.rear = -1;
    this.size = 0;
  }

  isEmpty(){
    return this.size === 0;
  }

  isFull(){
    return this.size === this.capacity
  }

  enqueue(element){
    if(this.isFull()){
      throw new Error("Queue is full");
    }
    this.rear = (this.rear+1) % this.capacity;
    this.queue[this.rear] = element;
    this.size++
  }

  dequeue(){
    if(this.isEmpty()){
      throw new Error("Queue is Empty");
    }

    const element = this.queue[this.front];
    this.front = (this.front + 1) % this.capacity;
    this.size--;
    return element;
  }

  peek(){
    if(this.isEmpty()){
      throw new Error("Queue is empty");
    }

    return this.queue[this.front]
  }
}

module.exports = { ArrayQueue };

