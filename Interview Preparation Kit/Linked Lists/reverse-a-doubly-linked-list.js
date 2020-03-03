/**
 * Title          Reverse a doubly linked list
 * URL            https://www.hackerrank.com/challenges/reverse-a-doubly-linked-list
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2020 Mar 03
 */

function reverse(head) {
  // Position head to last node
  while (head.next !== null) {
    head = head.next;
  }

  // Initialisations
  const orig = head;
  let revHead = head.prev;

  // Build reverse linked-list
  while (revHead !== null) {
    const newNode = new DoublyLinkedListNode(revHead.data);
    head.next = newNode;
    newNode.prev = head;
    head = head.next;
    revHead = revHead.prev;
  }

  // Output
  return orig;
}
