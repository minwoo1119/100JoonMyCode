#include <stdio.h>

int main(void) {

  int n; // 통화시간의 개수
  int val[21]; // 각 개수별 통화시간
  scanf("%d", &n);

  for (int i = 0; i < n; i++) {
    scanf("%d", &val[i]);
  }

  int payM = 0; // 민식 요금제로 계산할 시 얼마인지 
  int payY = 0; // 영식 요금제로 게산할 시 얼마인지
  for (int i = 0; i < n; i++) {
    if (val[i] % 30 == 0) { // 사용시간이 30으로 나누어떨어지면
      payY += val[i] / 30 + 1; // 30을 나눈 몫 + 1
    } else { // 사용시간이 30으로 나누어떨어지지 않을 때
      if (val[i] < 30) { // 그리고 사용시간이 30보다 작을 때
        payY += 1; // 1포인트
      } else { // 30보다 크거나 같을 때
        payY += val[i] / 30 + 1; // 30을 나눈 몫 + 1 포인트
      }
    }

    if (val[i] % 60 == 0) { // 사용시간이 60으로 나누어떨어질때
      payM += val[i] / 60 + 1; // 60을 나눈 몫 + 1 포인트
    } else { // 사용시간이 60으로 나누어떨어지지 않을 때
      if (val[i] < 60) { // 그리고 사용시간이 60보다 작을 때
        payM += 1; // 1포인트
      } else { // 그리고 60보다 크거나 같을 때
        payM += val[i] / 60 + 1; // 60을 나눈 몫 + 1 포인트
      }
    }
  }

// 포인트이므로 각 요금인 10원, 15원을 곱함.
  payY *= 10; 
  payM *= 15;

  if (payM > payY) { // 민식 요금제가 영식 요금제보다 비쌀 때
    printf("%c %d", 'Y', payY);
  } else if (payM < payY) { // 영식 요금제가 더 비쌀 때
    printf("%c %d", 'M', payM);
  } else if (payM == payY) { 두 요금제의 가격이 같을 때
    printf("%c %c %d", 'Y', 'M', payY);
  }

  return 0;
}
