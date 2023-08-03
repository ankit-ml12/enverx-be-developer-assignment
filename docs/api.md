# API Documentation - Blog API Assignment

## Table of Contents

- [Get All Posts](#get-all-posts)
- [Get One Post](#get-one-post)
- [Create a Post](#create-a-post)
- [Update a Post](#update-a-post)
- [Delete a Post](#delete-a-post)

---

## Get All Posts

Get a list of all posts.

### URL

```bash
GET /api/posts
```

### Parameters

- `sortBy` (optional): Sort the posts by specific fields. Example: `sortBy=createdAt,name,views` (comma-separated).
- `query` (optional): Search for posts that match the query string in name, description, or category.
- `category` (optional): Filter posts by category. Multiple categories can be specified, separated by commas.

### Response

- Status Code: `200 OK`
- Content:

````json

```json
{
  "count": 3,
  "posts": [
    {
      "_id": "611e0e1c3dcd632bda5e6cfd",
      "name": "Sample Post 1",
      "description": "This is a sample post.",
      "category": "Technology",
      "views": 12,
      "createdAt": "2023-08-01T10:00:00.000Z",
      "url": "/api/posts/611e0e1c3dcd632bda5e6cfd"
    },
    {
      "_id": "611e0e1c3dcd632bda5e6cfe",
      "name": "Sample Post 2",
      "description": "Another sample post.",
      "category": "Travel",
      "views": 45,
      "createdAt": "2023-08-02T08:30:00.000Z",
      "url": "/api/posts/611e0e1c3dcd632bda5e6cfe"
    },
    {
      "_id": "611e0e1c3dcd632bda5e6cff",
      "name": "Sample Post 3",
      "description": "Yet another sample post.",
      "category": "Health",
      "views": 20,
      "createdAt": "2023-08-03T12:15:00.000Z",
      "url": "/api/posts/611e0e1c3dcd632bda5e6cff"
    }
  ]
}
````

## Get One Post

Get a single post by its ID.

### URL

```js
GET /api/posts/:id
```

### Parameters

- id: The ID of the post.

### Response

- Status Code: 200 OK
- Content:

```js
{
  "post": {
    "_id": "611e0e1c3dcd632bda5e6cfd",
    "name": "Sample Post 1",
    "description": "This is a sample post.",
    "category": "Technology",
    "views": 13,
    "createdAt": "2023-08-01T10:00:00.000Z"
  }
}
```

## Create a Post

Create a new post.

### URL

```bash
POST /api/posts
```

### Request Body

- `name` (string, required): The name/title of the post.
- `description` (string, required): The content/description of the post.
- `category` (string, required): The category of the post.

### Response

- Status Code: `200 OK`
- Content:

```json
{
  "post": {
    "_id": "611e0e1c3dcd632bda5e6cff",
    "name": "New Post",
    "description": "This is a new post.",
    "category": "Travel",
    "views": 0,
    "createdAt": "2023-08-03T14:30:00.000Z"
  }
}
```

## Update a Post

Update an existing post.

### URL

```bash
patch /api/posts/:id
```

### Parameters

- `id` (string, required): The ID of the post to update.

### Request Body

Include any fields you want to update:

- `name` (string, optional): The updated name/title of the post.
- `description` (string, optional): The updated content/description of the post.
- `category` (string, optional): The updated category of the post.

### Response

- Status Code: `200 OK`
- Content:

```json
{
  "post": {
    "_id": "611e0e1c3dcd632bda5e6cff",
    "name": "Updated Post",
    "description": "This is an updated post.",
    "category": "Technology",
    "views": 0,
    "createdAt": "2023-08-03T14:30:00.000Z"
  }
}
```

## Delete a Post

Delete a post.

### URL

```bash
DELETE /api/posts/:id
```

### Parameters

- `id`: The ID of the post to delete.

### Response

- Status Code: `200 OK`
- Content

```json
{
  "message": "Post with id 611e0e1c3dcd632bda5e6cff is successfully removed"
}
```
