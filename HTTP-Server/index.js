const http = require("http");
const fs = require("fs");
const url = require("url");

const PORT = 8082;

// - The Callback function runs whenever we have a request
// - req Object contains all the data and metadata from the client side.
// - We can send the response to the Client using the res
const myServer = http.createServer((req, res) => {
    // console.log("New Request Received");
    // console.log(req.headers);
    // res.end("Hello from Server");

    if (req.url === "/favicon.ico") return res.end();

    // req.url -> gives the path from which the req was made
    const log = `${Date.now()}: ${req.url} New Req Received\n`;

    const myUrl = url.parse(req.url, true);
    console.log(myUrl);

    // Async - Non-Blocking Operation
    fs.appendFile("log.txt", log, (err, data) => {
        switch (myUrl.pathname) {
            case "/":
                res.end("HomePage");
                break;

            // http://localhost:8082/about?myname=Akash+A+Benki (+ => Considered as space in URL)
            case "/about":
                const userName = myUrl.query.myname;
                res.end(`Hi, ${userName}`);
                break;

            default:
                res.end("404: Not Found");
        }
    })

});

myServer.listen(PORT, () => {
    console.log(`The Server is running on: ${PORT}`)
})

