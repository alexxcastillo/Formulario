//funcion que nos dice si esta seleccionado el checkbox
document.getElementById("check").addEventListener("click", mostrarContraseña);

function mostrarContraseña(){
    var check=document.getElementById("check");
    var pass=document.getElementById("pass2");
    if(check.checked==true){
        pass.type="text";
    }else{
        pass.type="password";
    }
 
    
}

document.getElementById("registrarse").addEventListener("click",function(){
    
    document.getElementById("registrar").style.display="block";
    document.getElementById("log").style.display="none";
});

document.getElementById("volver").addEventListener("click",function(){
    
    document.getElementById("log").style.display="block";
    document.getElementById("registrar").style.display="none";
});

/*document.getElementById("enviar2").addEventListener("click",validar2);

function validar2(){
    var correo=document.getElementById("correo2").value;
    var expresion=/\w+@\w+\.+[a-z]/;
    var expresion2= /^[9|6]{1}([\d]{2}[-]*){3}[\d]{2}$/;
    
    if(expresion.test(correo)||expresion2.test(correo)){
    document.getElementById("log").style.display="block";
    
}else{
    window.alert("El correo introducido no es válido...");
    
}
    
}*/

//window.onload=iniciar;

//function iniciar(){
    document.getElementById("enviar1").addEventListener("click",validar);
//}
document.getElementById("log").style.display="block";

function validarNombre(){
    var name=document.getElementById("nombre").value;
    
    if(name==""){
        error("Debe rellenar el campo Nombre");
        return false;
    }return true;
    
}

function validarApellido(){
    var apellidos=document.getElementById("apellidos").value;
    
    if(apellidos==""){
         error("Debe rellenar el campo Apellidos");
        return false;
    }return true;
    
}

function validarPass(){
    var p1 = document.getElementById("pass1").value;
    var expresion=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/;
    
    if(!expresion.test(p1)){
        error("Contraseña introducida no válida");
        return false;
    }
    setCookie("Contraseña",p1,1);
    
    return true;

    
   
	
}


function validarPass2(){
    var p1 = document.getElementById("pass1").value;
    var p2 = document.getElementById("cpass").value;
    
    if (p1 != p2) {   
        error("Las contraseñas deben de coincidir");
        return false;
    }
    
    return true;
}

function validarMail(){
    var correo=document.getElementById("correo").value;
    var expresion=/\w+@\w+\.+[a-z]/;
    var expresion2= /^[9|6]{1}([\d]{2}[-]*){3}[\d]{2}$/;
    
    if(expresion.test(correo)||expresion2.test(correo)){
          setCookie("Correo",correo,1);
    
        return true;
        
    
    }
    error("El correo introducido no es válido.");
    return false;
    
    
    
}

function error(mensaje){
    document.getElementById("mensajeError").style.display="block";
    document.getElementById("mensajeError").innerHTML=mensaje;
    document.getElementById("mensajeError").className="error";
        
        
}


function validar(e){
    if(validarNombre() && validarApellido() && validarMail() && validarPass() && validarPass2()){
        //Esto es para activar un mensaje de SE HA REGISTRADO CORRECTAMENTE
        document.getElementById("log").style.display="block";
        document.getElementById("registrar").style.display="none";
         document.getElementById("c").innerHTML="Se ha registrado correctamente";
        document.getElementById("c").style.display="block";
        document.getElementById("c").className="confirm";
        //a=document.cookie;
        //alert(a);
        return true;
        //alert("Se ha registrado correctamente");
        
    }else{
        e.preventDefault();
        
        return false;
    }
    
}

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
function eliminarCookie(cname) {
  return document.cookie = cname + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}



//document.getElementById("enviar2").addEventListener("click",comprobar);

function comprobar(){
    var a=getCookie("Correo");
    var b=getCookie("Contraseña");
    
    
    if(document.getElementById("correo2").value==a && document.getElementById("pass2").value==b){
    document.getElementById("conect").style.display="block";
    document.getElementById("log").style.display="none";
    document.getElementById("a").innerHTML="Bienvenido "+document.getElementById("nombre").value+" "+document.getElementById("apellidos").value+" has iniciado sesión con éxito...";
        
    }else{
        document.getElementById("c").innerHTML="No se ha podido establecer conexion, revise los datos...";
        document.getElementById("c").className="error";
        
    }
   
    
}

//document.getElementById("desconect").addEventListener("click",desconectar);

function desconectar(){
    eliminarCookie("Correo");
    eliminarCookie("Contraseña");
    document.getElementById("f1").reset();
    document.getElementById("f2").reset();
    document.getElementById("f3").reset();
    document.getElementById("log").style.display="block";
    document.getElementById("conect").style.display="none";
    document.getElementById("c").innerHTML="Se ha desconectado con éxito";
     document.getElementById("c").className="confirm";
    document.getElementById("mensajeError").style.display="none";
    
    
}

document.getElementById("volver").addEventListener("click",function(){
    
    document.getElementById("c").style.display="none";
})













