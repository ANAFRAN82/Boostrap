const enviarDatos=()=>{
    //Datos
    let nombre = document.getElementsByName('txtNombre')[0].value
    let tel= parseInt(document.getElementsByName("txtTel")[0].value);
    let carrera=document.getElementsByName('cmbCarrera')[0].value;
    let semestre=document.getElementsByName('cmbSemestre')[0].value;
    let genero= document.querySelector("input[name='rbGenero']:checked").value;

    //Operacion
    alert(`Nombre: ${nombre}\n
           Telefono: ${tel+1}
           Carrera: ${carrera}
           Semestre ${semestre}
           Genero: ${genero}`);

           console.log("****Ciclo For****")
    for(let i=1;i<=20;i++){
        console.log(i)
    }

    let tipoTrajeta="Efectivo";
    switch(tipoTrajeta){
        case "Credito":
            console.log("Seleccionates CREDITO")
            break;
         case "Efectivo":
            console.log("Seleccionaste efectivo")
            break;
            default:
                console.log("No seleciono")
    }
}
