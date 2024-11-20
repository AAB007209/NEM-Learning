const express = require("express");
const fs = require("fs");

// Importing the users Data
let users = require("./MOCK_DATA.json");

const app = express();
const port = 8000;

// Middleware - Plugin
app.use(express.urlencoded({ extended: false }));

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
    .patch((req, res) => {
        // TODO: Edit the user with the ID
        const userId = Number(req.params.id);
        // console.log(userId);
        const userIndex = users.findIndex((user) => user.id === userId);

        if (userIndex === -1) {
            return res.status(404).json({ error: "User not found" });
        }

        // Update the user's data with the request body
        users[userIndex] = {
            ...users[userIndex], // Keep existing fields
            ...req.body, // Overwrite fields with new data
        };

        return res.json({ status: "success", user: users[userIndex] });
    })
    .delete((req, res) => {
        // TODO: Delete the user with the ID
        const userId = Number(req.params.id);
        const userIndex = users.findIndex((user) => user.id === userId);

        if (userIndex === -1) {
            return res.status(404).json({ error: "User not found" });
        }

        const deletingUser = users[userIndex];
        users.splice(userIndex, 1);
        // users = users.filter((user) => user.id !== userIndex);

        return res.json({ status: "Success", DeletedUser: deletingUser });
    })

app.post("/api/users", (req, res) => {
    // TODO: Create new user
    const body = req.body;
    // console.log(body);

    users.push({ ...body, id: users.length + 1 });
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
        return res.json({ status: "success", id: users.length });
    });
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