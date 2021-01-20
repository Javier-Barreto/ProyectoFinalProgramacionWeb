  
//<-------------------------------------------------------------->//
//<-----------------CREACION DE BASE DE DATOS-------------------->//
//<-------------------------------------------------------------->//
let bd = JSON.parse(localStorage.getItem("ACTUALUSER"));
if(!bd || bd==undefined)
{
  bd={
    Nombre:"",
    Loged:false
  }
  localStorage.setItem("ACTUALUSER",JSON.stringify(bd));
}