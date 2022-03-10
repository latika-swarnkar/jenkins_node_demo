const express=require("express")
const app=express()
app.get('/',(req,res)=>{
    console.log("Index Page logged in")
    res.send("<h1>Welcome to Node JS App........</h1")
})

app.get('/about',(req,res)=>{
    console.log("About Page logged in")
    res.send("<h1>About Node JS App</h1")
})

app.get('/career',(req,res)=>{
    console.log("About Page logged in")
    res.send("<h1>This is Career Page</h1")
})

app.listen(3000)
