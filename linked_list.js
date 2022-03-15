const SinglyLinkedListNode = class {
  constructor(nodeData) {
    this.data = nodeData;
    this.next = null;
  }
};

const SinglyLinkedList = class {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insertNode(nodeData) {
    const node = new SinglyLinkedListNode(nodeData);

    if (this.head == null) {
      this.head = node;
    } else {
      this.tail.next = node;
    }

    this.tail = node;
  }
};

function printSinglyLinkedList(node) {
  while (node != null) {
    process.stdout.write(String(node.data));

    node = node.next;

    if (node != null) {
      process.stdout.write("=>");
    }
  }
  process.stdout.write("\n");
}

const linkedList = new SinglyLinkedList();
linkedList.insertNode(1);
linkedList.insertNode(1);
linkedList.insertNode(2);
linkedList.insertNode(3);

printSinglyLinkedList(linkedList.head);
