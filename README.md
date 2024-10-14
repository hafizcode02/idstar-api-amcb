# AMCB API
<p>Assign Module CoderByte API by Job Name</p>

This project is an Express.js API built with TypeScript, using Prisma as the ORM, Zod for validation, and JWT for authentication.

## Prerequisites

Before you begin, ensure you have the following installed on your system:
- Node.js (v14 or later)
- npm (usually comes with Node.js)
- MySQL (or your preferred database supported by Prisma)

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/hafizcode02/idstar-api-amcb.git
   cd idstar-api-amcb
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up your environment variables:
   - Copy the `.env-example` file to `.env`
   - Update the `.env` file with your database connection string and JWT secret:
     ```
     DATABASE_URL="postgresql://username:password@localhost:5432/your_database_name"
     JWT_SECRET="your-secret-key"
     JWT_EXPIRES_IN="1d"
     PORT=3003
     ```

4. Set up the database:
   - Run Prisma migrations to create your database schema:
     ```
     npx prisma migrate dev
     ```
   - (Optional) Seed the database with initial data:
     ```
     npx prisma db seed
     ```

## Running the Application

- For development:
  ```
  npm run dev
  ```

- For production:
  ```
  npm run build
  npm start
  ```

The server will start on `http://localhost:3003` (or the port specified in your environment variables).
