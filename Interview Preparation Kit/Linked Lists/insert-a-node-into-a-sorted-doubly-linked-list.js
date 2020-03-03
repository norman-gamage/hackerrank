/**
 * Title          Inserting a Node Into a Sorted Doubly Linked List
 * URL            https://www.hackerrank.com/challenges/insert-a-node-into-a-sorted-doubly-linked-list
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2020 Mar 03
 */

function sortedInsert(head, data) {
  const orig = head;
  const newNode = new DoublyLinkedListNode(data);

  // Edge-case: First node
  if (data <= head.data) {
    newNode.next = head;
    head.prev = newNode;

    // Output
    return newNode;
  } else {
    // Positioning head
    while (head.next !== null && head.data < data) {
      head = head.next;
    }

    // Edge-case: Last node
    if (data > head.data) {
      head.next = newNode;
      newNode.prev = head;
    } else {
      // Regular-case: Middle node
      const prev = head.prev;

      prev.next = newNode;
      newNode.prev = prev;

      newNode.next = head;
      head.prev = newNode;
    }

    // Output
    return orig;
  }
}
