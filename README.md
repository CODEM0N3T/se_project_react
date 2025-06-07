# WTWR — What to Wear (React + Vite)

WTWR (What to Wear) is a responsive React web application that suggests appropriate clothing based on current weather data. Users can view, add, and delete garments in a virtual wardrobe, toggle between Fahrenheit and Celsius, and navigate between the main feed and a profile page.

🌤 Features

Live Weather Integration: Automatically fetches weather data based on coordinates and recommends clothing for the day.

Temperature Unit Toggle: Users can switch between °F and °C.


Interactive Wardrobe:

View all clothing items suggested for the day’s weather.

Add new garments with an image, name, and weather category.

Preview garments in a modal by clicking on them.

Delete items with confirmation via a delete modal.

Profile Routing: Clicking the user’s name routes to a profile page that displays all their garments.


🖼 Screenshots



🔁 Temperature Toggle

![Screenshot (333)](https://github.com/user-attachments/assets/b782cb43-f173-4f7e-8e49-4a765c426ea3)

![Screenshot (334)](https://github.com/user-attachments/assets/28549761-d22a-46bf-9bce-a66429dd23bc)

👁️ Preview & Delete Modal

![Screenshot (346)](https://github.com/user-attachments/assets/0fb28d8c-0ae7-4212-a47a-f8adb2b2f1f4)

![Screenshot (347)](https://github.com/user-attachments/assets/2b2a86ce-ccf8-40f4-b03b-94a62ddb4c0a)

👕 Add Garment Modal

![Screenshot (348)](https://github.com/user-attachments/assets/0f9abf28-2796-4530-9c0e-624cdef6a1a9)

![Screenshot (350)](https://github.com/user-attachments/assets/adffa3be-9bc4-4e60-9d7c-770b22cde7ce)

👤 Profile Page

![Screenshot (351)](https://github.com/user-attachments/assets/fe7609d2-311a-43a9-8fe4-179099c9b7d5)


🛠 Tech Stack
Frontend: React, CSS

Routing: react-router-dom

State Management: React Hooks (useState, useEffect)

API: Custom Weather API & Clothing Item API

Context: Temperature unit context for toggling display units


📌 Future Improvements
User authentication

Support for multiple users

Mobile responsiveness

Drag-and-drop for clothing items


This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
