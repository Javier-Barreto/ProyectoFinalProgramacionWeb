const mangasController = require('../controllers/mangasController');
var router = require('express').Router();

//Mostrar mangas
router.get('/', function(req, res) {
  //res.json({ message: 'Vas a obtener mangas'})
  mangasController.list(req,res);
})

//Obtener un manga por genero
router.get('/:genero', function(req, res) {
  mangasController.GenreManga(req,res);
})

//Borrar manga
router.delete('/', function(req,res){
  mangasController.deleteManga(req,res);
})

//Insertar manga
router.post('/',function(req,res){
  mangasController.addManga(req,res);
})

router.put('/',function(req,res){
  mangasController.modifyInfoManga(req,res);
})
//url:puerto/venta_mangas/mangas
module.exports = router
