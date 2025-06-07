# 🛠️ Skip Hire Selector UI

A simple and responsive web application that helps users choose the right skip size for their needs.

[🌐 Live Demo](https://skip-hire-selector-ui.netlify.app/)

---

## 📋 Overview

The **Skip Hire Selector UI** allows users to view and compare available skip sizes. It's structured as a clean React-based UI with a component-based architecture and dynamic rendering of data fetched from an API.

---

## 🚀 Features

- 🔹 **Responsive Design** using CSS media queries
- 🔹 **Component-Based Architecture** with reusable elements
- 🔹 **Environment Variable Support** using `.env` files
- 🔹 Clean layout with intuitive user experience

---

## 🛠️ How It's Built

The application is built using **React** and deployed via **Netlify**. Here's a high-level breakdown of the structure and logic:

### 🧱 Page Structure

- **Header Component**  
  Displays the site’s title or branding at the top.

- **SkipList Component**  
  Responsible for rendering a list of skips. It:
  - Reads an array of skip objects (fetched from the API)
  - Renders individual `SkipItem` components
  - Passes the appropriate props to each `SkipItem`

- **SkipItem Component**  
  Displays specific information about a single skip (e.g., size, price, description).

---

## 📦 API Integration

- The application fetches skip data from an external API.
- The base URL for the API is stored in a `.env` file using a variable like:

  ```env
  REACT_APP_SKIP_DATA=https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft

- Since the API URL is the same for both development and production, only a single .env file is used.
- In future iterations, environment-specific files like .env.development and .env.production can be introduced if needed.
