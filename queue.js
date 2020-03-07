class _Node {
  constructor(value) {
      this.prev = null;
      this.value = value;
      this.next = null;
  }
}

class Queue {
  constructor() {
      this.first = null;
      this.last = null;
  }

  enqueue(data) {
    const node = new _Node(data)
    if (this.first == null) {
      this.first = node
    }
    if (this.last) {
      this.last.next = node
      node.prev = this.last
    }
    this.last = node
  }

  dequeue() {
    if (this.first === null) {
      return
    }
    const node = this.first
    this.first = this.first.next
    this.first.prev = null
    if (node === this.last) {
      this.last = null
    }
    return node.value
  }
}

function peek(q) {
  console.log(q.first.value)
  return q.first.value
}

function isEmpty(q) {
  console.log(!q.first)
  return !q.first
}

function display(q) {
  const response = []
  let selector = q.first
  while (selector) {
    response.push(selector.value)
    selector = selector.next
  }
  console.log(response)
  return response
}

const eQ = new Queue()
const starTrekQ = new Queue()
starTrekQ.enqueue('Kirk')
starTrekQ.enqueue('Spock')
starTrekQ.enqueue('Uhura')
starTrekQ.enqueue('Sulu')
starTrekQ.enqueue('Checkov')

peek(starTrekQ)
isEmpty(starTrekQ)
display(starTrekQ)

starTrekQ.dequeue()
starTrekQ.dequeue()

display(starTrekQ)

/*
  8. To make a 2 stacks into a queue, you would make a stack, and it's "upside-down" version so that when stuff is popped, it's popped from the upside down version. This version would be rewritten when anything would be pushed to the original stack.
  9. Make a function that places people in two queues based on gender and logs the partners by dequeuing both then logs the queue of the queue that still has dancers without partners.
  10. Function makes a queue that shows customers that have a one in four chance of requeueing.
*/