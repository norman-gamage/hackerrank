/**
 * Title          Insertion Sort - Part 2
 * URL            https://www.hackerrank.com/challenges/insertionsort2
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2016 May 08
 */

void insertionSort(int N, int arr[]) {
  int i, j, value;

  for (i = 1; i < N; i++) {
    value = arr[i];
    j = i - 1;

    while (j >= 0 && value < arr[j]) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = value;
  }

  for (j = 0; j < N; j++) {
    printf("%d", arr[j]);
    printf(" ");
  }
}

int main(void) {
  // Read input
  int N;
  scanf("%d", & N);

  int arr[N], i;
  for (i = 0; i < N; i++) {
    scanf("%d", & arr[i]);
  }

  // Sorting
  insertionSort(N, arr);

  return 0;
}