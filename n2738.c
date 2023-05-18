#include <stdio.h>

int main(void) {

  // n,m 변수 입력받기
	int n = 0, m = 0;
	scanf("%d %d", &n, &m);


  // 100x100짜리 2차원 배열 a,b 만들기
	int a[100][100];
	int b[100][100];

  // for 문을 이용하여 배열 a 입력받기
	for (int i = 0; i < n; i++) {
		for (int j = 0; j < m; j++) {
			scanf("%d", &a[i][j]);
		}
	}

  // for 문을 이용하여 배열 b 입력받기
	for (int i = 0; i < n; i++) {
		for (int j = 0; j < m; j++) {
			scanf("%d", &b[i][j]);
		}
	}

  // 두 배열을 더한 값 차례로 출력시키기
	for (int i = 0; i < n; i++) {
		for (int j = 0; j < m; j++) {
			printf("%d ", a[i][j] + b[i][j]);
		}
		printf("\n");
	}

  return 0;
}