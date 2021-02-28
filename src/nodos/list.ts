import Node from "./node";

export default class LinkedList {
  private head: Node;

  constructor() {
    this.head = null!;
  }

  public isEmpty(): boolean {
    return this.head === null;
  }

  public size(): number {
    if (this.isEmpty()) {
      return 0;
    } else {
      let i = 0;
      let aux = this.head;

      while (aux) {
        i++;
        aux.getNext;
      }

      return i;
    }
  }

  public addFirst(data: any): void {
    if (data) {
      if (this.isEmpty()) {
        this.head = new Node(data);
      } else {
        const node = new Node(data);
        node.setNext(this.head);
        this.head = node;
      }
    } else {
      throw new Error("El parametro null no puede ser null o undefined");
    }
  }

  public addLast(data: any): void {
    if (data) {
      if (this.isEmpty()) {
        this.head = new Node(data);
      } else {
        let aux = this.head;

        while (aux.getNext()) {
          aux = aux.getNext();
        }

        aux.setNext(new Node(data));
      }
    } else {
      throw new Error("El parametro null no puede ser null o undefined");
    }
  }
}
