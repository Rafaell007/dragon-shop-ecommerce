# Dragon Shop — E-Commerce Platform

An e-commerce web application inspired by the real **TokyoTiger** store design, rebuilt from scratch with an improved UI/UX and enhanced visual aspects. Dragon Shop aims to deliver a clean, modern shopping experience with smooth animations and intuitive navigation.

> **Live Demo:** [dragon-shop-ecommerce.vercel.app](https://dragon-shop-ecommerce.vercel.app)

---

## About

Dragon Shop is a front-end e-commerce platform that simulates a real online store experience. The product data is fetched from the [DummyJSON](https://dummyjson.com) fake API. The project focuses on delivering a polished user interface with fluid animations and a responsive layout.

### Current Features

- **Cart Management** — add, remove, and update product quantities with persistent state via localStorage
- **Product Details** — dedicated product pages with images, descriptions, reviews, and related items
- **Category Filtering** — browse products by categories
- **Smooth Animations** — powered by GSAP and Motion for a premium feel
- **Responsive Design** — optimized for desktop and mobile viewports

### In Progress

- Bookmark system
- Searchbox with product suggestions
- Chatbot (customer service)
- Login & Registration forms
- Checkout flow with form validation

---

## Tech Stack

| Technology | Purpose |
|---|---|
| **React 19** | UI library |
| **Vite 7** | Build tool & dev server |
| **JavaScript (ES6+)** | Programming language |
| **CSS3** | Styling (BEM methodology) |
| **GSAP** | Scroll & entrance animations |
| **Motion** | Component transitions |
| **Embla Carousel** | Touch-friendly carousels |
| **Axios** | HTTP client for API requests |
| **React Router 7** | Client-side routing |
| **ESLint** | Code linting |

---

## Installation Guide

### Prerequisites

- **Node.js** (v18 or higher)
- **npm**

### Setup

```bash

git clone https://github.com/Rafaell007/dragon-shop-ecommerce.git


cd dragon-shop-ecommerce/app

npm install


npm run dev
```

The app will be available at `http://localhost:5173`.

### Build for Production

```bash
npm run build
npm run preview
```

---

## Demo

### Cart Management

![Cart Management](https://i.imgur.com/jRj7vii.gif)

### Product Details

![Product Details](https://i.imgur.com/scH7B8Z.gif)

### Category Filtering

![Category Filtering](https://i.imgur.com/7W17jkU.gif)

---

## License

This project is for educational and portfolio purposes ONLY. Design inspired by TokyoTiger.
