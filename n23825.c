#include<stdio.h>

int main(void)
{
    int n,m;
    scanf("%d %d",&n,&m);

    if((int)(n/2)>(int)(m/2))
        printf("%d\n",(int)(m/2));
    else
        printf("%d\n",(int)(n/2));

    return 0;
}