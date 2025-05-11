# 🍩 Donut in C, Java & JavaScript

### A 3D Spinning ASCII Donut Across Languages – For Fun & Learning

---

## 📖 About the Project

This is a fun, animated **3D ASCII donut** rendered in the terminal. It was originally inspired by a C implementation from [Andy Sloane](https://www.a1k0n.net/2011/07/20/donut-math.html), visualizing a rotating torus using pure math and character buffers.

As a personal challenge, I recreated the logic in **C**, **Java**, and **JavaScript** to:

- Understand how terminal graphics work using only math.
- Practice translating logic across different programming languages.
- Appreciate how various languages handle **math, memory**, and **I/O** differently.

---

## 🎯 Purpose

- ✅ Understand mathematical rendering of 3D shapes using ASCII.
- ✅ Explore low-level graphics with basic trigonometry and buffers.
- ✅ Practice algorithm translation between languages.
- ✅ Compare language paradigms (procedural, OOP, scripting).

---

## 🔧 Languages & Files

| Language   | File Name     | Description                                                        |
|------------|---------------|--------------------------------------------------------------------|
| C          | `donut.c`     | The original and most efficient version (Andy Sloane’s logic).     |
| Java       | `Donut.java`  | Object-oriented translation with animation in terminal.            |
| JavaScript | `donut.js`    | Node.js-based terminal version, runs without a browser or GUI.     |

---

## 🔍 How It Works

### 🧮 1. Torus Geometry

Using parametric equations with angles θ and φ:

x = (R + r * cos(θ)) * cos(φ)
y = (R + r * cos(θ)) * sin(φ)
z = r * sin(θ)


---

### 🎥 2. Rotation

3D rotation applied around X and Z axes using rotation matrices.

---

### 👁 3. Perspective Projection

Converts 3D coordinates to 2D screen space:

x_proj = screen_center_x + scale * x / z
y_proj = screen_center_y + scale * y / z


---

### 🧱 4. Z-Buffering

Keeps track of the closest point per pixel for depth management.

---

### 💡 5. Lighting & Shading

Brightness is computed with surface normals and mapped to characters:

" .,-~:;=!*#$@"


---

## 🚀 How to Run

### ⚙️ C

```bash
gcc donut.c -o donut
./donut

☕ Java

javac Donut.java
java Donut

🌐 JavaScript (Node.js)

node donut.js

    💡 Use a terminal with monospaced fonts for best visual results.

🙏 Credits

    Original logic by Andy Sloane – Donut Math

    Ported to Java and JavaScript by Christopher J

    Supported with guidance from ChatGPT

📌 Notes

    No external libraries or graphics engines used.

    Best experienced in Unix-like terminals (Windows users: use ANSI-compatible emulators).

🙌 Why I Made This

As someone passionate about math, graphics, and programming, this project helped me:

    Deepen my understanding of 3D math and rendering.

    Improve logic translation between different paradigms.

    Have fun building something visual purely with code.
