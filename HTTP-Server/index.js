// - HTTP SERVER USING EXPRESS

const http = require("http");
const express = require("express");

const PORT = 8082;

// "app" is like myHandler function which we wrote previously but pre-written from express
const app = express();

// http://localhost:8082/
app.get("/", (req, res) => {
    return res.send("Hello From Home Page");
})

// http://localhost:8082/about?name=Akash
app.get("/about", (req, res) => {
    return res.send(`About Page: ${req.query.name}`);
})

// Listener method from express. (Internally uses HTTP module http.createServer())
app.listen(PORT, () => {
    console.log(`The Server is running on: ${PORT}`);
})