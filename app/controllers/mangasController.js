let mysql = require('../../db/dbmysql')
//let cliente=require('../models/mangas')
 
module.exports = {
    list:(req,res)=>{
        mysql.query("SELECT * FROM tblmanga",(err,rows,fields)=>{
            if(!err)
            {
                res.json(rows);
            }
            else
            {
                res.json(err);
            }
        })
    },
    GenreManga:(req,res)=>{
        let genero = req.params.genero;
        mysql.query("SELECT * FROM tblmanga WHERE genero = ?",genero,(err,rows,fields)=>{
            if(!err)
            {
                res.json(rows);
            }
            else
            {
                res.json(err)
            }
        })
    },
    addManga:(req,res)=>{
        let nombre= req.body.nombre;
        let autor = req.body.autor;
        let editorial = req.body.editorial;
        let num_pag = req.body.num_pag;
        let precio = req.body.precio;
        let resumen = req.body.resumen;
        let genero = req.body.genero;
        let fecha_lanzamiento = req.body.fecha_lanzamiento;

        mysql.query(`INSERT INTO tblmanga(nombre, autor, editorial, num_pag, precio, resumen, genero, fecha_lanzamiento) VALUES(?,?,?,?,?,?,?,?)`,[nombre, autor, editorial, num_pag, precio, resumen, genero, fecha_lanzamiento],(err,rows,fields)=>{
            if(!err)
            {
                res.json("Nuevo elemento agregado");
            }
            else
            {
                res.json(err);
            }
        })
    },
    deleteManga:(req,res)=>{
        let nombre = req.body.nombre;
        mysql.query("DELETE FROM tblmanga WHERE nombre = ?",nombre,(err,rows,fields)=>{
            if(!err)
            {
                //alert("Se ha borrado el manga con el nombre de: "+nombre)
                res.json(rows)

            }
            else
            {
                res.json(err)
            }
        })
    },
    modifyInfoManga:(req,res)=>{
        let nombre= req.body.nombre;
        let autor = req.body.autor;
        let editorial = req.body.editorial;
        let num_pag = req.body.num_pag;
        let precio = req.body.precio;
        let resumen = req.body.resumen;
        let genero = req.body.genero;
        let fecha_lanzamiento = req.body.fecha_lanzamiento;
        let id_manga = req.body.id_manga;
        console.log(id_manga);
        mysql.query("UPDATE tblmanga SET nombre = ?, autor = ?, editorial = ?, num_pag = ?, precio = ?, resumen = ?, genero = ?, fecha_lanzamiento = ? WHERE id_manga = ?",[nombre, autor, editorial, num_pag, precio, resumen, genero, fecha_lanzamiento, id_manga],(err,rows,field)=>{
            if(!err)
            {
                res.json("Elemento actualizado");
            }
            else
            {
                res.json(err);
            }
        });
    },
    listeditorial:(req,res)=>{
        mysql.query("SELECT * FROM tbleditorial",(err,rows,fields)=>{
            if(!err)
            {
                res.json(rows);
            }
            else
            {
                res.json(err);
            }
        })
    }
}
