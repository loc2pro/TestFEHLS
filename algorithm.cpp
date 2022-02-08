#include <stdio.h>

#define MAX 100
void nhap(float a[], int n) {
  do{
    printf("\nNhập số phần tử: ");
    scanf("%d", &n);
    if(n<=0 || n>MAX){
      printf("\nSố phần tử không hợp lệ, xin vui lòng kiểm tra lại");
    }
  }while(n<=0 || n> MAX);
  for(int i = 0; i < n; i++){
    printf("Nhập a[%d]= ", i);
    scanf("%f", &a[i]);
  }
}
float max(float a[], int n)
{
    int max = a[0];
    for (int i = 1; i < n; i++)
        if (max < a[i])
            max = a[i];
    return max;
}
float min(float a[], int n)
{
    int min = a[0];
    for (int i = 1; i < n; i++)
        if (min > a[i])
            min = a[i];
    return min;
}
float isMin(float a[], int n){
  float min = 0;
  for(int i = 0; i < n; i++){
    if(a[i] < max(a,n)){
        min+= a[i];
    }
  }
  return min;
}
float isMax(float a[], int n){
  float max = 0;
  for(int i = 0; i < n; i++){
    if(a[i] > min(a,n)){
        max+= a[i];
    }
  }
  return max;
}
void xuat(float a[], int n){
  printf("Các phần tử trong mảng là: ");
  for(int i = 0; i < n; i++){
    printf("%f\t",a[i]);
  }
  printf("\n Tổng phần tử nhỏ nhất là: %.1f",isMin(a,n));
  printf("\n Tổng phần tử lớn nhất là: %.1f",isMax(a,n));
  printf("\n---------------------------------\n");
}
int main() {
  int n = 0;
  float a[MAX];
  do{
    printf("\nNhập số phần tử: ");
    scanf("%d", &n);
    if(n<=0 || n>MAX){
      printf("\nSố phần tử không hợp lệ, xin vui lòng kiểm tra lại");
    }
  }while(n<=0 || n> MAX);
  for(int i = 0; i < n; i++){
    printf("Nhập a[%d]= ", i);
    scanf("%f", &a[i]);
  }
  xuat(a,n);
}