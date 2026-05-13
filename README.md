# Rayyan Aldhuhayan - Personal Portfolio

A premium, bilingual (Arabic & English) single-page portfolio designed for a Digital Media Specialist. Features a Deep Navy, White, and Premium Gold color palette with interactive scroll animations, a custom cursor, and an interactive Before & After image slider.

## Deployment to GitHub Pages

This project is fully static (HTML, CSS, JS) and optimized for GitHub Pages.

1. Initialize a git repository in this folder:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```
2. Create a new repository on GitHub (e.g., `rayyan-portfolio`).
3. Add the remote and push:
   ```bash
   git branch -M main
   git remote add origin https://github.com/iRayyanKoo/rayyan-portfolio.git
   git push -u origin main
   ```
4. On GitHub, go to **Settings** > **Pages**.
5. Under **Build and deployment**, set the Source to **Deploy from a branch**.
6. Select the `main` branch and `/ (root)` folder. Save.
7. Your site will be live at `https://iRayyanKoo.github.io/rayyan-portfolio/`.

## Structure
- `index.html`: Main page structure.
- `style.css`: All styling.
- `main.js`: Bilingual logic, slider interactivity, and animations.
- `assets/`: Directory for your real images and CV.
