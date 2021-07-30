import { Node } from './node.model';

export class Cache {
  private readonly capacity: number; // Number of 'pages' in the cache
  private keys: Map<string, Node> = new Map(); // Keys used by each node
  private head: Node = new Node('', null); // Null node to define the head
  private tail: Node = new Node('', null); // Null node to define the tail

  constructor(capacity: number) {
    this.capacity = capacity;
    this.head.prev = this.tail;
    this.tail.prev = this.head;
  }

  // noinspection JSMethodCanBeStatic
  private removeNode(node: Node): void {
    const { prev, next } = { ...node };
    prev.next = next;
    next.prev = prev;
  }

  private addNode(node: Node): void {
    const actualTail = this.tail.prev;
    actualTail.next = node;

    this.tail.prev = node;
    node.prev = actualTail;
    node.next = this.tail;
  }

  get(key: string): string {
    const node = this.keys.get(key);
    if (node === undefined) {
      return null;
    }
    this.removeNode(node);
    this.addNode(node);
    return node.data;
  }

  set(key: string, data: string) {
    const node = this.keys[key];
    if (node) {
      this.removeNode(node);
    }

    const newNode = new Node(key, data);
    this.addNode(newNode);
    this.keys.set(key, newNode);

    if (this.keys.size > this.capacity) {
      const actualHead = this.head.next;
      this.removeNode(actualHead);
      this.keys.delete(key);
    }
    return newNode.data;
  }
}
