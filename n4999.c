#include <stdio.h>

int main(void) {
	// 문자열 2개 변수 생성
	char a[999];
	char b[999];
	scanf("%s", a);
	scanf("%s", b);

	// h 전까지의 개수를 담을 변수 생성
	int an = 0, bn = 0;

	// for문을 이용하여 h가 나오기 전까지 개수를 카운팅
	for (int i = 0; a[i] != 'h'; i++) {
		an++;
	}

	for (int i = 0; b[i] != 'h'; i++) {
		bn++;
	}

	// 개수를 판단하여 go 혹은 no 출력
	if (an >= bn) {
		printf("go\n");
	} else {
		printf("no\n");
	}

	return 0;
}