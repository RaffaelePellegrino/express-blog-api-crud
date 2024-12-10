const express= require('express');
const app= express();
const port= 3000;
const router = require('./routers/posts');

app.use(express.json());
app.use('/posts', router);

app.get('/', (req, res) => {
    res.send('Homepage');
});

app.listen(port, () =>{
    console.log('server')
})