#include <stdio.h>
int main(){
    double num1=0.0003,num2,num3;
    int num4;
    while(1){
         printf("가로 세로 값을 넣으시오\n");
        scanf("%lf %lf",&num2,&num3);
        printf("%lf",(num1*num2*num3));
        printf("종료하려면 0을 아니면 1을 입력\n");
        scanf("%d",&num4);
        if(num4==0){
            break;
        }
    }
    return 0;
}
