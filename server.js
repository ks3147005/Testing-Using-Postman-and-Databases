// importing express
const express = require("express");
const app = express();

//global middleware
app.use(express.urlencoded({ extended: true }));

//define a route
app.get('/', (req, res) => {
    res.send("hello, world!");
});

const fun = (req, res, next) => {


    next();
}

app.get('/get-form', (req, res) => {
    return res.send(` <html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action='/create-user' method="POST">
        <label for="name">First Name</label>
    <input type="text" id="name" name="name"><br> 
        <label for="email">First email</label>
        <input type="text" id="email" name="email"><br>
        <label for="password">password</label>
        <input type="text" id="password" name="password"><br>
        <button type="submit"> Submit <button>
    </form>
</body>
</html>`)
})

app.post('/create-user', (req, res) => {
    // console.log(req.body)
   return res.send("form submitted successfully")
});

app.get('/dashboard', fun, (req, res) => {
   return res.send("we are on dashboard")
})

//start the server
app.listen(8000, () => {
    console.log("server is running on PORT : 8000");
});