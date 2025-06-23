# 🐙 GitHub Clone

A **GitHub UI clone** built using **React**, **Vite**, and **Tailwind CSS**. This project mimics the GitHub interface and uses modern frontend tools and deployment via **GitHub Pages**.

![GitHub Pages Deployment](https://img.shields.io/badge/deployed-success-brightgreen)

🌐 **Live Demo:** [codexdhruv11.github.io/GITHUB-CLONE](https://codexdhruv11.github.io/GITHUB-CLONE)

---

## 🚀 Features

- 📁 GitHub-like layout and styling
- 🌙 Dark mode UI with Tailwind
- ⚛️ React Router for navigation
- 🧩 Component-based structure
- ⚡️ Vite for blazing fast build and dev
- 🛰️ Deployed to GitHub Pages

---

## 🛠️ Tech Stack

| Tool         | Description             |
|--------------|--------------------------|
| React        | UI Framework             |
| Vite         | Frontend build tool      |
| Tailwind CSS | Utility-first styling    |
| gh-pages     | Deployment tool          |

---

## 📦 Getting Started (Local Setup)

```bash
# Clone the repo
git clone https://github.com/codexdhruv11/GITHUB-CLONE.git
cd GITHUB-CLONE/frontend

# Install dependencies
npm install

# Run the development server
npm run dev
````

---

## 🌍 Deploying to GitHub Pages

### One-time setup:

1. Add this to `vite.config.js`:

```js
export default defineConfig({
  base: '/GITHUB-CLONE/',
  plugins: [react()],
})
```

2. Add to `package.json`:

```json
"homepage": "https://codexdhruv11.github.io/GITHUB-CLONE",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. Then run:

```bash
npm install gh-pages --save-dev
npm run deploy
```

---

## 📁 Project Structure

```
GITHUB-CLONE/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.jsx
│   ├── vite.config.js
│   └── package.json
└── backend/ (optional or future use)
```

---

## 🙏 Acknowledgements

* GitHub's UI/UX for inspiration
* Tailwind CSS for styling utilities
* Vite for modern tooling


