# jade-mills-tech-demo# Jade Mills Tech Demo

A modern, responsive real estate website demo—built as a technical showcase inspired by the design, effects, and polish of [jademillsestates.com](https://jademillsestates.com/).  
This project is **NOT affiliated with Jade Mills Estates**; it’s a personal portfolio and learning demo.

---

## 🌟 What’s This Project?

This site is a professional-grade real estate landing page built with React and Vite.  
It’s packed with smooth animations, background video, a responsive slider, and clean, seasonal (fall-inspired) visuals—all using **dummy content**.  
Perfect for showing off your ability to clone high-end website features and UI effects.

---

## ✨ Features

- **Full-Screen Hero Section** with background video and overlay text
- **Responsive Navigation Bar** with hamburger menu for mobile
- **Scroll-triggered Animations** using [AOS](https://michalsnik.github.io/aos/)
- **Listings Carousel** powered by [Swiper.js](https://swiperjs.com/)
- **About/Press Section** with logo bar
- **Contact Form** (demo, no backend)
- **Seasonal Fall Theme** using PNG overlays and warm color palette
- **Easy to Customize**: Swap out images, text, or sections for any purpose

---

## 🛠️ Tech Stack

- **React** (with Vite for fast development)
- **CSS Modules** for modular styles
- **Swiper.js** for carousels
- **AOS** for scroll-in animations
- **Plain CSS** (no frameworks, but easy to add Tailwind/Bootstrap if needed)

---

## 🚀 Quick Start

1. **Clone this repo**

   ```bash
   git clone https://github.com/YOUR_USERNAME/jade-mills-tech-demo-1.git
   cd jade-mills-tech-demo-1


Install dependencies

npm install

Add a Background Video and PNG Assets

Download a royalty-free MP4 video (example: Pexels Videos)
Place it in the public/ folder as bg-video.mp4.

Place your chosen PNG overlays (fall leaves, etc.) in public/images/

Run the development server

npm run dev

 Project Structure
 
jade-mills-tech-demo-1/
├─ public/
│   ├─ bg-video.mp4
│   ├─ logo.png
│   └─ images/
├─ src/
│   ├─ components/
│   │   ├─ Navbar.jsx
│   │   ├─ Hero.jsx
│   │   ├─ About.jsx
│   │   ├─ Listings.jsx
│   │   ├─ Contact.jsx
│   │   └─ Footer.jsx
│   ├─ App.jsx
│   ├─ main.jsx
│   ├─ App.css
│   └─ index.css
├─ package.json
└─ vite.config.js

