function check() {

	var tamano1Formulario= document.formulario.tamano1.value;
	var tamano2Formulario= document.formulario.tamano2.value;
	var listaArchivo1= document.formulario.opcArc1.value;
	var listaArchivo2= document.formulario.opcArc2.value;
	var tamano; 
	var peso1;
	var peso2;
	var resultado;


		if(listaArchivo1==1){
  			peso= tamano1Formulario;
  			espacio= (tamano1Formulario*1024)/100;
		}
		
		if(listaArchivo1==2){
  				peso1= tamano1Formulario;  				
  				tamano= peso1;		
		}
		
		if(listaArchivo1==3){
  			peso1= tamano1Formulario*1024;
  			tamano=peso1;
		}
		
		if(listaArchivo2==1){
  			peso2= tamano2Formulario;
  		}
		
		if(listaArchivo2==2){
 			 peso2= tamano2Formulario;
		}

		if(listaArchivo2==3){
  			peso2= tamano2Formulario*1024;
		}

		resultado=tamano1Formulario>tamano2Formulario;

		(resultado>0)? alert("PESO UNO ES MAYOR"):alert("PESO DOS ES MAYOR");


	function clear(){
		document.getElementsByName("formulario").reset();
	}

}