import express = require('express');

const app = express();

app.get('/users', (request, response) => {
     console.log('Listageeeem de users')

     response.json([
         'Edmilson',
         'Julio',
         'Chelene'
     ]);
});

app.listen(3333);