# 🐙 GitHub Clone – MERN Stack Project

A full-stack **GitHub UI clone** built using the **MERN stack (MongoDB, Express, React, Node.js)** with **GitHub OAuth login** and a modern frontend styled with **Tailwind CSS**.

🌐 **Live Site** (Frontend): [https://codexdhruv11.github.io/GITHUB-CLONE](https://codexdhruv11.github.io/GITHUB-CLONE)

---

## 🚀 Features

- 🧑‍💻 GitHub OAuth Login via Passport.js
- 🗂️ User profile view & repo exploration (GitHub API)
- ⚛️ React + Vite frontend with Tailwind styling
- 🔐 Secure session handling with `express-session`
- 🌍 Fully deployed frontend using **GitHub Pages**

---

## 📦 Tech Stack

**Frontend:**
- React 18
- Vite
- Tailwind CSS
- React Router DOM
- React Icons + Hot Toasts

**Backend:**
- Node.js
- Express.js
- MongoDB with Mongoose
- Passport.js (GitHub strategy)
- Dotenv, CORS, Session

---

## 🛠️ Local Development

### ⚙️ Clone & Install

```bash
git clone https://github.com/codexdhruv11/GITHUB-CLONE.git
cd GITHUB-CLONE

# Install root & frontend dependencies
npm install
npm install --prefix frontend
````

### ▶️ Start the Backend

```bash
npm run dev
```

This runs `backend/server.js` using Nodemon.

### 💻 Start the Frontend

In a separate terminal:

```bash
cd frontend
npm run dev
```

---

## 🌐 GitHub OAuth Setup

1. Create an OAuth App at [GitHub Developer Settings](https://github.com/settings/developers)
2. Use:

   * Homepage: `http://localhost:5173`
   * Callback URL: `http://localhost:5000/api/auth/github/callback`
3. Add credentials to `.env` in root:

```
GITHUB_CLIENT_ID=your_id
GITHUB_CLIENT_SECRET=your_secret
CLIENT_BASE_URL=http://localhost:5173
```

---

## 🚀 Deploy Frontend to GitHub Pages

1. In `frontend/vite.config.js`:

```js
export default defineConfig({
  base: '/GITHUB-CLONE/',
  plugins: [react()],
});
```

2. In `frontend/package.json`:

```json
"homepage": "https://codexdhruv11.github.io/GITHUB-CLONE",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. Deploy:

```bash
cd frontend
npm install gh-pages --save-dev
npm run deploy
```

---

## 📁 Project Structure

```
GITHUB-CLONE/
├── backend/
│   └── server.js (OAuth + API)
├── frontend/
│   ├── src/
│   ├── index.html
│   ├── vite.config.js
│   └── ...
├── package.json (root – fullstack control)
├── .env
```

---

## 📄 License

This project is licensed under the MIT License.
Feel free to use or contribute!

---

## 🙌 Acknowledgements

* GitHub UI inspiration
* Vite + React ecosystem
* Passport.js for OAuth

````
