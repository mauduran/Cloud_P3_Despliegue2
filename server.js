const express = require("express");
const cors = require('cors')
const path = require('path');
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 4500;

app.use(cors());
app.use(express.json());

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, 'index.html'))
})

app.get('/revisasivivo', (req,res)=>{
    res.json({"status": "estoy bien"});
})

app.listen(PORT,()=>{
    console.log(`app listening on port ${PORT}`)
})