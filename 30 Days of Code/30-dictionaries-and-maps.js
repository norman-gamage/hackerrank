/**
 * Title          Day 8: Dictionaries and Maps
 * URL            https://www.hackerrank.com/challenges/30-dictionaries-and-maps
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2016 Jun 18
 */

function processData(input) {
  // Read input
  input = input.split('\n');
  let line = 0,
    readLine = () => input[line++].trim(), // Read a string
    readNumber = () => Number(readLine()), // Read a single integer
    log = (x) => console.log(x);

  let N = readNumber(),
    phoneBook = new Map();

  // Bulild up phone book
  for (let i = 0; i < N; i++) {
    let tmp = readLine().split(' ');
    phoneBook.set(tmp[0].trim(), Number(tmp[1]));
  }

  // Query phone book
  for (let i = 0; i < N; i++) {
    let tmp = readLine();

    if (phoneBook.has(tmp)) {
      log(tmp + "=" + phoneBook.get(tmp));
    } else {
      log("Not found");
    }
  }
} 