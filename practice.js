const express = require("express");

const app = express();

const {adminAuth} = require('./middlewares/auth.js')

// app.use('/user', [rh1, rh2, rh3, rh4]) - one way to write

// app.use(
//   "/user",
//   (req, res, next) => {
//     console.log(">>>>, hii");
//     // res.send("hii");
//     next() 
//   },
//   (req, res) => {
//     console.log(">>>  hello");
//     // res.send("hello");
//   }
// );

// app.use(
//   "/user",
//   [
//     (req, res, next) => {
//     console.log(">>>>, hii");
//     // res.send("hii");
//     next() 
//   },
//   (req, res) => {
//     console.log(">>>  hello");
//      res.send("hello");
//   }
// ]
// );

//using app.all wont allow next as all is the final handle for a route.
app.use('/admin', adminAuth)

app.get('/admin/getAllData', (req, res) => {
  console.log('GET')
  res.send('All Data');
});

app.post('/admin/getAllData', (req, res) => {
  console.log('POST')
  res.send('Post Data');
});

app.use("/", (err, req, res, next) => {
  if(err) {
    res.send('Error');
  }
})

app.listen("7777", () => {
  console.log("Server started on http://localhost:7777");
});
