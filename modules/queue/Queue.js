class Queue {
  constructor() {
    this.first = null;
    this.last = null;
}


  enqueue(data) {
    const node = new _Node(data);

    if (this.first === null) {
        this.first = node;
    }

    if (this.last) {
        this.last.next = node;
    }
    //make the new node the last item on the queue
    this.last = node;
}

dequeue() {
  //if the queue is empty, there is nothing to return
 if (this.first === null) {
     return;
 }
 const node = this.first;
 this.first = this.first.next;
  //if this is the last item in the queue
 if (node === this.last) {
     this.last = null;
 }
 return node.value;
}
  show() {
    return this.first.value;
  }

  all() {
    let result = [];
    let current = this.first;
    while (current !== null){
      result.push(current.value);
      current = current.next;
    }
    return result;
  }
}

class _Node {
  constructor(value) {
      this.value = value;
      this.next = null;
  }
}

module.exports = Queue
