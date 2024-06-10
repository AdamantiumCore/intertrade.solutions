export class Node {
  val;
  next = null;
  prev = null;

  constructor(val: any) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

export class DblLinkedList {
  head = null;
  tail = null;
  length = 0;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
}
