/**
 * Title          Quicksort 2 - Sorting
 * URL            https://www.hackerrank.com/challenges/quicksort4
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2016 May 08
 */

function processData(input) {
  // Read input
  input = input.split('\n');
  let line = 0,
    readLine = () => input[line++], // Read a string
    readNumber = () => Number(readLine()), // Read a single integer
    readNumberList = () => readLine().split(' ').map(Number), // Read multiple integers
    log = (x) => console.log(x);

  let n = readNumber(),
    s = readNumberList(),
    arr = [].concat(s),
    qcnt = 0, cnt = 0;

  // Initial swap
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] > s[i + 1]) {
      let k = i, tmp = s[i + 1];

      while (tmp < s[k]) {
        s[k + 1] = s[k];
        k--;
        cnt++;
      }

      s[k + 1] = tmp;
    }
  }

  // Swap
  let swap = (i, j) => {
    let tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
    qcnt++;
  }

  // Qsort
  let qsort = (s, e) => {
    let p = arr[e], i;

    for (i = s; i < e; i++) {
      if (arr[i] <= p) {
        qcnt++;
      } else {
        let j = i;

        while (arr[j] > p && j < e) { j++; }

        swap(i, j);

        if (j === e) { break; }
      }

      if (i === e - 1) { qcnt++; }
    }

    if (s < i - 1) {
      qsort(s, i - 1); //left
    }

    if (i + 1 < e) {
      qsort(i + 1, e); //right
    }
  }

  // Call qsort
  qsort(0, n - 1);

  // Output
  log(cnt - qcnt);
} 