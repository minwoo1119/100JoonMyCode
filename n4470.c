#include <stdio.h>
#include<string.h>

int main(void) {
  int n = 0; //처음에 입력받을 변수
  char a[99][52]; //문자열을 입력받을 배열
  scanf("%d", &n);

  getchar();

  for (int i = 0; i < n; i++) {
    fgets(a[i], sizeof(a[i]), stdin);
  }

  for (int i = 0; i < n; i++) {
    printf("%d. %s", i + 1, a[i]);
  }

  return 0;
}