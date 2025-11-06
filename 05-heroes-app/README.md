# 🦸‍♂️ Heroes App | Character Showcase

Heroes App is a responsive and interactive web application designed to explore, search, and display detailed information about fictional characters and heroes. The project demonstrates modern React development practices with a focus on clean architecture, reusable UI components, efficient state and data handling, and TypeScript-based maintainability.

This project was developed as part of the course **“React: De cero a experto - Edición 2025”** by **Fernando Herrera** on Udemy.

---

## ✨ Features

- **Dynamic Routing:** Character-specific pages implemented using React Router.
- **Real-Time Search:** Optimized search functionality for fast filtering.
- **Modern Data Management:** Server state efficiently synchronized via **TanStack Query**.
- **Fully Responsive Interface:** Built with **Tailwind CSS** and **shadcn/ui** components.
- **Type-Safe Codebase:** Developed using **TypeScript** for reliability and scalability.

---

## 🛠️ Tech Stack

| Category        | Technology                | Description |
|----------------|---------------------------|-------------|
| Build Tool     | **Vite**                   | Fast and optimized development environment. |
| Framework      | **React + TypeScript**     | UI library with strict typing for maintainability. |
| Styling        | **Tailwind CSS**           | Utility-first styling approach. |
| UI Components  | **shadcn/ui**              | Accessible, theme-friendly components. |
| Routing        | **React Router DOM**       | Client-side routing and navigation. |
| Data Layer     | **TanStack Query**         | Server cache and async data orchestration. |
| HTTP Client    | **Axios**                  | Promise-based request client. |
| Testing        | **Vitest + Testing Library** | Unit and integration testing support. |

---

## 🔗 Required Backend Service

This application **depends on an external backend** for retrieving hero data.

- **Backend Repository:** `https://github.com/Jommp/react-2025-fernando-herrera-udemy/tree/main/06-nest-heroes-backend`

Before running this application, **you must clone and run the backend**.  
The backend repository provides its own setup instructions.

---

## 🔧 Environment Variables

Create a `.env` file in the project root and define:

```env
VITE_API_BASE_URL=<YOUR_BACKEND_BASE_URL>

Example
VITE_API_BASE_URL=http://localhost:3000/api

---

## ⚙️ Installation & Local Setup

### Requirements
- Node.js 18+
- One of the following package managers:
-- npm
-- yarn
-- bun (used in this project)
- Backend service runing locally or remotely

## Setup Steps
# 1. Clone the repository
git clone https://github.com/Jommp/react-2025-fernando-herrera-udemy/tree/main/05-heroes-app
cd 05-heroes-app

# 2. Create and configure your .env file
# Refer to the environment variable section above

# 3. Install dependencies
# Using Bun (recommended)
bun install

# Or using npm
npm install

# Or using Yarn
yarn install

# 4. Run the development server
# Using Bun
bun run dev

# Or npm
npm run dev

# Or Yarn
yarn dev

The application will be available at:
http://localhost:5173

---

## 🧪 Running Tests

# Using Bun
bun test

# Using npm
npm run test

# Using Yarn
yarn test

---

## 👤 Author

José María Martínez (Chema)
GitHub: https://github.com/Jommp
LinkedIn: https://www.linkedin.com/in/jommp/

Course Reference: React: De cero a experto - Edición 2025 - Fernando Herrera
Made with ❤️, React, and TypeScript.