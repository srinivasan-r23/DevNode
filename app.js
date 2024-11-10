const express = require('express');
const fs = require('fs');
// require('./config/database');
const app = express();

app.use(express.json()) //  converts the json to js object.

app.post('/signup', (req, res) => {
    const user = req.body;
    const filePath = 'users.json';

  fs.readFile(filePath, 'utf8', (err, data) => {
        if (err && err.code !== 'ENOENT') {
            return res.status(500).send('Error reading file');
        }

        let users = [];
        if (data) {
            users = JSON.parse(data);
        }

        // Add the new user to the array
        users.push(user);

        // Write the updated array back to the file
        fs.writeFile(filePath, JSON.stringify(users, null, 2), (err) => {
            if (err) {
                return res.status(500).send('Error writing file');
            }

            res.send('User added successfully');
        });
    });
})

app.get('/user', (req, res) => {
    const userEmail = req.query.emailId;
    fs.readFile("users.json", (err, data) => {
        if (err && err.code !== 'ENOENT') {
            return res.status(500).send('Error reading file');
        }

        let users = [];
        if (data) {
            users = JSON.parse(data);
        }

        const user = users.find(user => user.emailId === userEmail);
        if (!user) {
            return res.status(400).send('User not found!');
        }

        res.send(user);
    });
})
app.patch('/user', (req, res) => {
    const userEmail = req.query.emailId;
    fs.readFile("users.json", (err, data) => {
        if (err && err.code !== 'ENOENT') {
            return res.status(500).send('Error reading file');
        }

        let users = [];
        if (data) {
            users = JSON.parse(data);
        }

        const userIndex = users.findIndex(user => user.emailId === userEmail);
        if (userIndex === -1) {
            return res.status(400).send('User not found!');
        }
        users[userIndex] = { ...users[userIndex], ...req.body };
    
         // Write the updated array back to the file
         fs.writeFile('users.json', JSON.stringify(users, null, 2), (err) => {
            if (err) {
                return res.status(500).send('Error writing file');
            }

            res.send('User updated successfully');
        });
    });
})
app.delete('/user', (req, res) => {
    const userEmail = req.query.emailId;
    fs.readFile("users.json", (err, data) => {
        if (err && err.code !== 'ENOENT') {
            return res.status(500).send('Error reading file');
        }

        let users = [];
        if (data) {
            users = JSON.parse(data);
        }

        const updatedUsers = users.filter(user => user.emailId !== userEmail);
        if (updatedUsers?.length === users?.length) {
            return res.status(400).send('User not found!');
        }
        fs.writeFile("users.json", JSON.stringify(updatedUsers, null, 2), (err) => {
            if (err) {
                return res.status(500).send('Error writing file');
            }

            res.send('Deleted Successfully');
        });
    });
})
app.get('/feed', (req, res) => {
    fs.readFile("users.json", (err, data) => {
        if (err && err.code !== 'ENOENT') {
            return res.status(500).send('Error reading file');
        }
        res.send(data);
    })
})

app.listen(7777, () => {
    console.log('Server started on http://localhost:7777');
})