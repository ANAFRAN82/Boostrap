const enviarDatos=()=>{
    //Datos
    let nombre = document.getElementsByName('txtNombre')[0].value
    let limiteCredito= parseInt(document.getElementsByName('txtLimiteCredito')[0].value);
    let tipoTarjeta=document.getElementsByName('cmbTipoTarjeta')[0].value;
    var aumento=0;

    //Operacion
    switch(tipoTarjeta){
        case "Tipo 1":
            aumento=limiteCredito*0.25;
            break;
        case "Tipo 2":
            aumento=limiteCredito*0.35;
            break;
        case "Tipo 3":
            aumento=limiteCredito*0.40;
            break;
        case "Otro Tipo":
            aumento=limiteCredito*0.50;
            break;
            default:
                alert("No selecciono , ingrese un valor valido")
    }
    console.log("Nombre del Cliente: "+ nombre + "\n" + "Nuevo Limite de Credito = $" + (limiteCredito + aumento))

    alert(`Nombre del Cliente: ${nombre}
         Nuevo Limite de Credito: $${(limiteCredito+aumento)} `);
}
