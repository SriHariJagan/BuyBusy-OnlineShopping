# 🌟 BuyBusy: Your One-Stop Online Shopping Solution! 🛒

Welcome to **BuyBusy**, an innovative online shopping/eCommerce website built with **React.js**. 
This project allows users to create accounts, sign in, manage their shopping cart, and effortlessly view their purchase history, all while ensuring a smooth and enjoyable shopping experience.

## 🎉 Project Overview

BuyBusy empowers users to engage in a seamless shopping journey:
- **Sign Up** and **Sign In** to create a personalized experience.
- **Manage Your Cart**: Add, remove, and adjust product quantities with ease.
- **Place Orders**: Complete purchases quickly and efficiently.
- **View Your History**: Keep track of all your past purchases anytime.

## 🚀 Features

- **User Authentication**: Secure signup and login.
- **Product Management**: Add multiple items to your cart effortlessly.
- **Quantity Control**: Adjust product quantities as needed.
- **Order History**: Access detailed records of past orders, including totals and timestamps.

## 🛠️ Setup Instructions

Follow these simple steps to get the BuyBusy application running on your local machine:

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   ```

2. **Navigate to the project directory:**
   ```bash
   cd BuyBusy
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Start the application:**
   ```bash
   npm start
   ```
   Open your browser and visit [http://localhost:3000](http://localhost:3000) to explore the app!

## 📁 Folder Structure

    ├── public/                   # Public directory
    │   ├── index.html            # Main HTML file
    │   └── favicon.ico           # Favicon
    │
    └── src/                      # Source code directory
        ├── Asserts/              # Static assets
        │   └── Images/           # Image assets
        │
        ├── Components/           # React components
        │   ├── Header/           # Header component
        │   ├── Items/            # Components for items
        │   │   ├── Cart/         # Cart-related components
        │   │   └── Product/      # Product-related components
        │   └── Spinner/          # Spinner component for loading
        │
        ├── Pages/                # Page components
        │   ├── Cart/             # Cart page component
        │   ├── Error/            # Error page component
        │   ├── Home/             # Home page component
        │   ├── Login/            # Login page component
        │   ├── Orders/           # Orders page component
        │   └── Signup/           # Signup page component
        │
        └── Store/                # Context store for state management

## 🗺️ API Routes

| Method | Route                        | Description                                       |
|--------|------------------------------|---------------------------------------------------|
| GET    | `/`                          | Renders the home page.                            |
| GET    | `/login`                     | Renders the login page.                           |
| GET    | `/signup`                    | Renders the signup page.                          |
| GET    | `/cart`                      | Renders the shopping cart page.                   |
| GET    | `/orders`                    | Renders the orders page.                          |


## ⚙️ Tools and Libraries

- **React.js**: A JavaScript library for building user interfaces.
- **Firebase Database**: Cloud-based database for persistent data storage.
- **ContextAPI**: Efficient state management for the application.
- **react-router-dom**: Navigation within the application.
- **react-toastify**: Notifications for user actions.
- **react-spinner**: Loading indicators for a better user experience.
- **CSS**: Styling for the application.

