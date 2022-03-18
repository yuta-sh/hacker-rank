const Queue = class {
  constructor() {
    this.head = [];
    this.tail = [];
  }

  enqueue(val) {
    this.tail.push(val);
  }

  dequeue() {
    if (this.head.length === 0) {
      this.head = this.tail.reverse();
      this.tail = [];
    }
    return this.head.pop();
  }
};

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(1);
queue.enqueue(1);
queue.enqueue(10);
queue.enqueue(2);
console.log("head", queue.head, "tail:", queue.tail);
console.log(queue.dequeue());
console.log("head", queue.head, "tail:", queue.tail);
console.log(queue.dequeue());
console.log("head", queue.head, "tail:", queue.tail);
console.log(queue.dequeue());
console.log("head", queue.head, "tail:", queue.tail);
queue.enqueue(100);
console.log("head", queue.head, "tail:", queue.tail);
queue.enqueue(1000);
console.log("head", queue.head, "tail:", queue.tail);
console.log(queue.dequeue());
console.log("head", queue.head, "tail:", queue.tail);
console.log(queue.dequeue());
console.log("head", queue.head, "tail:", queue.tail);
console.log(queue.dequeue());
console.log("head", queue.head, "tail:", queue.tail);
console.log(queue.dequeue());
console.log("head", queue.head, "tail:", queue.tail);
console.log(queue.dequeue());
console.log("head", queue.head, "tail:", queue.tail);
