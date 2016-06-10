/**
 * Title          Almost Sorted
 * URL            https://www.hackerrank.com/challenges/almost-sorted
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2016 June 10
 */

function processData(input) {
  // Read input
  let inputArray = input.split('\n'),
    line = 0, readLine = () => inputArray[line++],
    readNumber = () => Number(readLine()),
    readNumberList = () => readLine().split(' ').map(Number),
    log = (x) => console.log(x);

  let N = readNumber(),
    arr = readNumberList(),
    head, tail,
    trend = false;

  /* Reverse sub-segment: Find head and tail indices */
  for (let i = 1; i < N; i++) {
    if (arr[i - 1] > arr[i] && trend === false) {
      head = i - 1;
      trend = true;
    }
    else if (arr[i - 1] < arr[i] && trend === true) {
      tail = i - 1;
      trend = false;
    }
  }

  /* Swap two (2) elements: Find indices */
  let swapFlag = false, cnt = 0, frontIndx = -1, backIndx = -1;

  // Special case: Only two (2) elements
  if (N === 2 && arr[0] > arr[1]) {
    frontIndx = 0;
    backIndx = 1; cnt = 2;
  }

  // General case
  else {
    for (let i = 1; i < N - 1; i++) {
      // Edge case: First and last elements 
      if (arr[0] > arr[N - 1] && arr[0] > arr[N - 2] && arr[N - 1] < arr[1]) {
        frontIndx = 0;
        backIndx = N - 1;
        cnt = 2;
        break;
      }

      // Edge case: First two (2) elements
      else if (arr[0] > arr[1] && arr[0] < arr[2]) {
        frontIndx = 0;
        backIndx = 1;
        cnt = 2;
        break;
      }

      // Edge case: Last two (2) elements
      else if (arr[N - 2] > arr[N - 1] && arr[N - 3] < arr[N - 1]) {
        frontIndx = N - 2;
        backIndx = N - 1;
        cnt = 2;
        break;
      }

      // Odd value #1: Lower than neighbours
      else if (arr[i - 1] < arr[i] && arr[i] > arr[i + 1] && arr[i - 1] < arr[i + 1]) {
        frontIndx = i;
        cnt++;
      }

      // Odd value #2: Lower than neighbours
      else if (arr[i - 1] > arr[i] && arr[i] < arr[i + 1] && arr[i - 1] < arr[i + 1]) {
        backIndx = i;
        cnt++;
      }
    }
  }

  // Swap check
  if (frontIndx > -1 && backIndx > -1 && cnt === 2) {
    swapFlag = true;
  }

  // Output: Reverse sub-segment
  if (tail - head > 2) {
    log("yes");
    log("reverse " + ++head + " " + ++tail);
  }

  // Output: Swap two (2) elements
  else if (swapFlag) {
    log("yes");
    log("swap " + ++frontIndx + " " + ++backIndx);
  }

  // Output: Unable to sort
  else {
    log("no");
  }
}