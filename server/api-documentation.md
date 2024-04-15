# API documentation

Live Link : [https://bloryter.onrender.com](https://bloryter.onrender.com)

## /analyze-tone

### POST /analyze-tone

This route is use to understand the tone of the users sample content

**Request Body**

```json
{
  "sampleBlogPost" : "string" // the data blog given for the user
}
```

### Responses

Success Response (200 OK)
```json
{
  "toneAnalysis": "string" // The tone analysis of the provided sample blog post
}
```

Error Response (500 Internal Server Error)

```json
{
  "error": "An error occurred while analyzing the tone"
}
```


## /generate-blog

### POST /generate-blog

This route is used to generate a new blog post based on the provided topic, additional details, and tone analysis.

**Request Body**

```json
{
 "topic": "string", // The main topic or subject of the blog post
 "additionalDetails": "string", // Additional details or context for the blog post
 "toneAnalysis": "string" // The tone analysis of a sample blog post
}
```

Copy code
# API Documentation

## /analyze-tone

## /generate-blog

### POST /generate-blog

This route is used to generate a new blog post based on the provided topic, additional details, and tone analysis.

**Request Body**

```json
{
 "topic": "string", // The main topic or subject of the blog post
 "additionalDetails": "string", // Additional details or context for the blog post
 "toneAnalysis": "string" // The tone analysis of a sample blog post
}

```
### Responses

**Success Response (200 OK)
```json

{
  "newBlogPost": "string" // The generated blog post content
}
```
**Error Response (500 Internal Server Error)

```json
{
  "error": "An error occurred while generating the new blog post"
}
```

