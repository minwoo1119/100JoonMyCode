#include <stdio.h>

int main(void)
{

  // n 입력받기
  int n=0;
  scanf("%d",&n);

  // for문을 이용하여 1부터 9까지 쭉
  for(int i=1;i<=9;i++){
    printf("%d * %d = %d\n",n,i,n*i);
  }

  return 0;
}