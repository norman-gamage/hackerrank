/**
 * Title          Find Merge Point of Two Lists
 * URL            https://www.hackerrank.com/challenges/find-the-merge-point-of-two-joined-linked-lists
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2020 Mar 03
 */

function findMergeNode(headA, headB) {
  // Initialisations
  const origA = headA;
  const origB = headB;
  let lenA = 0;
  let lenB = 0;

  // Calculate lengths
  while (headA.next !== null) {
    headA = headA.next;
    lenA += 1;
  }

  while (headB.next !== null) {
    headB = headB.next;
    lenB += 1;
  }

  // Reset heads
  headA = origA;
  headB = origB;

  // Move heads to same distance
  if (lenA > lenB) {
    lenA -= lenB;

    while (lenA !== 0) {
      headA = headA.next;
      lenA -= 1;
    }
  } else {
    lenB -= lenA;

    while (lenB !== 0) {
      headB = headB.next;
      lenB -= 1;
    }
  }

  // Look for common node
  while (headA !== headB) {
    headA = headA.next;
    headB = headB.next;
  }

  // Output
  return headA.data;
}
