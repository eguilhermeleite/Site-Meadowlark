const { request, response } = require('express');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

//página 404 personalizada
app.use((request, response) => {
    response.type('text/plain');
    response.status(404);
    response.end('404 - Not Found');
});

// página 500 personalizada
app.use((request, response) => {
    response.type('text/plain');
    response.status(500);
    response.end('500 - Internal Error');
});

app.listen(port, () => console.log(`Express Funcionando na porta ${port}. Pressione Ctrl + c para finalizar`));