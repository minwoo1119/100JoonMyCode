#include<stdio.h>

int chk(int n);

int main(void){
  int n=0,m=0;
  int CM=0;
  while(scanf("%d",&n) && n!=0){
    CM = 1;
    while(n!=0){
      m = n%10;
      CM += chk(m);
      n/=10;
    }
    printf("%d\n",CM);
  }
  return 0;
}

int chk(int n){
  if(n==0){
    return 5;
  }
  else if(n==1){
    return 3;
  }
  else{
    return 4;
  }
}