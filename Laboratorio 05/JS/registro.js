//Crear un vector que contenga la informacion del registro
var registro=[];

//creamos procedimiento para poder registrar 
function Registrar(nomregistro,aperegistro,corregistro){
    var NuevoRegistro={
        nombre:nomregistro,
        apellido:aperegistro,
        correo:corregistro
    };
    registro.push(NuevoRegistro);
}

//creamos una funcion para mostrar la informacion del registro 
function Mostrar(){
    return registro;
}