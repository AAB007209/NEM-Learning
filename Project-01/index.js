const express = require("express");

// Importing the users Data
const users = require("./MOCK_DATA.json");

const app = express();
const port = 8000;

// Routes

// For Browser API users - HTML Document Render
app.get("/users", (req, res) => {
    const html = `
    <ul>
        ${users.map((user) => `<li>${user.first_name}</li>`).join('')}
    </ul>
    `;
    return res.send(html);
});

// For Mobile API users - JSON
app.get("/api/users", (req, res) => {
    return res.json(users); // Working with json so res.json()
})

// app.get("/api/users/:id", (req, res) => {
//     const id = Number(req.params.id);
//     const user = users.find((user) => user.id === id);
//     return res.json(user);
// })

// We can write all methods with same route like the below
app.route("/api/users/:id")
    .get((req, res) => {
        const id = Number(req.params.id);
        const user = users.find((user) => user.id === id);
        return res.json(user);
    })
    .patch((res, req) => {
        // TODO: Edit the user with the ID

        return res.json({ status: "pending" });
    })
    .delete((req, res) => {
        // TODO: Delete the user with the ID

        return res.json({ status: "pending" });
    })

app.post("/api/users", (req, res) => {
    // TODO: Create new user

    return res.json({ status: "pending" });
})

// app.patch("/api/users/:id", (req, res) => {
//     // TODO: Edit the user with the ID

//     return res.json({ status: "pending" });
// })

// app.delete("/api/users/:id", (req, res) => {
// // TODO: Delete the user with the ID

// return res.json({ status: "pending" });
// })

app.listen(port, () => {
    console.log(`Server is running on port: ${port} `);
})