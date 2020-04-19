/**
 * Title          Frequency Queries
 * URL            https://www.hackerrank.com/challenges/frequency-queries
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2020 Apr 20
 */

function freqQuery(queries) {
  const hash = []; // Keep track of values and frequencies
  const freq = []; // Collate frequencies
  const output = []; // Output

  // Decrease frequency of old value
  const decOldFreq = oldVal =>
    (freq[oldVal] = freq[oldVal] ? freq[oldVal] - 1 : 0);

  // Increase frequenct of new value
  const incNewFreq = newVal =>
    (freq[newVal] = freq[newVal] ? freq[newVal] + 1 : 1);

  // Iterate through queries
  queries.forEach(query => {
    const [op, val] = query;
    const oldVal = hash[val] || 0;

    // Insert
    if (op === 1) {
      decOldFreq(oldVal);
      hash[val] = hash[val] ? hash[val] + 1 : 1;
      incNewFreq(hash[val]);
    }

    // Delete
    else if (op === 2) {
      decOldFreq(oldVal);
      hash[val] = hash[val] ? hash[val] - 1 : 0;
      incNewFreq(hash[val]);
    }

    // Check
    else {
      output.push(+!!freq[val]);
    }
  });

  return output;
}
