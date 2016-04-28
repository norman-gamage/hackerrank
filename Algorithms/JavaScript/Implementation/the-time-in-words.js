/**
 * Title          The Time in Words
 * URL            https://www.hackerrank.com/challenges/the-time-in-words
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2016 Apr 28
 */

function main() {
  // Read input
  var h = Number(readLine()),
    m = Number(readLine()),
    s, min, nums = [];

  nums[0] = "o' clock ";
  nums[1] = "one ";
  nums[2] = "two ";
  nums[3] = "three ";
  nums[4] = "four ";
  nums[5] = "five ";
  nums[6] = "six "
  nums[7] = "seven ";
  nums[8] = "eight ";
  nums[9] = "nine ";
  nums[10] = "ten ";
  nums[11] = "eleven ";
  nums[12] = "twelve ";
  nums[13] = "thirteen ";
  nums[14] = "fourteen ";
  nums[15] = "quarter ";
  nums[16] = "sixteen ";
  nums[17] = "seventeen ";
  nums[18] = "eighteen ";
  nums[19] = "nineteen ";
  nums[20] = "twenty ";
  nums[30] = "half "

  min = (m < 2) ? "minute " : "minutes ";

  // Output
  if (m === 0) {
    s = nums[h] + nums[m];
  } else if (m === 15) {
    s = nums[m] + "past " + nums[h];
  } else if (m === 45) {
    s = nums[60 - m] + "to " + nums[h + 1];
  } else if (m === 30) {
    s = nums[30] + "past " + nums[h];
  } else if (m < 30) {
    nums[m] = nums[20] + ((m === 20) ? "" : nums[m % 20]);
    s = nums[m] + min + "past " + nums[h];
  } else if (m > 30) {
    nums[60 - m] = (((60 - m) > 20) ? nums[20] : "") + ((m === 40) ? "" : nums[(60 - m) % 20]);
    s = nums[60 - m] + min + "to " + nums[h + 1];
  } else {
    // Do nothing
  }
  console.log(s);
}