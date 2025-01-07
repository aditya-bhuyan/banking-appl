

# Banking Application - Node.js + Angular Fullstack

## Project Name and Description

**Banking Application** is a full-stack project built with **Node.js** and **Angular** to simulate a basic banking system. The application allows the creation of customers and bank accounts (Personal, Corporate, etc.), and supports various banking operations such as credit/debit transactions, account statements, and more. This project uses **MongoDB** for data storage and demonstrates how to create a RESTful API with Node.js/Express and a frontend with Angular.

---

## List of Files and Their Use

### Backend:
1. **`app.js`**: Main entry point for the backend application. Sets up the Express server and routes.
2. **`models/`**:
    - **`customer.js`**: Defines the Customer schema for MongoDB.
    - **`account.js`**: Defines the Account schema for MongoDB.
    - **`transaction.js`**: Defines the Transaction schema for MongoDB.
3. **`controllers/`**:
    - **`customerController.js`**: Handles customer-related operations (create, get all, etc.).
    - **`accountController.js`**: Handles account-related operations (create, get, etc.).
    - **`transactionController.js`**: Handles transaction-related operations (credit, debit, statement).
4. **`routes/`**:
    - **`customerRoutes.js`**: Defines routes for customer-related API endpoints.
    - **`accountRoutes.js`**: Defines routes for account-related API endpoints.
    - **`transactionRoutes.js`**: Defines routes for transaction-related API endpoints.
5. **`services/`**:
    - **`customerService.js`**: Handles business logic for customer-related operations.
    - **`accountService.js`**: Handles business logic for account-related operations.
    - **`transactionService.js`**: Handles business logic for transaction-related operations.
6. **`middleware/`**:
    - **`authMiddleware.js`**: Manages JWT authentication and authorization.
7. **`config/`**:
    - **`dbConfig.js`**: MongoDB database connection configuration.
8. **`package.json`**: Node.js project configuration file that defines dependencies, scripts, and metadata.
9. **`.gitignore`**: Specifies files and directories to be ignored by Git (e.g., node_modules, logs, etc.).

### Frontend:
1. **`src/app/`**:
    - **`app.component.ts`**: Main component, which contains the navigation and routing logic.
    - **`customer.component.ts`**: Displays customer-related views.
    - **`account.component.ts`**: Displays account-related views.
    - **`transaction.component.ts`**: Displays transaction-related views.
2. **`angular.json`**: Angular project configuration file.
3. **`package.json`**: Defines the Angular project's dependencies, scripts, and settings.
4. **`README.md`**: This file, which provides an overview of the project.

---

## Prerequisites

1. **MongoDB**: You need a running instance of MongoDB to store application data. You can either set up a local MongoDB server or use MongoDB Atlas for a cloud-based database.
2. **Node.js and npm**: The backend requires Node.js to run the application. Install the latest version of Node.js and npm from the official website.
3. **Angular CLI**: The frontend is built with Angular. Install Angular CLI globally via npm:
   ```bash
   npm install -g @angular/cli
   ```

---

## Workflow

The workflow of this application can be described in the following stages:

1. **URLs**:
    - `/api/customers`: API endpoint to manage customer-related operations (e.g., create customer).
    - `/api/accounts`: API endpoint to manage accounts (e.g., create an account, get account details).
    - `/api/transactions`: API endpoint for transaction operations (e.g., credit, debit, get statement).

2. **Files**:
    - API routes defined in `customerRoutes.js`, `accountRoutes.js`, and `transactionRoutes.js` handle the communication between the frontend and backend.
    - These routes correspond to the respective controllers (`customerController.js`, `accountController.js`, `transactionController.js`) that manage the logic of each operation.

3. **Thymeleafs (Frontend)**:
    - The frontend is implemented using **Angular**, and the user interacts with the application through Angular components (`customer.component.ts`, `account.component.ts`, etc.) and services that communicate with the backend via HTTP requests.

---

## How to Start, Test, Build, and Run

### 1. **Clone the repository**:
   ```bash
   git clone https://github.com/aditya-bhuyan/banking-appl.git
   cd banking-appl
   ```

### 2. **Backend (Node.js)**:
- Install the backend dependencies:
  ```bash
  cd backend
  npm install
  ```
- Create a `.env` file to configure sensitive information like your MongoDB connection string.
- To start the backend server in development mode (using `nodemon` for auto-reload):
  ```bash
  npm run dev
  ```
- The backend server will start on `http://localhost:5000`.

### 3. **Frontend (Angular)**:
- Install the frontend dependencies:
  ```bash
  cd frontend
  npm install
  ```
- To start the frontend development server:
  ```bash
  ng serve
  ```
- The frontend will be available at `http://localhost:4200`.

### 4. **To build the application**:
- For backend:
  ```bash
  npm run build
  ```
- For frontend:
  ```bash
  ng build --prod
  ```

---

## Project License

This project is licensed under the **GNU General Public License v3.0**.

### Maintainer:

**Aditya Pratap Bhuyan**
- [LinkedIn Profile](https://linkedin.com/in/adityabhuyan)

---

