const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const database = require('./src/services/database');

const app = express();

const filmeRoutes = require('./src/routes/filmes.routes');
const usuarioRoutes = require('./src/routes/usuarios.routes')
const episodiosRoutes = require('./src/routes/episodios.routes');

// MIDDLEWARES
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));

//ROUTES
app.use('/', filmeRoutes);
app.use('/usuario', usuarioRoutes);
app.use('/episodio', episodiosRoutes);

app.listen(8000, () => {
    console.log('servidore ta funcinante');
});