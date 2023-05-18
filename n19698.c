#include<stdio.h>

int main(void)
{
    int n,w,h,l;
    scanf("%d %d %d %d",&n,&w,&h,&l);

    int result = (int)(w/l) * (int)(h/l);

    if(result>n){
        printf("%d\n",n);
    }
    else{
        printf("%d\n",result);
    }

    return 0;
}