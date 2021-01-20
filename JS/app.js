const btnLogin=document.getElementById('BtnLogin');
btnLogin.addEventListener('click',(e)=>{
    let x;
    let bd = JSON.parse(localStorage.getItem("ACTUALUSER"))
    let logind, passwordd;
    logind=document.getElementById("login").value;
    passwordd=document.getElementById("password").value;


    var data = {login:logind,password:passwordd};
    fetch('http://localhost:1330/', {
        method: 'POST',
        body: JSON.stringify(data),
        headers:{
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
    .then(response => x = response)
        bd.Nombre=data.login,
        bd.Loged=true,
        localStorage.setItem("ACTUALUSER",JSON.stringify(bd))   
});


/*const btnAdd=document.getElementById('BtnSave');
btnAdd.addEventListener('click',(e)=>{
    
    let nombred, ciudadd;
    nombred=document.getElementById("nombre").value;
    ciudadd=document.getElementById("ciudad").value;
 
    var data = {nombre:nombred,ciudad:ciudadd};
 
    fetch('http://localhost:1339/api/clientes', {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers:{
            'Content-Type': 'application/json'
        }
    }).then(res => console.log(res.json()))
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));
 
})*/
