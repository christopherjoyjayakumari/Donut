🍩 Donut in C, Java & JavaScript
About the Project

This project is a fun, animated 3D spinning ASCII donut rendered entirely in the terminal. Originally inspired by a classic C donut animation created by Andy Sloane, this repository recreates the same logic in three different programming languages — C, Java, and JavaScript — as a tribute to both creativity and programming versatility.
🎯 Purpose

    ✅ To understand and implement mathematical rendering of 3D shapes using ASCII in multiple languages.

    ✅ To explore low-level graphics logic using basic math, loops, and characters.

    ✅ To practice cross-language translation of the same algorithm.

    ✅ To appreciate how each programming language handles arrays, loops, and system output.

🔧 Languages Used
Language	File Name	Purpose
C	donut.c	The original inspiration and the most efficient version.
Java	Donut.java	Object-oriented approach to the same logic with animation.
JavaScript	donut.js	Browser-independent, Node.js-based terminal animation.
🔍 How It Works

Each version of the program:

    Uses trigonometry (sine, cosine) to calculate a rotating torus (donut) shape in 3D.

    Projects the 3D points onto a 2D terminal screen using perspective division.

    Uses depth buffering (z-buffering) to render the nearest characters.

    Converts brightness into ASCII characters (.,-~:;=!*#$@) to simulate shading.

    Continuously updates the frame to animate the spinning donut.

🧠 Credits

    Original C donut algorithm by Andy Sloane – link to original blog

    Java and JavaScript versions adapted and rewritten by Christopher J, with bug fixes and enhancements to make them function smoothly in respective environments.

🚀 How to Run
C

gcc donut.c -o donut
./donut

Java

javac Donut.java
java Donut

JavaScript (Node.js required)

node donut.js

📌 Note

    Works best in terminals with monospaced fonts.

    This is a purely text-based rendering — no graphics or external libraries are used.

🙌 Why I Made This

As a passionate developer interested in low-level graphics, math, and cross-language exploration, I took up the challenge of understanding the original donut code and rewriting it in C, Java, and JavaScript. This project helped me appreciate how a single algorithm can be translated across paradigms and runtime environments.

Feel free to ⭐ star the repository if you enjoyed this nostalgic trip into ASCII art and programming creativity!
