const express = require('express');
require('dotenv').config();

const fs = require('fs');

const port = process.env.PORT || 9090
const app = express();
app.use(express.json());

app.get('/', (req,res) =>{
    res.send('This is home page!');
})

app.get('/products', (req, res) =>{
    const data = fs.readFileSync("./db.json", {encoding : 'utf-8'})
    const parseData = JSON.parse(data);
    const products = parseData.products
    res.send(products)
})

app.post('/products/create', (req,res) =>{
    const payload = JSON.stringify(req.body);
    // get all data
    const data = fs.readFileSync('./db.json', {encoding : 'utf-8'}, )
    // parse it
    const parseData = JSON.parse(data);
    // access data.products
    const products = parseData.products
    console.log(products);
    // add to the products via push or spread etc.
    const newProduct = [...products, JSON.parse(payload)];
    console.log(newProduct);
    // write
    parseData.products = newProduct;
    fs.writeFileSync('./db.json', JSON.stringify(parseData), 'utf-8')

    res.send("Procuct created");
})

app.get('/profile', (req, res) =>{
   const {name,age} = req.query
   console.log(req.query);

   if(age >= 18){
    res.send(name + " " + age);
   }else{
    res.send('Not elegiable')
   }

})

app.get('/welcome', (req,res) =>{
    res.setHeader("Content-type" , "application/json")
    res.send(JSON.stringify({"name" : "Sarvjyoti"}));
})

app.post("/addData", (req, res) =>{
    console.log(req.body);
    res.send('Thanks');
})


app.listen(port, ()=>{
    console.log(`Server is runnig at port no. ${port}`);
})