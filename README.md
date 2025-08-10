# Wanderlust
**Uncover Unique Stays and Experiences: Your Gateway to Global Adventures**

[![Build Issues](https://img.shields.io/badge/build-passing-brightgreen)](https://github.com/rohan-019/Wanderlust-310dc33)
[![Contributions Welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg)](https://github.com/rohan-019/Wanderlust-310dc33/blob/main/CONTRIBUTING.md)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

## Table of Contents
- [⭐ Overview](#-overview)
- [✨ Key Features](#-key-features)
- [🛠️ Tech Stack & Architecture](#️-tech-stack--architecture)
- [🚀 Getting Started](#-getting-started)
- [🔧 Usage](#-usage)
- [🤝 Contributing](#-contributing)
- [📝 License](#-license)

## ⭐ Overview

Wanderlust is a dynamic web application designed to connect users with unique listings, fostering a vibrant community of explorers and hosts. It provides a comprehensive platform for discovering, managing, and reviewing distinctive accommodations and experiences worldwide.

### The Problem
The modern traveler often seeks authentic, personalized experiences beyond conventional hotel bookings, but existing platforms can be cluttered, lack a community feel, or make it challenging to find genuinely unique stays. Hosts, too, require an intuitive platform to showcase their properties and connect with a like-minded audience.

### The Solution
Wanderlust addresses these challenges by offering a streamlined, user-friendly interface for both discovering and listing exceptional properties. It empowers users to share their adventures through a robust review system and provides hosts with the tools to effortlessly manage their listings, creating a trusted and engaging ecosystem for the global travel community.

### Architecture
This project is built as a robust Node.js Express MVC (Model-View-Controller) application. It leverages MongoDB for scalable data persistence, EJS for dynamic server-side rendering, and integrates cloud services like Cloudinary for efficient media storage. The architecture promotes modularity, separation of concerns, and ease of development, making it a scalable and maintainable platform.

## ✨ Key Features

- **🔐 Secure User Authentication & Authorization**: Implements robust user registration, login, and session management using Passport.js, ensuring secure access to personalized features and content. Users can sign up, log in, and manage their profiles.

- **📝 Comprehensive Listing Management**: Provides full CRUD (Create, Read, Update, Delete) capabilities for listings. Users can create new listings with detailed information and images, view extensive details of existing listings, and edit or remove their own published content.

- **⭐ Dynamic Review System**: Integrates a powerful review functionality, allowing users to submit ratings and textual reviews for listings. This feature fosters community interaction and provides valuable feedback for both hosts and potential guests.

- **☁️ Cloud-based Image Uploads**: Seamlessly handles image uploads for listings using Multer and Cloudinary, ensuring efficient storage, optimization, and delivery of high-quality media content globally.

- **🎨 Intuitive UI with EJS Templating**: Utilizes EJS (Embedded JavaScript) and ejs-mate for server-side rendering, enabling a consistent and responsive user experience across all pages with a unified layout system.

- **💬 Flash Notifications**: Incorporates connect-flash to provide timely and informative messages to users following actions (e.g., successful login, listing creation, error alerts), enhancing user feedback and experience.

## 🛠️ Tech Stack & Architecture

| Technology | Purpose | Why it was Chosen |
|------------|---------|-------------------|
| **Node.js** | Server-side JavaScript Runtime Environment | For its high performance, non-blocking I/O model, and extensive package ecosystem. |
| **Express.js** | Web Application Framework | Provides a robust, minimalist framework for building scalable web applications and APIs. |
| **MongoDB / Mongoose** | NoSQL Database / ODM (Object Data Modeling) | Offers flexible, scalable data storage and an intuitive API for interacting with MongoDB. |
| **EJS (Embedded JS)** | Templating Engine | Enables server-side rendering of dynamic HTML content, simplifying UI development. |
| **Cloudinary** | Cloud Media Management Platform | For efficient, scalable, and secure storage, optimization, and delivery of images. |
| **Passport.js** | Authentication Middleware | Provides flexible and modular authentication strategies for Node.js applications. |
| **connect-flash** | Session-based Flash Messages | Simple, effective way to display one-time messages to users after redirects. |
| **method-override** | HTTP Method Override Middleware | Enables the use of PUT and DELETE HTTP methods in forms where only POST/GET are supported. |

## 🚀 Getting Started

To get Wanderlust up and running on your local machine, follow these steps:

### Prerequisites
Ensure you have the following installed:
- **Node.js**: v22.11.0 (as specified in package.json). Download from [nodejs.org](https://nodejs.org/).
- **MongoDB**: A running instance of MongoDB. You can download it from [mongodb.com](https://www.mongodb.com/) or use a cloud service like MongoDB Atlas.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/rohan-019/Wanderlust-310dc33.git
   cd rohan-019-Wanderlust-310dc33
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env` file in the root directory of the project and add the following variables. Replace the placeholder values with your actual credentials and connection strings:
   ```env
   DB_URL="YOUR_MONGODB_CONNECTION_STRING"
   SECRET="YOUR_EXPRESS_SESSION_SECRET"
   CLOUDINARY_CLOUD_NAME="YOUR_CLOUDINARY_CLOUD_NAME"
   CLOUDINARY_API_KEY="YOUR_CLOUDINARY_API_KEY"
   CLOUDINARY_API_SECRET="YOUR_CLOUDINARY_API_SECRET"
   ```
   
   **Notes:**
   - You can obtain Cloudinary credentials by signing up at [cloudinary.com](https://cloudinary.com/).
   - For `DB_URL`, if using local MongoDB, it might be `mongodb://localhost:27017/wanderlust`. For MongoDB Atlas, use the provided connection string.
   - `SECRET` should be a strong, random string for session encryption.

4. **Seed Initial Data (Optional):**
   To populate your database with sample listings, navigate to the init directory and run the index.js script:
   ```bash
   node init/index.js
   ```
   This will insert the data defined in `init/data.js` into your MongoDB instance.

## 🔧 Usage

Once the installation and configuration are complete, you can start the Wanderlust application:

1. **Start the server:**
   From the project's root directory, run:
   ```bash
   node app.js
   ```

2. **Access the application:**
   Open your web browser and navigate to `http://localhost:8080` (or the port configured in app.js if different).

You can now register a new user, log in, explore existing listings, or create your own unique accommodations and experiences!

## 🤝 Contributing

We welcome contributions to Wanderlust! If you have suggestions for improvements, new features, or bug fixes, please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

Please ensure your code adheres to the project's existing style and includes relevant tests if applicable.

## 📝 License

Distributed under the ISC License. See `package.json` for more information.

---

<div align="center">
  <p>Made with ❤️ for the global travel community</p>
  <p>
    <a href="#table-of-contents">Back to top</a>
  </p>
</div>
