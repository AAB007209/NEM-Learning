const http = require("http");
const fs = require("fs");
const PORT = 8082;

// - The Callback function runs whenever we have a request
// - req Object contains all the data and metadata from the client side.
// - We can send the response to the Client using the res
const myServer = http.createServer((req, res) => {
    // console.log("New Request Received");
    // console.log(req.headers);
    // res.end("Hello from Server");

    // req.url -> gives the path from which the req was made
    const log = `${Date.now()}: ${req.url} New Req Received\n`;

    // Async - Non-Blocking Operation
    fs.appendFile("log.txt", log, (err, data) => {
        switch (req.url) {
            case "/":
                res.end("HomePage");
                break;

            case "/about":
                res.end("I am Akash A Benki");
                break;

            default:
                res.end("404: Not Found");
        }
    })

});

myServer.listen(PORT, () => {
    console.log(`The Server is running on: ${PORT}`)
})

