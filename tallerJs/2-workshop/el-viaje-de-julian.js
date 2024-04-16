
try {
    const destino = prompt('Ingrese el destino');
    const estadia = prompt('Precio de la estadia diaria en dollar $: ');
    let alimentacion = prompt('ingrese cuanto vale la alimentacion diaria en dolar $:');

    let presupuesto = prompt('Ingrese presupuesto');
    let dias = prompt('Ingrese cantidad de dias');

    if (presupuesto > (dias * (estadia + alimentacion))) {
        alert('Julian tiene suficiente dinero');
    } else {
        alert('Ajustar el presupuesto o la duracion del viaje');
    }
} catch (error) {
    console.error(error);
}



