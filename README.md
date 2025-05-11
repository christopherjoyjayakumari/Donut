# 🍩 Donut in C, Java & JavaScript

### A 3D Spinning ASCII Donut Across Languages – For Fun & Learning

---

## 📖 About the Project

This project is a fun, animated **3D ASCII donut** rendered entirely in the terminal. It was originally inspired by a C implementation from [Andy Sloane](https://www.a1k0n.net/2011/07/20/donut-math.html), which visualizes a rotating torus using basic math and character buffers.

As a personal challenge, I recreated the same logic in **C**, **Java**, and **JavaScript** to:
- Understand how terminal graphics work using only math.
- Practice translating logic across different programming languages.
- Appreciate how various languages handle **math, memory**, and **I/O operations** differently.

---

## 🎯 Purpose

- ✅ **Understand mathematical rendering** of 3D shapes using ASCII characters.
- ✅ **Explore low-level graphics** using basic trigonometry, loops, and buffer arrays.
- ✅ **Practice algorithm translation** between C, Java, and JavaScript.
- ✅ **Compare language paradigms**, especially procedural (C), object-oriented (Java), and event-driven scripting (JavaScript).

---

## 🔧 Languages & Files

| Language     | File Name    | Description                                                             |
|--------------|--------------|-------------------------------------------------------------------------|
| C            | `donut.c`    | The original and most efficient version based on Andy Sloane’s logic.   |
| Java         | `Donut.java` | An object-oriented translation with terminal animation support.         |
| JavaScript   | `donut.js`   | A Node.js terminal version, independent of browsers and GUIs.           |

---

## 🔍 How It Works (Deep Dive)

Each version of this program simulates a rotating **torus** (donut) using the following steps:

### 🧮 1. Torus Geometry – Parametric Equations

A torus is defined using two angles:
- **θ (theta):** around the tube (small radius)
- **φ (phi):** around the center circle (large radius)

```math
x = (R + r * cos(θ)) * cos(φ)
y = (R + r * cos(θ)) * sin(φ)
z = r * sin(θ)


### 🎥 2. Rotation in 3D

To animate the donut, we apply **rotation matrices** on the 3D coordinates around the X and Z axes:

```math
y' = y * cos(A) - z * sin(A)
z' = y * sin(A) + z * cos(A)
x' = x * cos(B) - y' * sin(B)
y'' = x * sin(B) + y' * cos(B)
```

### 👁 3. Perspective Projection

To render the 3D points on a 2D screen, we use a basic **perspective projection**:

```math
x_proj = screen_center_x + scale_factor * x / z
y_proj = screen_center_y + scale_factor * y / z
```

This gives the illusion of depth as objects farther away appear smaller.

### 🧱 4. Z-Buffering (Depth Handling)

A **z-buffer** (depth array) is used to track the closest surface for each pixel/character. If the new point is closer to the viewer, it's drawn; otherwise, it's skipped.

### 💡 5. Lighting and Shading

Using the surface normal and a fixed light direction, we calculate the **brightness** and map it to a character from a set:

```
" .,-~:;=!*#$@"
```

This simulates shading to give a 3D appearance with only text.

---

## 🚀 How to Run

### ⚙️ C

```bash
gcc donut.c -o donut
./donut
```

### ☕ Java

```bash
javac Donut.java
java Donut
```

### 🌐 JavaScript (Node.js required)

```bash
node donut.js
```

> 💡 Tip: Use a terminal with **monospaced fonts** for best visual results.

---

## 🙏 Credits

* Original algorithm by **Andy Sloane**: [Donut Math Blog](https://www.a1k0n.net/2011/07/20/donut-math.html)
* Converted and adapted to **Java** and **JavaScript** by **Christopher J** (me), with guidance and explanations via **ChatGPT**.
* This project is a tribute to the mathematical beauty of ASCII art and low-level animation.

---

## 📌 Notes

* No external libraries or graphics frameworks were used — everything is done with **math and characters**.
* Works in most Unix-like terminals. On Windows, use a terminal emulator that supports ANSI escape codes for best results.

---

## 🙌 Why I Made This

As a developer fascinated by **math, graphics, and cross-language experimentation**, I took this challenge to:

* Learn how different languages handle computational tasks.
* Deepen my understanding of **3D math**, rendering, and buffer manipulation.
* Experience the joy of making something purely visual using just **code and logic**.

If you enjoy quirky, educational, and nostalgic programming experiments, give this repo a ⭐️ and try running it yourself!

---

## 🔗 Let’s Connect

Feel free to reach out or connect with me on [LinkedIn](#) to talk more about code, math, or creative tech experiments.

---

```

Would you like me to help you write a short version of this for your **LinkedIn post**, linking back to your GitHub repository?
```
