/**
 * Title          Larry's Array
 * URL            https://www.hackerrank.com/challenges/larrys-array
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2016 June 06
 */

function processData(input) {
  // Methods
  let isSorted = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        return false;
      }
    }
    return true;
  }

  let isBlockSorted = (arr, i) => {
    return (arr[i] < arr[i + 1] && arr[i + 1] < arr[i + 2]) ? true : false;
  }

  let rotate = (arr, i) => {
    let tmp = arr[i];
    arr[i] = arr[i + 1];
    arr[i + 1] = arr[i + 2];
    arr[i + 2] = tmp;
    return arr;
  };

  // Read input
  input = input.split('\n');
  let line = 0,
    readLine = () => input[line++], // Read a string
    readNumber = () => Number(readLine()), // Read a single integer
    readNumberList = () => readLine().split(' ').map(Number), // Read multiple integers
    log = (x) => console.log(x);

  let N = readNumber();

  for (let i = 0; i < N; i++) {
    let n = readNumber(),
      arr = readNumberList(),
      sorted = false;

    // Block iterations
    for (let j = 0; j < (n - 2) * (n - 2); j++) {
      let k = j % (n - 2),
        cnt = 2;

      // Rotating block elements
      while (cnt > 0 && !isBlockSorted(arr, k)) {
        arr = rotate(arr, k);
        cnt--;

        // Exit if first element is the lowest
        if (arr[k] < arr[k + 1] && arr[k] < arr[k + 2]) {
          cnt = 0;
        }
      }

      // Exit if array is sorted
      if (isSorted(arr)) {
        sorted = true;
        break;
      }
    }

    // Output
    log(sorted ? "YES" : "NO");
  }
}