# Task Manager Web Application

This is a task manager web application developed using the MERN stack (MongoDB, Express.js, React.js, Node.js), aimed at providing users with efficient data management and a seamless user experience.

## Features

- **MERN Stack**: Utilized MongoDB as the database, Express.js for the backend, React.js for the frontend, and Node.js for server-side operations.
- **JWT Authentication**: Implemented JSON Web Token (JWT) authentication to secure user access, enhancing application security and privacy features.
- **Intuitive User Interface**: Designed an intuitive user interface with comprehensive task management functionalities, providing users with a streamlined task management experience.

## Getting Started

To run this application locally, follow these steps:

1. Clone this repository: `git clone <repository-url>`
2. Navigate to the project directory: `cd <repository-directory>`
3. Install dependencies for both the client and server:
   - For the client (React.js): `cd client && npm install`
   - For the server (Node.js/Express.js): `cd server && npm install`
4. Create a `.env` file in the `server` directory and add your MongoDB connection string and JWT secret:
   ```plaintext
   MONGODB_URI=<your-mongodb-connection-string>
   JWT_SECRET=<your-jwt-secret>
   ```
5. Start the server: `cd server && npm start`
6. Start the client: `cd client && npm start`
7. Open your web browser and visit `http://localhost:3000` to view the application.

## Usage

Once the application is running, users can:

- Sign up for an account or log in if they already have one.
- Create, edit, and delete tasks.
- Mark tasks as completed.
- View their task list.

## Contributing

Contributions are welcome! Please feel free to submit issues and pull requests.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgements

- This project was inspired by the need for a simple yet powerful task management application.
- Special thanks to the MERN stack community for providing valuable resources and support.
- Thanks to all contributors who helped improve this project.
