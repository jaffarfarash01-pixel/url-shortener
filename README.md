# URL Shortener

A simple and efficient URL Shortener web application built using **Node.js, Express.js, MongoDB, and JavaScript**.

This project was developed as part of the **CodeAlpha Backend Development Internship – Task 1**.

The application allows users to enter a long URL and generate a unique short URL. The short URL is stored in MongoDB and redirects users to the original URL when accessed.

---

## Features

* Create short URLs from long URLs
* Generate unique 6-character short codes using Nano ID
* Store URL mappings in MongoDB
* Redirect short URLs to their original URLs
* REST API using Express.js
* Simple frontend interface
* MongoDB database integration
* Environment variables for database configuration
* CORS support
* Automatic server restart during development using Nodemon

---

## Tech Stack

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* Nano ID
* dotenv
* CORS

### Frontend

* HTML5
* CSS3
* JavaScript

### Development Tools

* Visual Studio Code
* MongoDB / MongoDB Compass
* Postman
* Git
* GitHub
* Nodemon

---

## How It Works

The URL shortening process works as follows:

```text
User enters a long URL
        ↓
Frontend sends URL to Express API
        ↓
Express generates a unique short code
        ↓
URL and short code are stored in MongoDB
        ↓
Short URL is returned to the user
        ↓
User opens the short URL
        ↓
Express finds the URL in MongoDB
        ↓
User is redirected to the original URL
```

For example:

```text
Original URL:
https://www.google.com

Generated Short URL:
http://localhost:5000/7PyR38
```

When the user opens the short URL, the application redirects them to the original URL.

---

## Project Structure

```text
url-shortener/
│
├── backend/
│   ├── models/
│   │   └── Url.js
│   │
│   ├── routes/
│   │   └── urlRoutes.js
│   │
│   └── server.js
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

---

## Backend Structure

### `server.js`

The main server file.

It is responsible for:

* Creating the Express server
* Connecting to MongoDB
* Configuring middleware
* Registering API routes
* Starting the server

The server runs on:

```text
http://localhost:5000
```

---

### `models/Url.js`

This file contains the Mongoose schema used to store URL information.

Each URL document contains:

```text
originalUrl
shortCode
createdAt
updatedAt
```

Example:

```json
{
  "originalUrl": "https://www.google.com",
  "shortCode": "7PyR38"
}
```

---

### `routes/urlRoutes.js`

This file contains the API endpoint for creating shortened URLs.

It uses Nano ID to generate a unique short code.

Example:

```text
POST /api/shorten
```

---

## API Endpoints

### 1. Create Short URL

**Endpoint**

```text
POST /api/shorten
```

**Full URL**

```text
http://localhost:5000/api/shorten
```

**Request Body**

```json
{
  "originalUrl": "https://www.google.com"
}
```

**Response**

```json
{
  "message": "URL shortened successfully",
  "shortUrl": "http://localhost:5000/7PyR38",
  "originalUrl": "https://www.google.com"
}
```

---

### 2. Redirect Short URL

**Endpoint**

```text
GET /:shortCode
```

**Example**

```text
http://localhost:5000/7PyR38
```

The server searches for `7PyR38` in MongoDB and redirects the user to the stored original URL.

---

## MongoDB Database

The project uses MongoDB to store the relationship between the short code and original URL.

Example database document:

```json
{
  "_id": "MongoDB generated ID",
  "originalUrl": "https://www.google.com",
  "shortCode": "7PyR38",
  "createdAt": "2026-09-26",
  "updatedAt": "2026-09-26"
}
```

MongoDB can be used locally through MongoDB Community Server and MongoDB Compass, or the project can be connected to MongoDB Atlas.

---

## Environment Variables

Create a `.env` file in the root directory:

```env
MONGO_URI=mongodb://127.0.0.1:27017/url_shortener
PORT=5000
```

The `.env` file is intentionally excluded from GitHub using `.gitignore`.

Never upload database credentials or passwords to a public repository.

---

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/jaffarfarash01-pixel/url-shortener.git
```

### 2. Move into the project directory

```bash
cd url-shortener
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure environment variables

Create a `.env` file:

```env
MONGO_URI=mongodb://127.0.0.1:27017/url_shortener
PORT=5000
```

### 5. Start the development server

```bash
npm run dev
```

The backend will start at:

```text
http://localhost:5000
```

---

## Running the Frontend

The frontend is located inside:

```text
frontend/
```

Open `index.html` using VS Code Live Server.

The frontend communicates with the backend API:

```text
http://localhost:5000/api/shorten
```

Make sure the backend server is running before using the frontend.

---

## Testing with Postman

The API can be tested using Postman.

### Request

```text
POST http://localhost:5000/api/shorten
```

Select:

```text
Body → raw → JSON
```

Use:

```json
{
  "originalUrl": "https://www.google.com"
}
```

A successful response will return a short URL.

Example:

```text
http://localhost:5000/7PyR38
```

Opening this URL in a browser redirects to the original URL.

---

## CodeAlpha Internship Task

### Task 1: Simple URL Shortener

The project fulfills the following requirements:

| Requirement                     | Status    |
| ------------------------------- | --------- |
| Backend server using Express.js | Completed |
| API endpoint for long URLs      | Completed |
| Generate unique short code      | Completed |
| Store URL mapping in database   | Completed |
| MongoDB integration             | Completed |
| Redirect short URL              | Completed |
| Basic frontend                  | Completed |

---

## Key Learning Outcomes

Through this project, I gained practical experience with:

* Building REST APIs with Express.js
* Working with Node.js
* Connecting Express applications with MongoDB
* Using Mongoose models and schemas
* Generating unique identifiers
* Handling HTTP requests and responses
* Implementing URL redirection
* Connecting frontend JavaScript with backend APIs
* Using environment variables
* Testing APIs with Postman
* Managing projects using Git and GitHub

---

## Future Improvements

The project can be extended with:

* URL validation
* Custom short URLs
* URL expiration
* Click tracking
* Analytics dashboard
* User authentication
* Copy-to-clipboard functionality
* QR code generation
* Deployment to a cloud platform
* Rate limiting for API security

---

## GitHub Repository

**Repository:**

https://github.com/jaffarfarash01-pixel/url-shortener

---

## Author

**Jaffar Farash**

BCA Student | Frontend & Backend Development

---

## License

This project is created for educational and internship purposes.
