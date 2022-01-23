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
    { title: "My Love"},
    { title: "My Dog"},
];

// Render htm, html
let options = {
    extensions: ['htm', 'html'],
    redirect: false,
}

// Aims an empty request to a static index.html page in src DIR, options render html
app.use(express.static('src', options));

// Handling a simple route, that sends back a ok 200 response
app.get('/', (req, res) => {
    res.status(200).send({
        msg: 'Hello World',
        usr: 'Frank'
    });
});

// An endpoint that routes to a html file in src DIR
app.get('/hello', (req, res) => {
    res.status(200).send('/src/hello.html');
});

app.get('/about', (req, res) => {
    res.status(200).send('/src/about.html');
});

// Endpoints that render server side data
app.get('/users', (req, res) => {
    res.status(200).send(users);
});

app.get('/posts', (req, res) => {
    res.status(200).send(posts);
});

// A funtion that can dynamically look for data that could exist on the database server-side
// app.get('users/:name', (req,res) => {
//     const { name } = req.params;
//     const users = users.find((users) => users.name === name);
//     if (users) res.status(200).send(users);
//     else res.status(400).send('Not Found');
// });

// app.get('/posts', (req, res) => {
//     const { title } = req.query;
//     if (title) {
//         const post = posts.find((posts) => posts.title === title);
//         if (posts) {
//             res.status(200).send(posts);
//         }
//         else res.status(400).send('Not Found');
//     };
//     res.status(200).send(posts);
// });

// Where this server is listen to request
app.listen(port, () => {
    console.log("Server is listening on port 3333")
});