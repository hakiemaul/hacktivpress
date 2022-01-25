# Hacktivpress

This is an application that will serve the needs for publishing quality content by quality user. Using this web application, user can post, edit and delete their writing. The application is using an express based server. Change README

## Getting Started

To use this application you must first borrow Aulia Hakiem's laptop, and then run this following command from his laptop's terminal
```
cd phase-2/week-4/Hacktivpress
```

Open another tabs in the terminal then run
```
cd client
npm run dev
```
```
cd server
npm start
```

That's it, you will be able to see the content available in the local mongoose server, post new content, edit it, or delete it.

DON'T FORGET TO SIGNUP IF YOU WANT FULL IMMERSION EXPERIENCE

## Server
If you ever feel depressed and want to see how things work behind the scene, you can check the server using Postman application.

The server is served through http://localhost:3000/

List of user related routes:

Route | HTTP | Description
------|------|------------
/signup | POST | Create new user
/login | POST | Generate token for registered user

List of writing related routes:

Route | HTTP | Description
------|------|------------
/api/blogs | GET | Get all the blog content
/api/blogs/:id | GET | Get a single blog content
/api/blogs | POST | Create a blog content
/api/blogs/:id | DELETE | Delete a content
/api/blogs/:id | PUT | Update a blog with new content

### Blog's model:
* Title: String,
* Content: String,
* Category: String,
* Author: User's ID (reference to its creator)

## Built with
### Client
Hacktivpress's client side code is built by using:
* Vue (Vue CLI)
* Vuex

### Server
Hacktivpress's server side code is built by using:
* ExpressJS

## Acknowledgement
* Express and Vue creator. You guys rocks.