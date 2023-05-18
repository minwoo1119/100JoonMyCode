#include<stdio.h>

int Min(int n1, int n2, int n3){
    int rst=0;
    if(n1>=n2){
        rst = n2;
    }
    else if(n1<n2){
        rst = n1;
    }
    
    if(rst>n3){
        rst = n3;
    }

    return rst;
}

int main(void)
{
    int s,k,h;
    scanf("%d %d %d",&s,&k,&h);
    int sum = s+k+h;

    int min = Min(s,k,h);

    if(sum>=100)
        printf("OK");
    else{
        if(min==s){
            printf("Soongsil");
        }
        else if(min==k){
            printf("Korea");
        }
        else if(min==h){
            printf("Hanyang");
        }
    }

    return 0;
}