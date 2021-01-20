

if(!bd || bd==undefined)
{
    bd={
        Nombre:"",
        Loged:false
    }
    localStorage.setItem("ACTUALUSER",JSON.stringify(bd));
    location.replace('../webpage/login.html');
}

//-----------------------------------------------------------------//


document.getElementById("btnsalir").addEventListener("click",e=>{
  bd.Nombre ="",
  bd.Loged =false,
  localStorage.setItem("ACTUALUSER",JSON.stringify(bd));
  location.replace('../webpage/login.html');
});


//-----------------------------ONLOAD--------------------------//
function onloadpage(){
  let x;
  let x2;
  x = bd.Loged;


  if(x==false)
  {
    location.replace('../webpage/login.html')
  }



  //Droplist para modificar
  document.getElementById("MangaDroplist").innerHTML="<option value='NONE'>-------------</option>";
  let i =0;
  fetch(`http://localhost:1330/venta_mangas/mangas`, {
    method: 'GET',
    headers:{
      'Content-Type': 'application/json'
    }
  })
  .then(res=>res.json())
  .then(response => x2 = response)
  .then( ()=>

  x2.forEach(element=>{
    document.getElementById("MangaDroplist").innerHTML+=`
    <option value="${i}">${element.nombre}</option>`;
    i++;
  }));
}






//Onchange para modificar manga
document.getElementById("MangaDroplist").addEventListener("change",()=>{
  //MangaDroplist

  let datos;
  let id = document.getElementById("MangaDroplist").value;
  document.getElementById("MangaDroplist").autofocus;

  let m1 = document.getElementById("MangaDroplistDiv");
  if(document.getElementById("MangaDroplist").value!="NONE")
  {
    fetch(`http://localhost:1330/venta_mangas/mangas`, {
      method: 'GET', // or 'PUT,
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .then(response => datos = response)
    .then( ()=>
      {
        document.getElementById("id_mangaM").value=datos[id].id_manga;
        document.getElementById("NombreMangaMod").value = datos[id].nombre;
        document.getElementById("AutorMod").value = datos[id].autor;
        document.getElementById("EditorialMod").value = datos[id].editorial;
        document.getElementById("NumeroPaginasMod").value = datos[id].num_pag;
        document.getElementById("PrecioMod").value = datos[id].precio;
        document.getElementById("ResumenMod").value = datos[id].resumen;
        document.getElementById("GeneroMangaMod").value = datos[id].genero;
        document.getElementById("FechaMod").value = datos[id].fecha_lanzamiento;
        m1.classList.remove("FORHIDE");
      })
  }
  else
  {
    m1.classList.add("FORHIDE");
  }
})





//Mostrar todos los mangas
document.getElementById("ShowAllMangas").addEventListener("click",e=>{
  let x;
  let mangas = document.getElementById("ListOfMangas");
  mangas.innerHTML="";
  fetch(`http://localhost:1330/venta_mangas/mangas`, {
    method: 'GET',
    headers:{
      'Content-Type': 'application/json'
    }
  })
  .then(res=>res.json())
  .then(response => x = response)
  .then(()=> 

  x.forEach(element => {
    mangas.innerHTML+=`
    <div class="MangaDiv">
      <p>Nombre manga: ${element.nombre}</p>
      <p>Autor: ${element.autor}</p>
      <p>Editorial: ${element.editorial}</p>
      <p>Numero de Paginas: ${element.num_pag}</p>
      <p>Precio: ${element.precio}</p>
      <p>Resumen:</p> 
      <p>${element.resumen}</p>
      <p>Genero: ${element.genero}</p>
      <p>Fecha de lanzamineto: ${element.fecha_lanzamiento}</p>
    </div>`;
  }));
});








//Mostrar mangas por genero
document.getElementById("BtnBuscarGeneroEsp").addEventListener("click",e=>{
  let x;
  let mangas = document.getElementById("ListOfMangas");
  let valor = document.getElementById("MangaGenero").value;
  mangas.innerHTML="";
  fetch(`http://localhost:1330/venta_mangas/mangas/${valor}`, {
    method: 'GET',
    headers:{
      'Content-Type': 'application/json'
    }
  })
  .then(res=>res.json())
  .then(response => x = response)
  .then(()=> 

  x.forEach(element => {
    mangas.innerHTML+=`
    <div class="MangaDiv">
      <p>Nombre manga: ${element.nombre}</p>
      <p>Autor: ${element.autor}</p>
      <p>Editorial: ${element.editorial}</p>
      <p>Numero de Paginas: ${element.num_pag}</p>
      <p>Precio: ${element.precio}</p>
      <p>Resumen:</p> 
      <p>${element.resumen}</p>
      <p>Genero: ${element.genero}</p>
      <p>Fecha de lanzamineto: ${element.fecha_lanzamiento}</p>
    </div>`;
  }))
});














//Para modificar manga
document.getElementById("BtnModificarManga").addEventListener("click",e=>{
  let In1 = document.getElementById("NombreMangaMod").value;
  let In2 = document.getElementById("AutorMod").value;
  let In3 = document.getElementById("EditorialMod").value;
  let In4 = document.getElementById("NumeroPaginasMod").value;
  let In5 = document.getElementById("PrecioMod").value;
  let In6 = document.getElementById("ResumenMod").value;
  let In7 = document.getElementById("GeneroMangaMod").value;
  let In8 = document.getElementById("FechaMod").value;
  let in9 = document.getElementById("id_mangaM").value;

  if(In1==""||In2==""||In3==""||In4==""||In5==""||In6==""||In7==""||In8=="")
  {
    alert("Faltan Campos a Llenar para poder modificar la información el manga");
  }
  else
  {

    var data = {
      nombre: In1,
      autor: In2,
      editorial: In3,
      num_pag: In4,
      precio: In5,
      resumen: In6,
      genero: In7,
      fecha_lanzamiento: In8,
      id_manga: in9
    };

    fetch(`http://localhost:1330/venta_mangas/mangas`, {
      method: 'PUT', // or 'PUT,
      body: JSON.stringify(data),
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    alert("Información del manga "+ In1+"correctamente");
    onloadpage();
  }
});










//Btn encargado de hacer un "post" al servidor para agrgar un manga
document.getElementById("BtnGuardarManga").addEventListener("click",e=>{
  let In1 = document.getElementById("NombreMangaAdd").value;
  let In2 = document.getElementById("AutorAdd").value;
  let In3 = document.getElementById("EditorialAdd").value;
  let In4 = document.getElementById("NumeroPaginasAdd").value;
  let In5 = document.getElementById("PrecioAdd").value;
  let In6 = document.getElementById("ResumenAdd").value;
  let In7 = document.getElementById("GeneroMangaAdd").value;
  let In8 = document.getElementById("FechaAdd").value;

  if(In1==""||In2==""||In3==""||In4==""||In5==""||In6==""||In7==""||In8=="")
  {
    alert("Faltan Campos a Llenar para poder ingresar un nuevo manga");
  }
  else
  {

    var data = {
      nombre: In1,
      autor: In2,
      editorial: In3,
      num_pag: In4,
      precio: In5,
      resumen: In6,
      genero: In7,
      fecha_lanzamiento: In8
    };
 
    fetch('http://localhost:1330/venta_mangas/mangas', {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers:{
            'Content-Type': 'application/json'
        }
    }).then(res => console.log(res.json()))
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));

    alert("Manga agregado correctamente");
    document.getElementById("NombreMangaAdd").value="";
    document.getElementById("AutorAdd").value="";
    document.getElementById("EditorialAdd").value="";
    document.getElementById("NumeroPaginasAdd").value="";
    document.getElementById("PrecioAdd").value="";
    document.getElementById("ResumenAdd").value="";
    document.getElementById("GeneroMangaAdd").value="";
    document.getElementById("FechaAdd").value;
  }
  onloadpage();
});






//Para borrar un elemento
document.getElementById("BtnBorrarManga").addEventListener("click",e=>{
  let In1 = document.getElementById("BorrarManga").value;

  if(In1=="")
  {
    alert("Ingrese el nombre del manga");
  }
  else
  {

    var data = {
      nombre: In1
    };
 
    fetch('http://localhost:1330/venta_mangas/mangas', {
        method: 'DELETE', // or 'PUT'
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers:{
            'Content-Type': 'application/json'
        }
    }).then(res => console.log(res.json()))
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response))

    alert("Manga borrado correctamente");
  }
  onloadpage();
});








document.getElementById("apiexternabtn").addEventListener("click",e=>{
  let ciudad = document.getElementById("NCiudad").value;
  if(ciudad=="")
  {
    alert("Ingrese una ciudad");
  }
  else
  {
    let request = new XMLHttpRequest();
    let data;
    let Element = document.getElementById("InfoCiudad");

    request.open('get',`http://api.weatherstack.com/current?access_key=a34cfae803604bdab8806c48e319f90d&query=${ciudad}`);

    if(Element.classList.contains("FORHIDE"))
    {
      Element.classList.remove("FORHIDE");
    }
    request.onload=function(){
      data=JSON.parse(this.response);
      console.log(data.location);
      document.getElementById("InfoCiudad").innerHTML=`
      <p>Ciudad: ${data.location.name}</p>
      <p>Temperatura: ${data.current.temperature}°C</p>`;
    }

    request.send();
  }
})
