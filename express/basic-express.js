const express = require('express')
const app = express()
// app get
app.get('/', (req, res) => {
    console.log('user hit the resourse')
    res.status(200).send('Home page')
})
app.get("/about", (req, res) => {
    res.status(200).send("About Page")
})

//app all handles all the methods
app.all('*', (req, res) => {
    res.status(404).send('<h1>Resources not found</h1>')
})

//app.listen
app.listen(5000, () => {
    console.log('The server is listening on port 5000')
})

//app.get
//app.post
//app.put
//app.delete
//app.all
//app.use
//app.listen