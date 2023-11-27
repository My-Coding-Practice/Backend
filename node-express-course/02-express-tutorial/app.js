const express = require('express');
const app = express();
const {products} = require('./data');

app.get('/', (req,res) => {
    res.send(`<h1>Home Page</h1> <a href="/api/products">products</a>`)
})

app.get('/api/products', (req,res) => {
    const newProducts = products.map((product) => {
        const {id,name,image} = product;
        return {id,name,image}
    })
    res.json(newProducts)
})

app.get('/api/products/:productId', (req,res) => {
    const singleProduct = products.find((product) => product.id === Number(req.params.productId))
    if (!singleProduct) {
        return res.status(404).send('Product does not exists')
    } else {
        res.json(singleProduct);
    }
    
})

app.all('*' , (req,res) => {
    res.status(404).send(`<p>Oops, we could not find this page</p>`)
})

app.listen(5000, () => {
    console.log('Server is listening on port 5000...');
})