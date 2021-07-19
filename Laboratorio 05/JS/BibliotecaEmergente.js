//creamos una funcion para cuando cargue el documento
function cargar(url,titulo,ancho,alto){
    //declaramos variables para calcular el ancho y alto de la pantalla
    var anc=screen.width;
    var alt=screen.height;
    //alert(anc);
    //alert(alt);
    //declaramos variables para la posicion
    var x=(anc/2)-(ancho/2);
    var y=(alt/2)-(alto/2);
    //alert(x);
    //alert(y);
    window.open(url,titulo, "width="+ancho+", height="+alto+", left="+x+" ,top="+y+", scrollbars=No");
}
//llamamos a la funcion cargar
window.onload=cargar("pagina4.html", "Ventana Emergente", 400,400);