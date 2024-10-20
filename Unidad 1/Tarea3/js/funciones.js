const enviarDatos=()=>{
    //Datos
    let nombre = document.getElementsByName('txtNombre')[0].value
    let cantidad= parseInt(document.getElementsByName('txtCantidad')[0].value);
    var totalPagar=0;

    //Operacion
    if(cantidad<=2){
        totalPagar=cantidad*10;

    }else if(cantidad<=5){
        cantidad=cantidad-2;
        totalPagar=20 + cantidad*7;
        
    }else if(cantidad<=10){
        cantidad= cantidad-5;
        totalPagar=20+21+cantidad*5;

    }else if(cantidad>10){
        cantidad=cantidad-10;
        totalPagar=20+21+25+cantidad*3;
    }
    console.log("Nombre del Cliente: "+ nombre + "\n"  + "Tarifa a Pagar = $" + totalPagar)

    alert(`Nombre del Cliente: ${nombre}
           Tarifa a Pagar= $${totalPagar}`);
}
