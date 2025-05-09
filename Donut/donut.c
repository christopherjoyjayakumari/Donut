#include <stdio.h>
#include <string.h>
#include <math.h>
#include <time.h>   

#define WIDTH 80
#define HEIGHT 22
#define R1 1
#define R2 2
#define K1 150
#define K2 5

int main() {
    float A = 0, B = 0;
    char b[1760]; 
    float z[1760];
    
    printf("\x1b[2J"); 
    
    while (1) {
        memset(b, ' ', sizeof(b));
        memset(z, 0, sizeof(z));
        
        
        for(int k = 0; k < 1760; k++) {
            b[k] = k % 80 == 79 ? '\n' : ' ';
        }
        
        float cA = cos(A), sA = sin(A);
        float cB = cos(B), sB = sin(B);
        
        // Theta loop
        for(float j = 0; j < 6.28; j += 0.07) {
            float ct = cos(j), st = sin(j);
            
            // Phi loop
            for(float i = 0; i < 6.28; i += 0.02) {
                float sp = sin(i), cp = cos(i);
                float h = ct + 2; // R1 + R2*cos(theta)
                float D = 1 / (sp * h * sA + st * cA + 5); // 1/z
                float t = sp * h * cA - st * sA;
                
                int x = 40 + 30 * D * (cp * h * cB - t * sB);
                int y = 12 + 15 * D * (cp * h * sB + t * cB);
                int o = x + 80 * y;
                int N = 8 * ((st * sA - sp * ct * cA) * cB - sp * ct * sA - st * cA - cp * ct * sB);
                
                if(y < 22 && y >= 0 && x >= 0 && x < 79 && D > z[o]) {
                    z[o] = D;
                    b[o] = ".,-~:;=!*#$@"[N > 0 ? N : 0];
                }
            }
        }
        
        printf("\x1b[H"); // Move cursor to home position
        for(int k = 0; k < 1760; k++) {
            putchar(b[k]);
        }
        
        A += 0.07;
        B += 0.03;
        
        // Modern replacement for usleep()
        struct timespec ts;
        ts.tv_sec = 0;
        ts.tv_nsec = 30000 * 1000; 
        nanosleep(&ts, NULL);
    }
    
    return 0;
}