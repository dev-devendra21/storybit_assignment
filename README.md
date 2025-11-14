# Storybit – Frontend Assignment (Next.js 16)

A frontend movie listing web application built as part of the **First Skill** assignment. This project uses modern Next.js 16 features, React 19, and TailwindCSS 4.

---

## 🚀 Tech Stack

| Technology      | Version |
| --------------- | ------- |
| **Next.js**     | 16.0.3  |
| **React**       | 19.2.0  |
| **React DOM**   | 19.2.0  |
| **TailwindCSS** | 4.x     |
| **TypeScript**  | 5.x     |

---

## 📂 Project Structure

```
app/
│── components/
│── movie/[id]/
│── popular/
│── top-rated/
│── upcoming/
│── error.tsx
│── favicon.ico
│── globals.css
│── layout.tsx
│── page.tsx
│
lib/
node_modules/
public/
types/
.env.local
next.config.ts
package.json
postcss.config.mjs
tailwind.config.ts
tsconfig.json
```

### Key Folders

- **app/** → Main routes using the App Router
- **components/** → Reusable UI components
- **lib/** → API utilities and helper functions
- **types/** → TypeScript interfaces and type definitions
- **public/** → Static assets

---

## 📡 API Integration (TMDB)

This project uses **The Movie Database (TMDB)** API to fetch movie data.

### Add your API key inside `.env.local`:

```
TMDB_API_KEY=your_v4_api_token_here
```

> Note: Use the **v4 Bearer token**, not v3.

### Example Fetch Function

```
export async function fetchPopular() {
  const res = await fetch(`${BASE}/movie/popular`, {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  });
  if (!res.ok) throw new Error("Failed to fetch");
  return res.json();
}
```

---

## 🧱 Features

- Popular, Top Rated, and Upcoming movie pages
- Dynamic movie details page using route params `/movie/[id]`
- Next.js 16 App Router architecture
- Fully responsive UI using TailwindCSS 4
- Clean folder structure
- Error handling using `error.tsx`
- Optimized images using `next/image`

---

## ▶️ Getting Started

#### 1️⃣ Install dependencies

```
npm install
```

#### 2️⃣ Run the app

```
npm run dev
```

The project will be available at:

```
http://localhost:3000
```

---

## 🏗️ Build for Production

```
npm run build
npm start
```

---

## 📄 License

This project is created for assignment purposes and is free for personal use.
