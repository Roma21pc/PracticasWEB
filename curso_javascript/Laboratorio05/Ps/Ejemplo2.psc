Algoritmo Ejemplo2
	//definiendo variables
	definir tur, men como texto;
	//inicializando variables
	tur=""; men="";
	//capturando valores
	escribir "Ingrese el turno M o T o N";
	leer tur;
	//condicion
	si(tur="m") Entonces
		men="Mañana";
	SiNo
		si(tur="m") Entonces
			men="Noche";
			SiNo
			si(tur="t") Entonces
				men="Tarde";
			SiNo
			men="No es una letra Valida";
			FinSi
		FinSi
	FinSi
	//mostrando resultados
	escribir "El turno es: ",men;
FinAlgoritmo
