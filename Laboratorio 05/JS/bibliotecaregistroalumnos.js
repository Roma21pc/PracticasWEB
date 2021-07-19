//declaramos las variables para los controles
var txtCod = document.getElementById("txtCod");
var txtNom = document.getElementById("txtNom");
var txtApe = document.getElementById("txtApe");
var txtDni = document.getElementById("txtDni");
var txtFec = document.getElementById("txtFec");
var txtDir = document.getElementById("txtDir");
var cboDistrito = document.getElementById("cboDistrito");
var txtTel = document.getElementById("txtTel");
var txtCel = document.getElementById("txtCel");
var txtCor = document.getElementById("txtCor");
var rbMas = document.getElementById("rbMas");
var rbFem = document.getElementById("rbFem");
var rbOtr = document.getElementById("rbOtr");
var chkEst = document.getElementById("chkEst");
var btnRegistrar = document.getElementById("btnRegistrar");
var btnActualizar = document.getElementById("btnActualizar");
//creamos un procedimiento para cargar el combo
//creamos un procedimiento para registrar
function Registrar() {
   if (txtNom.value == "" || txtNom.value == null) {
    alert("Ingrese sus nombres");
    txtNom.focus();
  } else if (txtApe.value == "" || txtApe.value == null) {
    alert("Ingrese sus apellidos");
    txtApe.focus();
  } else if (txtCor.value == "" || txtCor.value == null) {
    alert ("Ingrese el correo");
    txtCor.focus();
  } else {
    //capturando valores
    var nom = txtNom.value;
    var ape = txtApe.value;
    var dni = txtDni.value;
    var fec = txtFec.value;
    var dir = txtDir.value;
    var dis = cboDistrito.value;
    var tel = txtTel.value;
    var cel = txtCel.value;
    var cor = txtCor.value;
    var sexo = "";
    if (rbMas.checked == true) {
    sexo= "Masculino";
    } else if (rbFem.checked == true) {
    sexo= "Femenino";
    } else if (rbOtr.checked == true) {
    sexo="Otros";
    } else {
    sexo= "";
    }
    var est = "";
    if (chkEst.checked== true)
  }
}