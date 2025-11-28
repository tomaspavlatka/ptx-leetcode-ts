export class LruCacheSolver<K, V> {
  private capacity: number;
  private map: Map<K, Node<K,V>>;
  private head: Node<K, V> | null = null;
  private tail: Node<K, V> | null = null;

  constructor(private capacity: number) {
    this.capacity = capacity;
    this.map = new Map();
  }

  get(key: K): V | undefined {
    const node = this.map.get(key);
    if (!node) return undefined;

    this.moveToHead(node);
    return node.value;
  }

  put(key: K, value: V): void {
    const node = this.map.get(key);

    if (node) {
      node.value = value;
      this.moveToHead(node);
    } else {
      const newNode = new Node(key, value);
      this.map.set(key, newNode);
      this.addToHead(newNode);
    }

    if (this.map.size > this.capacity) {
      if (this.tail) {
        this.map.delete(this.tail.key);

      }
    }

  }

  private moveToHead(node: Node<K, V>) {
    this.removeNode(node);
    this.addToHead(node);
  }

  private addToHead(node: Node<K, V>) {
    node.next = this.head;
    node.prev = null;

    if (this.head) this.head.prev = node;
    this.head = node;

    if (!this.tail) this.tail = node;
  }

  private removeNode(node: Node<K, V>) {
    if (node.prev) {
      node.prev.next = node.next;
    } else {
      this.head = node.next;
    }

    if (node.next) {
      node.next.prev = node.prev;
    } else {
      this.tail = node.prev;
    }
  }
}

class Node<K, V> {
  key: K;
  value: V;

  prev: Node<K, V> | null = null;
  next: Node<K, V> | null = null;

  constructor(key: K, value: V) {
    this.key = key;
    this.value = value;
  }
}
