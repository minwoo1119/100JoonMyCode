#include <stdio.h>

int main(void) {

  // n,m 입력받기
	long long n = 0, m = 0;
  scanf("%lld %lld",&n,&m);

  // 나눈 값을 rt1에, 나머지를 rt2에
	double rt1 = n / m;
	long long rt2 = n % m;

  // 출력
	printf("%.lf\n%lld", rt1, rt2);
  
	return 0;
}