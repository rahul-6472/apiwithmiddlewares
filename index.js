const express = require("express")

const app = express()

const port = 8000

books = [
    {
       name : "The Road",
       author : "bandini",
       publisher: "penguin"
    }, 
    {
        name : "The immortals of meluha",
        author : "amish",
        publisher: "penguin"
     }, 
     {
        name : "how to win friends and influence people",
        author : "dale carnegie",
        publisher: "ney work house"
     }, 
     {
        name : "Rich dad poor dad",
        author : "Robert Kiyosaki",
        publisher: "tmh"
     }
 ]


 const allBooks = (req,res,next) => {
     console.log("Fetching all books")
     next()
 }
app.use(allBooks)

const singleBook = (req,res,next) => {
  console.log("singleBook")
  next()
}

app.get("/books",(req,res) => {
    res.json(books)
})

app.use(singleBook)

app.get("/book/:name", (req,res) => {


    res.json(books.filter(book =>  book.name === req.params.name))

})
app.listen(port, () => console.log(`server running at ${port}`))

