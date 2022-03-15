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

printSinglyLinkedList = (node) => {
  while (node != null) {
    process.stdout.write(String(node.data));

    node = node.next;

    if (node != null) {
      process.stdout.write("=>");
    }
  }
  process.stdout.write("\n");
};

const linkedList = new SinglyLinkedList();
linkedList.insertNode(1);
linkedList.insertNode(1);
linkedList.insertNode(2);
linkedList.insertNode(3);

printSinglyLinkedList(linkedList.head);

// TODO:特定の場所に挿入はメソッドとして拡張しておきたい
// TODO:特定の値を削除はメソッドとして拡張しておきたい→本当は双方向連結リストとしての拡張が一般的らしいが。→いや、これ外部関数としてならできるが内部メソッドとしては無理か？

// jsでインスタンスの削除ってどうやってやるんだ？
