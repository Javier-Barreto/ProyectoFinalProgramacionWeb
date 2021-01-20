const router = require('express').Router();

//Ruta para los mangas
var mangas = require('./mangas');


router.use('/mangas',mangas);

router.get('/', function(req,res){
    res.redirect('http://127.0.0.1:5500/webpage/index.html');
})
//localhost:1339/venta_mangas
module.exports = router;