/**
 * Title          Find the Median
 * URL            https://www.hackerrank.com/challenges/find-median
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
    arr = readNumberList(),
    found = false;;

  // Swap
  let swap = (i, j) => {
    let tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  }

  // Qsort
  let qsort = (s, e) => {
    let p = arr[e], i;

    for (i = s; i < e; i++) {
      if (arr[i] <= p) {
        //do nothing
      } else {
        let j = i;
        while (arr[j] > p && j < e) { j++; }

        swap(i, j);

        if (j === e) {
          if (i === Math.floor(n / 2)) {
            log(arr[i]);
            found = true;
            return;
          }

          break;
        }
      }
    }

    if (s < i - 1) {
      qsort(s, i - 1); //left
    }

    if (i + 1 < e) {
      qsort(i + 1, e); //right
    }
  }

  qsort(0, n - 1);

  if (!found) {
    log(arr[Math.floor(n / 2)]);
  }
} 