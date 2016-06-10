/**
 * Title          Quicksort In-Place
 * URL            https://www.hackerrank.com/challenges/quicksort3
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2016 June 10
 */

function processData(input) {
  // Read input
  input = input.split('\n');
  let line = 0,
    readLine = () => input[line++], // Read a string
    readNumber = () => Number(readLine()), // Read a single integer
    readNumberList = () => readLine().split(' ').map(Number), // Read multiple integers
    log = (x) => console.log(x);

  let n = readLine(),
    arr = readNumberList();

  let swap = function (i, j) {
    let tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  }

  let qsort = function (s, e) {
    let p = arr[e], i;

    for (i = s; i < e; i++) {
      if (arr[i] <= p) {
        //do nothing
      } else {
        let j = i;
        while (arr[j] > p && j < e) {
          j++;
        }

        swap(i, j);

        if (j === e) { break; }
      }
    }
    log(arr.join(' '));

    if (s < i - 1) {
      qsort(s, i - 1); //left
    }

    if (i + 1 < e) {
      qsort(i + 1, e); //right
    }
  }

  qsort(0, n - 1);
}