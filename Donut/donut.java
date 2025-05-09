import java.util.*;

public class donut {
    public static void main(String[] args) {
        final int WIDTH = 80;
        final int HEIGHT = 22;
        double A = 0, B = 0;
        char[] b = new char[WIDTH * HEIGHT];
        double[] z = new double[WIDTH * HEIGHT];
        
        // Clear screen (works on most terminals)
        System.out.print("\033[2J");
        
        while (true) {
            // Clear buffers
            Arrays.fill(b, ' ');
            Arrays.fill(z, 0);
            
            for (double j = 0; j < 6.28; j += 0.07) {
                double ct = Math.cos(j), st = Math.sin(j);
                for (double i = 0; i < 6.28; i += 0.02) {
                    double sp = Math.sin(i), cp = Math.cos(i);
                    double h = ct + 2;
                    double D = 1 / (sp * h * Math.sin(A) + st * Math.cos(A) + 5);
                    double t = sp * h * Math.cos(A) - st * Math.sin(A);
                    
                    int x = (int)(40 + 30 * D * (cp * h * Math.cos(B) - t * Math.sin(B)));
                    int y = (int)(12 + 15 * D * (cp * h * Math.sin(B) + t * Math.cos(B)));
                    int o = x + WIDTH * y;
                    int N = (int)(8 * ((st * Math.sin(A) - sp * ct * Math.cos(A)) * Math.cos(B) -
                            sp * ct * Math.sin(A) - st * Math.cos(A) - cp * ct * Math.sin(B)));
                    
                    if (y < HEIGHT && y >= 0 && x >= 0 && x < WIDTH && D > z[o]) {
                        z[o] = D;
                        int luminanceIndex = Math.max(0, Math.min(11, N));
                        b[o] = ".,-~:;=!*#$@".charAt(luminanceIndex);
                    }
                }
            }
            
            // Move cursor to home position and print frame
            System.out.print("\033[H");
            for (int j = 0; j < HEIGHT; j++) {
                for (int i = 0; i < WIDTH; i++) {
                    System.out.print(b[i + j * WIDTH]);
                }
                System.out.println();
            }
            
            A += 0.04;
            B += 0.02;
            
            try {
                Thread.sleep(50);
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
                break;
            }
        }
    }
}