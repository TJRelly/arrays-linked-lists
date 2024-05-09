/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);
    if (this.head === null) this.head = newNode;
    if (this.tail !== null) this.tail.next = newNode;
    this.tail = newNode;
    this.length += 1;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;
    if (this.tail === null) this.tail = newNode;
    this.length += 1;
  }

  /** pop(): return & remove last item. */

  pop() {
    let lastItem = this.tail;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      this.length -= 1;
      return lastItem.val;
    }

    let current = this.head;
    while (current.next !== this.tail) {
      current = current.next;
    }

    this.tail = current;
    this.tail.next = null;
    this.length -= 1;

    return lastItem.val;
  }

  /** shift(): return & remove first item. */

  shift() {
    let firstItem = this.head.val;
    if (this.head === this.tail) {
      this.tail = null;
    }
    this.head = this.head.next;
    this.length -= 1;
    return firstItem;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (idx > this.length - 1 || idx < 0) throw new Error("invalid index");
    let current = this.head;
    for (let i = 0; i <= idx; i++) {
      if (i === idx) return current.val;
      current = current.next;
    }
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (idx > this.length - 1 || idx < 0) throw new Error("invalid index");
    let current = this.head;
    for (let i = 0; i <= idx; i++) {
      if (i === idx) current.val = val;
      current = current.next;
    }
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    let newNode = new Node(val);
    if (idx > this.length || idx < 0) throw new Error("invalid index");
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    }

    let current = this.head;
    for (let i = 0; i <= idx; i++) {
      if (i === idx - 1) {
        let shifted = current.next;
        current.next = newNode;
        newNode.next = shifted;
        if (newNode.next === null) this.tail = newNode;
        break;
      }
      current = current.next;
    }

    this.length += 1;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx > this.length || idx < 0) throw new Error("invalid index");

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      let current = this.head;
      for (let i = 0; i <= idx; i++) {
        if (i === idx - 1) {
          let prev = current;
          current = current.next;
          prev.next = current.next;
          if (prev.next === null) this.tail = prev.next;
          break;
        }
        current = current.next;
      }
    }
    this.length -= 1;
  }

  /** average(): return an average of all values in the list */

  average() {
    if(this.length === 0) return 0

    let total = 0;
    let current = this.head;

    while (current) {
      total += Number(current.val);
      current = current.next;
    }
   
    return total / this.length;
  }
}

let linked = new LinkedList();

console.log("BEFORE:");
linked.push("1");
linked.push("3");
linked.push("6");
console.log(linked);
console.log("");
// linked.unshift("donuts");
// console.log(linked);
let current = linked.head;
while (current) {
  console.log(current.val);
  current = current.next;
}

console.log(linked.average());
console.log("AFTER:");

current = linked.head;
while (current) {
  console.log(current.val);
  current = current.next;
}

module.exports = LinkedList;
