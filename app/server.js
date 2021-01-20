const express = require('express');
const app = express();

var cors = require('cors');
var bodyParser = require('body-parser');
var mysql = require('../db/dbmysql');

var rutaValidador=require('express').Router();

var port = process.env.PORT || 1330;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());


rutaValidador.post('/login',(req,res)=>{
    let user = req.body.login;
    let pwd = req.body.password;
    if(!user || !pwd)
    {
        res.json({mensaje:'Faltan datos'});
    }
    else
    {
        mysql.query("SELECT * FROM tblusers WHERE login=? AND password = ?",[user,pwd],(err,rows,fields)=>{
            if(err)
            {
                res.json({mensaje:"Error en la consulta"});
            }
            else
            {
                //Si la consulta se ejecuta correctamente
                if(rows.length==0)
                {
                    res.status(404).send('Sorry, we cannot find that!')
                }
                else
                {
                    res.redirect("/venta_mangas")
                }
            }
        })
    }
});


//Ruta es http://localhost:1330/venta_mangas
var router = require('./routes')
app.use('/venta_mangas',router);

//Ruta es http://localhost:1330/
app.use('/',rutaValidador);


//Para dar start al servidor
app.listen(port);
console.log('API in port: '+port);









/* PARA PROBAR AGREGARLO EN VACACIONES*/
/*rutaValidador.post('/login',(req,res)=>{
    let user = req.body.login;
    let pwd = req.body.password;
    console.log(req.body);
    if(!user || !pwd)
    {
        res.json({mensaje:'Faltan datos'});
    }
    else
    {
        mysql.query("SELECT * FROM tblusers WHERE login=? AND password = ?",[user,pwd],(err,rows,fields)=>{
            if(err)
            {
                res.json({mensaje:"Error en la consulta"});
            }
            else
            {
                //Si la consulta se ejecuta correctamente
                if(rows.length==0)
                {
                    res.json({mensaje:"El usuario no existe"})
                }
                else
                {
                    const payload ={check:true};
                    const token = jwt.sign(payload,app.get('llave'),{
                        expiresIn:240
                    });

                    bd.Token=token;
                    console.log("Si");
                    localStorage.setItem("TOKEN",JSON.stringify(bd));
                    res.json({mensaje:"Tus datos son correctos", token:token, rows:rows});
                }
            }
        })
    }
});

const rutasProtected = express.Router();
rutasProtected.use((req,res,next)=>{
    const token = req.headers['access-token'];
    if(!token)
    {
        res.json({mensaje:"Falta el Token"});
    }
    else
    {
        jwt.verify(token,app.get('llave'),(err,decoded)=>{
            if(err)
            {
                return res.json({mensaje: 'Token Invalido'});
            }
            else
            {
                req.decoded=decoded;
                next();
            }
        })
    }
})
*/
