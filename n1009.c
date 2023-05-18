#include<stdio.h>
#include<math.h>


int MyPow(int a,int b)
{
    int result = 1;
    for(int i=0;i<b;i++){
        result *= a;
        result %= 10;
    }

    return result;
}

int main(void)
{
    int n=0;
    int a[100],b[100];
    unsigned long long rst[100];
    scanf("%d",&n);

    for(int i=0;i<n;i++){
        scanf("%d %d",&a[i],&b[i]);
    }

    for(int i=0;i<n;i++){
        rst[i] = MyPow(a[i],b[i]);
    }

    for(int i=0;i<n;i++){
        printf("%lld\n",rst[i]);
    }

    return 0;

}