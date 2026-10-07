# TaskFlow — Simple Task Manager

A clean and simple daily task manager built with React + Tailwind CSS.

## Features

- Add, complete and delete tasks
- Priority levels (Low / Medium / High)
- Filter: All / Active / Done
- Dark / Light mode
- Stats overview

## Concepts Used

- **Props** — data passed between components
- **useState** — tasks list and filter state
- **React Hook Form** — add task form
- **React Router** — basic routing
- Component-based architecture

## Getting Started

```bash
npm install
npm run dev
```

## Project Structure

```
src/
├── components/
│   ├── Header.jsx
│   ├── Stats.jsx
│   ├── TaskForm.jsx      ← React Hook Form
│   ├── TaskItem.jsx
│   ├── TaskList.jsx
│   └── ThemeToggle.jsx
├── context/
│   └── ThemeContext.jsx
├── pages/
│   └── Dashboard.jsx
├── App.jsx
├── main.jsx
└── index.css
```
