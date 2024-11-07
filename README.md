# BuyBusy-OnlineShopping

This project is a **React-based web application** that demonstrates Firebase Authentication, CRUD operations on the Firestore database, and routing with React Router. It utilizes the React Context API, `useState`, `useEffect`, and advanced hooks to manage authentication, product data, and cart operations. The app includes optimized UI/UX and an organized code structure with a focus on code readability, naming conventions, and comments.

---

## Features

### Authentication
- User registration and login using **Firebase Authentication**.
- Automatic login if the user is already authenticated on app mount.
- Error handling for authentication (invalid credentials, etc.).

### Firestore CRUD Operations
- **Create, Read, Update, Delete** functionality for cart items stored in Firestore.
- Products and orders data are retrieved on respective pages.
- State management using **React Context API** and asynchronous actions.

### Routing
- **React Router** is used for handling routing within the app.
- Dedicated routes for **Home**, **Cart**, **Orders**, **Login**, **Signup**, and **Error** pages.
  
### State Management and Hooks
- **React Context API** for global state management.
- **useState** and **useEffect** hooks for managing local state and side effects.
- **Async actions** for handling asynchronous data fetching and updates to Firestore.

---

## Technologies Used

- **React** - Front-end framework.
- **Firebase Authentication** - User authentication.
- **Firestore** - Database for storing and retrieving data.
- **React Router** - Navigation between routes.
- **React Context API** - For managing global state.
- **CSS Modules** - For styling components.
  
---

## Project Structure

Here’s the overall structure of the project:

```plaintext
├── public/
└── src/
    ├── Asserts/
    │   └── Images/           # Static image assets
    ├── Components/
    │   ├── Header/           # Header component
    │   ├── Items/
    │   │   ├── Cart/         # Cart item components
    │   │   └── Product/      # Product item components
    │   └── Spinner/          # Loading spinner component
    ├── Pages/
    │   ├── Cart/             # Cart page components
    │   ├── Error/            # Error page components
    │   ├── Home/             # Home page components
    │   ├── Login/            # Login page components
    │   ├── Orders/           # Orders page components
    │   └── Signup/           # Signup page components
    └── Store/                # Context API and state management
```

![image](https://github.com/user-attachments/assets/60f56859-d2b7-433b-bb9a-7e4e93528b37)


![image](https://github.com/user-attachments/assets/42c1955c-a0be-49ea-a84d-bd5c4f079846)
