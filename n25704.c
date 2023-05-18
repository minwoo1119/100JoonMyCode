#include <stdio.h>

int main(void) {
  int n = 0; // 쿠폰 개수
  int price = 0; // 할인 전 금액
  int rstPrc = 0; // 결론적으로 지불할 금액

  scanf("%d", &n);
  scanf("%d", &price);

  if (n >= 20) { // 도장이 20개 이상일 때
    if ((price * 0.75) < (price - 2000)) {
      rstPrc = price * 0.75;
    } else {
      rstPrc = price - 2000;
    }
  } else if (n >= 15) { // 도장이 15개 이상일 때
    if ((price * 0.9) < (price - 2000)) {
      rstPrc = price * 0.9;
    } else {
      rstPrc = price - 2000;
    }
  } else if (n >= 10) { //도장이 10개 이상일 때
    if ((price * 0.9) < (price - 500)) {
      rstPrc = price * 0.9;
    } else {
      rstPrc = price - 500;
    }
  } else if (n >= 5) { // 도장이 5개 이상일 때
    rstPrc = price - 500;
  } else if (n < 5) { // 도장이 5개 미만일 때
    rstPrc = price;
  }

  if (rstPrc <= 0) { // 할인금액이 원래 금액보다 클 경우
    rstPrc = 0; // 문제에서 0원으로 표기하라고 되어있음.
  }

  printf("%d\n", rstPrc);

  return 0;
}