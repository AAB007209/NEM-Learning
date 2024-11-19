// - HTTP SERVER CREATION

const http = require("http");
const fs = require("fs");
const url = require("url");

const PORT = 8082;

// - The Callback function runs whenever we have a request
// - req Object contains all the data and metadata from the client side.
// - We can send the response to the Client using the res

// myHandler function for Creating Server
function myHandler(res, req) {

    // console.log("New Request Received");
    // console.log(req.headers);
    // res.end("Hello from Server");

    if (req.url === "/favicon.ico") return res.end();

    // req.url -> gives the path from which the req was made
    const log = `${Date.now()}: ${req.method} ${req.url} New Req Received\n`;

    // Log the request asynchronously (non-blocking)
    fs.appendFile("log.txt", log, (err) => {
        if (err) console.error("Error writing to log file:", err);
    });

    // Parse URL
    const myUrl = url.parse(req.url, true);
    // console.log(myUrl);

    // Handle Routes
    switch (myUrl.pathname) {
        case "/":
            if (req.method === "GET") {
                res.end("HomePage");
            }
            break;

        case "/about":
            // http://localhost:8082/about?myname=Akash+A+Benki (+ => Considered as space in URL)
            const userName = myUrl.query.myname || "Guest";
            res.end(`Hi, ${userName}`);
            break;

        case "/signUp":
            try {
                if (req.method === "GET") {
                    res.end("This is a signup Form");
                } else if (req.method === "POST") {
                    // Simulate DB Query or operation
                    res.end("Success");
                }
            } catch (error) {
                console.error("Error:", error);
                res.statusCode = 500;
                res.end("Internal Server Error");
            }
            break;

        default:
            res.statusCode = 404;
            res.end("404: Not Found");
    }
};

const myServer = http.createServer(myHandler);

// Start the server
myServer.listen(PORT, () => {
    console.log(`The Server is running on: ${PORT}`);
});

/*
We can have if else if condition for each HTTP method for all url path's required.
This will be more hectic to manage and understand for larger projects.

Which is why Express Framework comes into picture to make things simple for the HTTP methods.

- The myHandler function which we have written here by ourselves here will be given to us by the express framework

*/