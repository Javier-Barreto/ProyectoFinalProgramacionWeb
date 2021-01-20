document.getElementById("SHOWADDMANGA").addEventListener("click",e=>{
  let O1 = document.getElementById("DivAgregar");
  let O2 = document.getElementById("DivObtener");
  let O4 = document.getElementById("DivEliminar");
  let O3 = document.getElementById("DivModificar");
  let mangas = document.getElementById("ListOfMangas");

  if(O1.classList.contains("FORHIDE"))
  {
    mangas.innerHTML="";
    O1.classList.remove("FORHIDE");
    O2.classList.add("FORHIDE");
    O3.classList.add("FORHIDE");
    O4.classList.add("FORHIDE");
  }
});


document.getElementById("SHOWFINDMANGA").addEventListener("click",e=>{
  let O1 = document.getElementById("DivAgregar");
  let O2 = document.getElementById("DivObtener");
  let O4 = document.getElementById("DivEliminar");
  let O3 = document.getElementById("DivModificar");

  if(O2.classList.contains("FORHIDE"))
  {
    O2.classList.remove("FORHIDE");
    O1.classList.add("FORHIDE");
    O3.classList.add("FORHIDE");
    O4.classList.add("FORHIDE");
  }
});


document.getElementById("SHOWDELETEMANGA").addEventListener("click",e=>{
  let O1 = document.getElementById("DivAgregar");
  let O2 = document.getElementById("DivObtener");
  let O3 = document.getElementById("DivEliminar");
  let O4 = document.getElementById("DivModificar");
  let mangas = document.getElementById("ListOfMangas");

  if(O3.classList.contains("FORHIDE"))
  {
    mangas.innerHTML="";
    O3.classList.remove("FORHIDE");
    O1.classList.add("FORHIDE");
    O2.classList.add("FORHIDE");
    O4.classList.add("FORHIDE");
  }
});


document.getElementById("SHOWMODMANGA").addEventListener("click",e=>{
  let O1 = document.getElementById("DivAgregar");
  let O2 = document.getElementById("DivObtener");
  let O3 = document.getElementById("DivEliminar");
  let O4 = document.getElementById("DivModificar");
  let mangas = document.getElementById("ListOfMangas");

  if(O4.classList.contains("FORHIDE"))
  {
    mangas.innerHTML="";
    O4.classList.remove("FORHIDE");
    O3.classList.add("FORHIDE");
    O2.classList.add("FORHIDE");
    O1.classList.add("FORHIDE");
  }
});