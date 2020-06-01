import express from 'express';

const app = express();

app.get('/users', (req, res) => {
    console.log('Listagem de usuários'),

    res.json({message: 'Hello World'});
});

app.listen(3333);