// Requiring the express module for the variable express
const express = require('express');
// app will equal express which is a funtion vaule
const app = express();
// Const variable for port
const port = 3333;

// Just some data
const users = [
    { name: 'Mike', age: '34'},
    { name: 'Sally', age: '27'},
    { name: 'Tommy', age: '54'},
    { name: 'Steve', age: '46'},
    { name: 'Shannon', age: '93'},
];
const posts = [
    { title: "Hello Wolrd"},
];

let options = {
    extensions: ['htm', 'html'],
    redirect: false,
}
app.use(express.static('src', options));

// Handling a simple route, that sends back a ok 200 response
app.get('/', (req, res) => {
    res.status(200).send({
        msg: 'Hello World',
        usr: 'Frank'
    });
});

app.get('/hello', (req, res) => {
    res.status(200).send('/src/hello.html');
});

app.get('/users', (req, res) => {
    res.status(200).send(users);
});

app.get('/posts', (req, res) => {
    res.status(200).send(posts);
});
// Where this server is listen to request
app.listen(port, () => {
    console.log("Server is listening on port 3333")
});