
const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'));

app.get('/products', (req, res) => {
    res.json([
        {
            id:1,
            name:'bicycle',
            image: 'bicycle.png'
        },
        {
            id:2,
            name:'car',
            image: 'car.png'
        }
    ])
})

app.get('/product_info', (req,res)=>{
    let product_id = req.query.product_id;
    res.json({
        product_id
    })
})

app.post('/api/login', (req,res)=>{
    console.log(req.post);
    res.json({
        'token': 'asd1234-token',
        'UserData': 'Ah Kow'
    })
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
