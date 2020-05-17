/**
 * Title          Fraudulent Activity Notifications
 * URL            https://www.hackerrank.com/challenges/fraudulent-activity-notifications
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2020 May 18
 */

function activityNotifications(expenditure, d) {
  // Initialisations
  const expLen = expenditure.length;
  const countLen = 201;
  const count = Array(countLen).fill(0);
  let output = 0;
  let median = 0;

  // Indices
  const leftIdx = Math.floor((d - 1) / 2);
  const rightIdx = Math.ceil((d - 1) / 2);

  // Building count array for last d-days
  for (let i = 0; i < d; i++) {
    count[expenditure[i]] += 1;
  }

  // Get value given index
  const getValue = (index) => {
    let k = 0;
    let val = 0;

    for (let j = 0; j < countLen; j++) {
      val = j;

      k += count[j];
      if (k > index) break;
    }

    return val;
  };

  // Main loop
  for (let i = d; i < expLen; i++) {
    const leftVal = getValue(leftIdx);

    // Median
    if (leftIdx === rightIdx) {
      // If odd-length array
      median = leftVal;
    } else {
      // If even-length array
      const rightVal = getValue(rightIdx);
      median = (leftVal + rightVal) / 2;
    }

    // Increase notifications
    if (expenditure[i] >= 2 * median) {
      output += 1;
    }

    // Adjust count array
    count[expenditure[i - d]] -= 1;
    count[expenditure[i]] += 1;
  }

  // Output
  return output;
}
