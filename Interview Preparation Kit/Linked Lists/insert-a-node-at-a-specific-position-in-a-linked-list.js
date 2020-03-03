/**
 * Title          Insert a node at a specific position in a linked list
 * URL            https://www.hackerrank.com/challenges/insert-a-node-at-a-specific-position-in-a-linked-list
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2020 Mar 03
 */

function insertNodeAtPosition(head, data, position) {
  const orig = head; // Original head node

  // Move head to position
  while (position !== 1) {
    head = head.next;
    position -= 1;
  }

  // Reference to next node
  const next = head.next;

  // New node
  const newNode = new SinglyLinkedListNode(data);
  newNode.next = next;
  head.next = newNode;

  // Output
  return orig;
}
