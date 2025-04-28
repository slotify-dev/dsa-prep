/**
 * Problem: Design LRU Cache
 * Data Structures Used:
 * - Hash Map (O(1) lookups)
 * - Doubly Linked List (O(1) insert/delete)
 * Input:
 *   capacity: number
 *   Methods: put(key, value), get(key)
 * Output:
 *   For get(): value or -1
 * Requirements:
 *   O(1) time for both operations
 *   Evict least recently used when full
 *
 * Time Complexity:
 * - get: O(1) (HashMap lookup + DLL operations)
 * - put: O(1) (HashMap + DLL operations)
 *
 * Space Complexity: O(capacity) (Stores all elements)
 */
class DLLNode {
  constructor(
    public key: number,
    public value: number,
    public prev: DLLNode | null = null,
    public next: DLLNode | null = null
  ) {}
}

class LRUCache {
  private capacity: number;
  private cache: Map<number, DLLNode>;

  private head: DLLNode;
  private tail: DLLNode;

  constructor(capacity: number) {
    this.capacity = capacity;
    this.cache = new Map();
    this.head = new DLLNode(-1, -1);
    this.tail = new DLLNode(-1, -1);
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  get(key: number): number {
    if (!this.cache.has(key)) return -1;

    const node = this.cache.get(key)!;
    this.removeNode(node);
    this.addToHead(node);
    return node.value;
  }

  put(key: number, value: number): void {
    if (this.cache.has(key)) {
      const node = this.cache.get(key)!;
      node.value = value;
      this.removeNode(node);
      this.addToHead(node);
    } else {
      if (this.cache.size >= this.capacity) {
        const lru = this.tail.prev!;
        this.removeNode(lru);
        this.cache.delete(lru.key);
      }
      const newNode = new DLLNode(key, value);
      this.cache.set(key, newNode);
      this.addToHead(newNode);
    }
  }

  private addToHead(node: DLLNode): void {
    node.next = this.head.next;
    node.prev = this.head;
    this.head.next!.prev = node;
    this.head.next = node;
  }

  private removeNode(node: DLLNode): void {
    node.prev!.next = node.next;
    node.next!.prev = node.prev;
  }
}
