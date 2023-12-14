const express = require("express")
const db= require('./config/connection')

const PORT =process.env.PORT || 8080

const app= express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())


db.once("open", ()=>{
    console.log("Database connected");
    app.listen(PORT, ()=>{
        console.log(`API server running, use http://localhost:${PORT} on insomnia`);

    })
})