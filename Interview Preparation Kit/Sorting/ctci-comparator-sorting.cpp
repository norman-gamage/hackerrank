/**
 * Title          Sorting: Comparator
 * URL            https://www.hackerrank.com/challenges/ctci-comparator-sorting
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2020 May 07
 */

class Checker {
  public:
    // complete this method
    static int comparator(Player a, Player b)  {
      if (a.score == b.score) {
        return (a.name < b.name) ? 1 : -1;
      }
      
      return (a.score > b.score) ? 1 : -1;
    }
};