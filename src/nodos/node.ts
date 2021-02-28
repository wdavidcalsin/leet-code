/**
 * @class Node
 */
export default class Node {
  private data: any;
  private next: Node;

  constructor(data: any) {
    this.data = data;
    this.next = null!;
  }

  public getNext(): Node {
    return this.next;
  }
  public getData(): any {
    return this.data;
  }

  public setNext(next: Node): void {
    this.next = next;
  }

  public setData(data: any): void {
    this.data = data;
  }
}
