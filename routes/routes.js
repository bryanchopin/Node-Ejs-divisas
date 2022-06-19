// importando modulos

const express = require('express');
const path = require('path'); //este modulo nos ayudara con las rutas


//creamos un objeto de router express
const router = express.Router()


// exportando nuestro modulo de routes
module.exports = router;

const Valores = {DollarCompra : 19.00, DollarVenta: 18.20, totalDolares: 500, totalPesos: 15000};
var  dav,dac,pfdc,pfdv;



// Pagina inicial
router.get('/', (req,res) => {
    res.render('pages/home',{Valores});
})

// Modulo de ventas
router.get('/Mventa',(req,res) =>{
    res.render('pages/Mventa',{Valores});
});

router.get('/Mventa1',(req,res) =>{
    res.render('pages/Mventa1')    
})

router.get('/Mventa11',(req,res) =>{
    res.render('pages/Mventa11');
})

router.post('/Mventa1',(req,res)=>{
    const DAC = req.body.DollaresAComprar;
    const DAV = req.body.dv;
    const PFDC = DAC * Valores.DollarCompra;
    const PFDV = DAV * Valores.DollarVenta
    dav = DAV
    pfdc = PFDC;
    pfdv = PFDV
    dac = DAC;
    ValoresCV = {Dcompra: DAC, PFDC,DAV, PFDV}
    res.render('pages/Mventa1',{ValoresCV})

});

router.post('/Mventa2',(req,res)=>{
    const P = req.body.pago;
    const DAC = dac;
    const F =  P - pfdc;
    const F1 = P - pfdv
    const DAV = dav;
    res.render('pages/Mventa2',{F, F1,DAC, DAV})
});

router.get('/Mventa2', (req,res) =>{
    res.render('pages/Mventa2');
});

// Modulo de reporte
router.get('/Mreporte',(req,res) =>{
    res.render('pages/Mreporte')
});







