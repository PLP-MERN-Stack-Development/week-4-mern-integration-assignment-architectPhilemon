# MERN Blog App

## 📌 Project Overview

A full-stack blog application built using the MERN (MongoDB, Express.js, React, Node.js) stack. It features user authentication, post creation/editing, category management, and image upload support. This project was built as part of the Power Learn Project GitHub Classroom assignment.

## 🧑‍💻 Author

**Philemon Mwendwa**

## ⚙️ Setup Instructions

### 📦 Backend Setup

```bash
cd server
npm install
cp .env.example .env
npm run dev
```

### 🌐 Frontend Setup

```bash
cd client
npm install
cp .env.example .env
npm run dev
```

Ensure MongoDB is running and configured properly in your `.env` file.

## 🔐 Environment Variables

### server/.env.example

```env
MONGODB_URI=mongodb+srv://philemon:254moh@cluster0.jca1pzk.mongodb.net/mern-blog?retryWrites=true&w=majority
PORT=5000
JWT_SECRET=your_jwt_secret
JWT_EXPIRATION=1d
CORS_ORIGIN=http://localhost:3000

```

### client/.env.example

```env
VITE_API_BASE_URL=http://localhost:5000
```

## 🧪 API Documentation

### 🔐 Auth Routes

* `POST /api/auth/register` — Register new user
* `POST /api/auth/login` — Login and receive token

### 📃 Post Routes

* `GET /api/posts` — Fetch all posts
* `GET /api/posts/:id` — Fetch single post
* `POST /api/posts` — Create new post *(requires token)*
* `PUT /api/posts/:id` — Update post *(requires token)*
* `DELETE /api/posts/:id` — Delete post *(requires token)*

### 📁 Category Routes

* `GET /api/categories` — List categories
* `POST /api/categories` — Create category *(requires token)*

## ✅ Features Implemented

* Full user registration & login system using JWT
* CRUD functionality for blog posts
* Image upload for posts
* Category creation and selection
* Responsive design
* Protected routes

## 🖼️ Screenshots

### 🔽 Home Page

![Home Screenshot](screenshot/Screenshot_2025-07-02_19-34-17.png)

### 🔽 Create Post Page

![Create Screenshot](screenshot/Screenshot_2025-07-02_19-36-04.png)



---

## 🧠 Notes

* Remember to never upload your actual `.env` files.
* Make sure to push commits regularly to reflect progress.
* All backend routes are prefixed with `/api`.

## 📚 License

This project was built for academic use under the Power Learn Project initiative.

---

Happy blogging! 🚀
