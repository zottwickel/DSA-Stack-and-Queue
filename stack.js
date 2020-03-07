class _Node {
  constructor(data, next) {
    this.data = data
    this.next = next
  }
}

class Stack {
  constructor() {
    this.top = null
  }

  push(data) {
    if (this.top === null) {
      this.top = new _Node(data, null)
      return this.top
    }

    const node = new _Node(data, this.top)
    this.top = node
  }

  pop() {
    const node = this.top
    this.top = node.next
    return node.data
  }

  peek() {
    return this.top
  }

  display() {
    const response = []
    let selector = this.top
    while (selector !== null) {
      response.push(selector.data)
      selector = selector.next
    }
    console.log(response)
  }

  isEmpty() {
    return (!this.top === null)
  }
}



function main() {
  starTrek = new Stack()
  starTrek.push('Kirk')
  starTrek.push('Spock')
  starTrek.push('McCoy')
  starTrek.push('Scotty')

  starTrek.pop()
  starTrek.pop()
  starTrek.display()
}

main()

function is_palindrome(s) {
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  stack = new Stack()
  let r = ''
  for (let i=0; i < s.length; i++) {
    stack.push(s.charAt(i))
  }
  for (let j=0; j < s.length; j++) {
    r += stack.pop()
  }
  if (s === r) {
    return true
  } else {
    return false
  }
}

// True, true, true, false
console.log(is_palindrome("dad"));
console.log(is_palindrome("A man, a plan, a canal: Panama"));
console.log(is_palindrome("1001"));
console.log(is_palindrome("Tauhida"));

function matchParentheses(s) {
  s.replace(/[^()]/g, '')
  const stack = new Stack()
  let counter = 0
  for (let i=0;i<s.length;i++) {
    stack.push(s.charAt(i))
  }
  for (let j=0;j<s.length;j++) {
    let popper = stack.pop()
    if (popper === '(') {
      counter += 1
    } else if (popper === ')') {
      counter -= 1
    }
  }
  if (counter > 0) {
    console.log('one or more ")" characters are missing.')
    return 
  } else if (counter < 0) {
    console.log('one or more "(" characters are missing.')
    return
  } else {
    console.log('This is balanced')
    return
  }
}

//This is returning unexpected results
function sortStack(stack) {
  let tmpStack = new Stack()
  while (stack.peek()) {
    let temp = stack.pop()
    while (tmpStack.peek() && (tmpStack.peek().data > temp.data)) {
      stack.push(tmpStack.pop())
    }
    tmpStack.push(temp)
  }
  return tmpStack
}

matchParentheses('(x + 7) / ((3x^2)')
matchParentheses('((2x^3) + (3x - 12))/(-4x^2)')
matchParentheses('(x * y)/ y / x ) = 1')

const stackToSort = new Stack()

stackToSort.push(1)
stackToSort.push(4)
stackToSort.push(3)
stackToSort.push(2)

const tmp = sortStack(stackToSort)
tmp.display()

