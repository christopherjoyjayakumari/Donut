const donut = () => {
    let A = 0, B = 0;
    const b = new Array(80 * 22).fill(' ');  // Buffer for drawing the donut
    const z = new Array(80 * 22).fill(0);    // Z-buffer for depth testing
    const WIDTH = 80, HEIGHT = 22;
  
    const render = () => {
      b.fill(' ');  // Reset the buffer with spaces
      z.fill(0);    // Reset the z-buffer
      
      // Iterate over the donut's points
      for (let j = 0; j < 6.28; j += 0.07) {
        const ct = Math.cos(j), st = Math.sin(j);
        
        for (let i = 0; i < 6.28; i += 0.02) {
          const sp = Math.sin(i), cp = Math.cos(i);
          const h = ct + 2;  // Distance of the donut from the viewer
          const D = 1 / (sp * h * Math.sin(A) + st * Math.cos(A) + 5); // Perspective correction
          const t = sp * h * Math.cos(A) - st * Math.sin(A);
          
          // Compute screen coordinates
          const x = Math.floor(40 + 30 * D * (cp * h * Math.cos(B) - t * Math.sin(B)));
          const y = Math.floor(12 + 15 * D * (cp * h * Math.sin(B) + t * Math.cos(B)));
          const o = Math.floor(x) + WIDTH * Math.floor(y);  // Compute buffer index
          
          // Lighting calculation to make the donut shading dynamic
          const N = Math.floor(8 * ((st * Math.sin(A) - sp * ct * Math.cos(A)) * Math.cos(B) - 
                                    sp * ct * Math.sin(A) - st * Math.cos(A) - cp * ct * Math.sin(B)));
  
          // Update the buffer and z-buffer if the point is within the screen bounds
          if (y < HEIGHT && y >= 0 && x >= 0 && x < WIDTH && D > z[o]) {
            z[o] = D;
            b[o] = ".,-~:;=!*#$@"[N > 0 ? N : 0];  // Choose character based on lighting
          }
        }
      }
  
      // Output the frame to the console by joining the buffer into a string and adding line breaks
      console.log('\x1b[H' + b.join('').match(new RegExp(`.{${WIDTH}}`, 'g')).join('\n'));
  
      A += 0.04;  // Increment angle A for animation
      B += 0.02;  // Increment angle B for animation
    };
  
    setInterval(render, 50);  // Call the render function every 50ms
  };
  
  donut();
  