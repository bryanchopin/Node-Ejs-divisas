// requiere modules
const express = require('express');
const ejsLayaouts = require('express-ejs-layouts');
const app = express();
const port = process.env.PORT || 3000; //aqui asignamos un puerto en dado caso de que no se asigne uno


// MOTOR DE VISTAS DE EJS
app.set('view engine', 'ejs');
app.use(ejsLayaouts);

// USO DE BODYPARSER
app.use(express.urlencoded({extended : true}));

// CARGAR MODULO DE ROUTES
const router = require('./routes/routes');
app.use('/',router);

// RECURSOS PUBLICOS
app.use(express.static('public'));

app.listen(port,() => {
    console.log("awebo carnal ya estas en linea");
});
