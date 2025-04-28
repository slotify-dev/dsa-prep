/**
 * Problem: Design Search Autocomplete System
 * Data Structures Used:
 * - Trie (Prefix tree for efficient search)
 * - Priority Queue (For top 3 results)
 * - Hash Map (For sentence frequencies)
 *
 * Time Complexity:
 * - addSentence: O(L) per sentence (L = length)
 * - input: O(L + n log n) (n = number of sentences)
 * Space Complexity: O(N*L) (N = total sentences)
 */

interface TrieNode {
  sentences: Map<string, number>;
  children: Map<string, TrieNode>;
}

class AutocompleteSystem {
  private root: TrieNode;
  private deadEnd: TrieNode;
  private currentInput: string;
  private currentNode: TrieNode;

  constructor(sentences: string[], times: number[]) {
    this.root = this.createNode();
    this.currentInput = "";
    this.currentNode = this.root;
    this.deadEnd = this.createNode();

    for (let i = 0; i < sentences.length; i++) {
      this.addSentence(sentences[i], times[i]);
    }
  }

  input(c: string): string[] {
    if (c === "#") {
      this.addSentence(this.currentInput, 1);
      this.currentInput = "";
      this.currentNode = this.root;
      return [];
    }

    this.currentInput += c;
    if (!this.currentNode.children.has(c)) {
      this.currentNode = this.deadEnd;
      return [];
    }

    this.currentNode = this.currentNode.children.get(c)!;
    return this.getTop3(this.currentNode.sentences);
  }

  private addSentence(sentence: string, count: number): void {
    let node = this.root;
    for (const c of sentence) {
      if (!node.children.has(c)) {
        node.children.set(c, this.createNode());
      }
      node = node.children.get(c)!;
      node.sentences.set(sentence, (node.sentences.get(sentence) || 0) + count);
    }
  }

  private getTop3(sentences: Map<string, number>): string[] {
    const pq: [string, number][] = [];

    sentences.forEach((count, sentence) => {
      pq.push([sentence, count]);
    });

    pq.sort((a, b) => {
      if (a[1] !== b[1]) return b[1] - a[1];
      return a[0].localeCompare(b[0]);
    });

    return pq.slice(0, 3).map((x) => x[0]);
  }

  private createNode(): TrieNode {
    return {
      children: new Map(),
      sentences: new Map(),
    };
  }
}
