# ToDoList

ToDoList is a simple and intuitive web application designed to help users organize their daily tasks efficiently. It enables users to add, manage, and track tasks with ease.

## Features

- Add new and Edit tasks effortlessly.
- Delete tasks when no longer needed.
- User-friendly interface for seamless task management.

## Technologies Used

- **Frontend**: Vite, React.js, JavaScript
- **Styling**: CSS, Bootstrap
- **Development Tools**: Node.js, npm
- **Backend & Database**: Express.js, PostgreSQL

## Setup and Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/harshith1019/Todolist.git
   cd Todolist
   ```

2. **Install Dependencies**:
   Ensure you have Node.js and npm installed, then run:
   ```bash
   npm install
   ```

3. **Configure the API linking and Database**:
   Create a .env file in client:
   Configure VITE_API_URL = "" in .env
   ```bash
   cd client
   touch .env
   ```
   Create a .env file in server:
   Configure
   DB_USER, DB_PASSWORD, DB_PORT, DB_NAME in .env
   ```bash
   cd server
   touch .env
   ```
5. **Start the Application**:
   Launch the Frontend using:
   ```bash
   cd client
   npm run dev
   ```
6. **Start the Server**:
   Launch the development server using:
   ```bash
   cd server
   npm run dev
   ```
7. Open the app in your browser at the provided local development server URL.

## Deployment

The application can be deployed to platforms such as Vercel or GitHub Pages. Ensure the correct build settings are applied based on the platform.

## Live Demo

Check out the live version here: (Coming soon..)
---
