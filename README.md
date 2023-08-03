# Blog API Assignment

This is a sample Blog API Assignment that demonstrates basic CRUD operations and filtering, sorting opertaion for managing posts.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Running the API](#running-the-api)
- [Endpoints](#endpoints)
- [API Documentation](#api-documentation)

## Getting Started

### Prerequisites

Before running the API, ensure you have the following installed:

- Node.js (v14 or higher)
- MongoDB local or online account to store the data

### Installation

1. Clone this repository:

```js
 git clone https://github.com/ankit-ml12/enverx-be-developer-assignment.git
```

2. Install the dependencies:

```js
   cd enverx-be-developer-assignment
   npm install
```

## Running the API

1. Add the mongodb string into .env in this format

```js
MONGO_URI =mongodb+srv://<user_name>:<password>@nodeexpresscourse.jbkuhx2.mongodb.net/temp?retryWrites=true&w=majority
```

2. Start the API server:

```js
npm start
```

By default, the API will run on `http://localhost:3000`.

Note

- if you want to import raw data use node populate.js
- above command import the json data into the database to test the api

## Endpoints

The API provides the following endpoints:

- `GET /api/posts`: Get all posts.
- `GET /api/posts/:id`: Get a single post by ID.
- `POST /api/posts`: Create a new post.
- `PATCH /api/posts/:id`: Update an existing post.
- `DELETE /api/posts/:id`: Delete a post.

## API Documentation

For detailed API documentation, including request and response examples, please refer to the [API documentation](./docs/api.md) file.
