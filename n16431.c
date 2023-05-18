#include<stdio.h>
#include<stdlib.h>
#include<math.h>

typedef struct Point{
    int r;
    int c;
    int result;
} Point;

int dist(Point a, Point b)
{
    int result = abs((a.r)-(b.r))+abs((a.c)-(b.c));
    return result;
}

int main(void)
{
    Point Bessie;
    Point Daisy;
    Point John;
    scanf("%d %d",&Bessie.r,&Bessie.c);
    scanf("%d %d",&Daisy.r,&Daisy.c);
    scanf("%d %d",&John.r,&John.c);

    double d1 = dist(Bessie,John);
    int d2 = dist(Daisy,John);

    Bessie.result = (ceil)(d1/2);
    Daisy.result = d2;

    if(Bessie.result>Daisy.result){
        printf("daisy\n");
    }
    else if(Bessie.result<Daisy.result){
        printf("bessie\n");
    }
    else{
        printf("tie\n");
    }

    return 0;
}