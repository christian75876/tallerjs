try {

  const listSouvenir = [];

  const souvenir = (nombre, precio,) => {
    disponibilidad = (typeof (nombre) == 'string' && typeof (precio) == 'number')
    if (disponibilidad) {
      souvenirAdd = {
        nombre,
        precio,
        disponibilidad,
      }
    } else {
      souvenirAdd = error('ingreso un valor no valido el souvenir no esta disponible');
    }
    return souvenirAdd;
  }

  const addSouvenir = (numbers) => {
    for (let i = 0; i < numbers; i++) {
      let name = prompt('Ingrese el nombre del souvenir');
      let price = parseFloat(prompt('Ingrese el valor'));
      let newSouvenir = souvenir(name, price);
      listSouvenir.push(newSouvenir);
    }
  }

  let evento = prompt('Desea agregar un souvenir a la lista? si para continuar');
  let quantity = parseInt(prompt('Ingrese la cantidad de souvenir a añadir: '));


  if (evento == 'si' && typeof (quantity) == 'number') {
    addSouvenir(quantity);
  }

  console.table(listSouvenir);

  let aux = 0;

  const newListSuvenir = [];

  for (let i = 0; i < quantity; i++) {
    let element = parseInt(prompt('Escoja que souvenir desea llevar con el numero del indice de la tabla: '));
    newListSuvenir.push(listSouvenir[element]);
  }
  console.log('Tu lista de souvenir es:');
  console.table(newListSuvenir);

} catch (error) {
  console.error(error);
}