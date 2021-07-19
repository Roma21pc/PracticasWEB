//variables para los controles
var txtCod=document.getElementById("txtCod");
var txtNom=document.getElementById("txtNom");
var txtApe=document.getElementById("txtApe");
var txtCor=document.getElementById("txtCor");
var btnRegistrar=document.getElementById("btnRegistrar");
//utilizamos la funcion para registrar del firebase
//function writeUserData(n, a, c) {
//  database.ref("registro/").set ({
//    nombre: n,
//    apellido: a,
//    correo: c,
//   });
// }
//creamos un procedimiento para buscar
function Buscar(codigo) {
  //seleccionamos la tabla que se quiere buscar
  var db = database.ref().child("registro");
  db.once("value", function (snapshot) {
    snapshot.forEach(function (data){
      //declaramos una variable para obtener el ID(KEY) de la tabla 
      var key = data.key;
      //verificar si el codigo es igual al ID de la tabla
      if (key == codigo){
        //declaramos variables para capturar los datos
        var cod = key;
        var nom =data.val().nombre;
        var ape =data.val().apellido;
        var cor =data.val().correo;
        //le asignamos los valores a los controles
        txtCod.value = cod;
        txtNom.value = nom;
        txtApe.value = ape;
        txtCor.value = cor;
      }
    });
  });
}
//creamos un procedimiento para mostrar los datos de la tabla
function Mostrar() {
  //declaramos una variable para contar el numero de filas
  var i = 0;
  //selecciono el tbody de la tabla donde voy a mostrar la informacion
  var tbody = document.querySelector("#tbRegistro tbody");
  tbody.innerHTML = "";
  //seleccionamos la tabla que se quiere mostrar
  var db = database.ref().child("registro");
  db.once("value", function (snapshot){
    if (snapshot.exist()) {
      snapshot.forEach(function (data) {
        var cod = data.key;
        var nom =data.val().nombre;
        var ape =data.val().apellido;
        var cor =data.val().correo;
        //declaramos una variable para las filas
        var fila = tbody.insertRow(i);
        //declaramos las variables para los titulos
        var  titulonom = fila.insertCell(0);
        var  tituloape = fila.insertCell(1);
        var  titulocor = fila.insertCell(2);
        var  tituloact = fila.insertCell(3);
        var  titulobor = fila.insertCell(4);
        //agregamos los valores
        titulonom.innerHTML = nom;
        tituloape.innerHTML = ape;
        titulocor.innerHTML = cor;
        tituloact.innerHTML
        "<a href='#' onclick=Buscar('" +cod + "')>Seleccionar</a>";
        titulobor.innerHTML=
        "<a href='#' onclick=Eliminar('" +cod + "')>Seleccionar</a>";
        tbody.appendChild(fila);
        i++;
      });
    }
  });
}
//llamamos a la funcion Mostrar cuando carga la pagina
window.onload = Mostrar;
//creamos un procedimiento para Limpiar 
function Limpiar(){
  txtNom.value = "";
  txtApe.value = "";
  txtCor.value = "";
  txtNom.focus();
}
//Creamos un procedimiento para registrar
function Registrar () {
  if(txtNom.value == "" || txtNom.value == null) {
    alert("Ingrese sus nombres");
    txtNom.focus ();
    } else if (txtApe.value == "" || txtApe.value == null) {
    alert("Ingrese sus Apellidos");
    txtApe.focus ();
    }else if (txtCor.value == "" || txtCor.value == null) {
        alert("Ingrese el Correo");
        txtCor.focus ();
    } else {
    //capturando valores
    var nom = txtNom.value;
    var ape = txtApe.value;
    var Cor = txtCor.value;
    //llamando la funcion para registrar del Firebase
    //writeUserData
    }
}
//asignamos el procedimiento al boton 
btnRegistrar.addEventListener("click", Registrar);