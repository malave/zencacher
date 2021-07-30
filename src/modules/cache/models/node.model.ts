export class Node {
  public prev: Node = null;
  public next: Node = null;

  constructor(public key: string, public data: string) {}
}
