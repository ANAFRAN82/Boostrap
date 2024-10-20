const enviarDatos=()=>{
    //Datos
    let nombre = document.getElementsByName('txtNombre')[0].value
    let cantidad = parseInt(document.getElementsByName('txtCantidad')[0].value);
    let tipoHamburguesa=document.getElementsByName('cmbTipoHamburguesa')[0].value;
    let tipoPago=document.getElementsByName('cmbTipoPago')[0].value;
    var totalPagar=0;

    //Operacion
    switch(tipoHamburguesa){
        case "Sencilla":
            totalPagar=cantidad*20;
            break;
        case "Doble":
            totalPagar=cantidad*25;
            break; 
        case "Triple":
            totalPagar=cantidad*28;
            break;
            default:
                console.log("No selecciono")
    }
    if(tipoPago==="Tarjeta"){
        totalPagar = totalPagar + totalPagar * 0.05;
    }
    console.log("Nombre del Cliente: "+ nombre + "\n" + "Cantidad de Hamburguesas: "+ cantidad + "\n" +
    "Tipo de Hamburguesa: " + tipoHamburguesa + "\n" + "Tipo de Pago: " + tipoPago + "\n" + "Total a Pagar = $" + totalPagar)

    alert(`Nombre del Cliente: ${nombre}
         Cantidad de Hamburguesas: ${cantidad} 
         Tipo Hamburguesa: ${tipoHamburguesa} 
         Tipo Pago: ${tipoPago} 
         Total a Pagar = $${totalPagar}`);
    
}
