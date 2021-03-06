// imports
const { request, response } = require('express');
const expressHandlebars = require('express-handlebars');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

//cria um view engine Handlebars
//e configura o Express para usá-lo como padrão
app.engine('handlebars', expressHandlebars({
    defaultLayout: 'main',
}));
app.set('view engine', 'handlebars');

//página principal
app.get('/', (request, response) => {
    response.type('html');
    response.send("MeadowLark Travel");
});

//página about
app.get('/about', (request, response) => {
    response.type('html');
    response.send("About Meadowlark");
})

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