#include <ctype.h>
#include <stdio.h>

int main(void) {
  int n = 0;
  char Si[101][21]; /*문자열 (최대 정수 100과 최대 글자 수 20을
고려한 크기)*/

  scanf("%d", &n); 
  for (int i = 0; i < n; i++) {
    scanf("%s", Si[i]); /*Si함수의 행렬 중 행만을 언급함. 
Si[i][1]~Si[i][21] 칸을 이야기함*/
  }

  int j = 0;
  for (int i = 0; i < n; i++) {
    while (Si[i][j] != '\0') {
      if (isupper(Si[i][j])) { //isupper 함수로 대문자인지 판별
        Si[i][j] = tolower(Si[i][j]);//대문자일 경우 소문자로 변경
      }
      j++;  //while 반복문
    }
    j = 0;
  }

  for (int i = 0; i < n; i++) {
    printf("%s\n", Si[i]);  // 출력
  }

  return 0;
}