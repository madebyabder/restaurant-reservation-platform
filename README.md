# Resto Reservation App

A full-stack restaurant reservation platform built with React (frontend) and Node.js + Express + MySQL (backend).

## Features

- Modern, responsive React frontend for customers to make reservations
- Node.js/Express backend API for handling reservation logic
- MySQL database for persistent storage of reservations and client information
- Transaction-safe reservation and client creation
- Easy local development and deployment

## Demo

<!-- Add a screenshot of your app if available -->
<!-- ![screenshot](client/public/screenshot.png) -->

## Getting Started

### Prerequisites

- Node.js (v14+ recommended)
- npm
- MySQL

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/resto-reservation-app.git
   cd resto-reservation-app
   ```

2. **Install dependencies for both client and server:**
   ```bash
   cd client
   npm install
   cd ../server
   npm install
   ```

3. **Configure MySQL:**
   - Create a database named `db_resto`.
   - Update MySQL credentials in `server/server.js` if needed.

4. **Run the backend server:**
   ```bash
   cd server
   node server.js
   ```

5. **Run the frontend app:**
   ```bash
   cd ../client
   npm start
   ```

6. **Open your browser:**
   - Frontend: [http://localhost:3000](http://localhost:3000)
   - Backend API: [http://localhost:5000](http://localhost:5000)

## Project Structure

```
resto-reservation-app/
├── client/      # React frontend
├── server/      # Node.js + Express backend
├── package.json # Project-level scripts/dependencies
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.

---
