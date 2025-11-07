# SDP-1

## Project Overview
SDP-1 is a full-stack web application that combines a backend built with Node.js and a frontend developed using React. The project is designed to provide a robust and scalable solution for modern web development needs.

## Folder Structure

### Backend
The backend is located in the `backend/` directory and includes:
- `app.js`: Main application entry point.
- `db/`: Database connection logic.
- `model/`: Mongoose schemas for MongoDB.
- `router/`: Express routes for handling API requests.
- `package.json`: Backend dependencies.

### Frontend
The frontend is located in the `frontend/` directory and includes:
- `src/`: React source code.
  - `components/`: Reusable React components.
  - `Assets/`: Static assets like images and PDFs.
- `public/`: Public files like `index.html`.
- `package.json`: Frontend dependencies.

## Setup Instructions

### Prerequisites
- Node.js and npm installed on your system.
- MongoDB database running locally or in the cloud.

### Backend Setup
1. Navigate to the `backend/` directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file for environment variables (e.g., database connection string).
4. Start the backend server:
   ```bash
   npm start
   ```

### Frontend Setup
1. Navigate to the `frontend/` directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

## Usage
1. Open your browser and navigate to the frontend development server (usually `http://localhost:3000`).
2. Interact with the application as intended.

## Contributing
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch for your feature or bug fix:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes and push to your fork.
4. Open a pull request.

## License
This project is licensed under the [MIT License](LICENSE).