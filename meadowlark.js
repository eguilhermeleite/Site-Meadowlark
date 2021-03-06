// imports
const { request, response } = require('express');
const expressHandlebars = require('express-handlebars');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const wordOfDay = [
    "Conquer your fears or they will conquer you.",
    "Rivers need spring.",
    "Do not fear what you don`t know.",
    "You will have a pleasant surprise.",
    "Whenever possible, keep it simple."
];

// diretório para estilos, imagens, javascript...
app.use(express.static(__dirname + '/public'));

//cria um view engine Handlebars
//e configura o Express para usá-lo como padrão
app.engine('handlebars', expressHandlebars({
    defaultLayout: 'main',
}));
app.set('view engine', 'handlebars');

//página principal
app.get('/', (request, response) => response.render('home'));

//página about
app.get('/about', (request, response) => {
    const randomWord = wordOfDay[Math.floor(Math.random() * wordOfDay.length)];
    response.render('about', { word: randomWord });
});

//página 404 personalizada
app.use((request, response) => {
    response.status(404);
    response.render('404');
});

// página 500 personalizada
app.use((err, request, response, next) => {
    console.error(err.message);
    response.status(500);
    response.render('500');
});

app.listen(port, () => console.log(`Express Funcionando na porta ${port}. Pressione Ctrl + c para finalizar`));