try {
  const list = [];
const articles = [];

const addArticle = (name, price) => {
  article = {
    name,
    price,
  };
  return list.push(article);
};

let initialBug = parseFloat(prompt("Ingresa el presupuesto inicial: "));
let costGen = parseFloat(prompt("Ingresa el costo estimado del viaje: "));

if (isNaN(initialBug) && isNaN(costGen)) {
  alert("Ingresaste un valor no valido");
}

const buget = parseFloat(initialBug) - parseFloat(costGen);

let money = prompt(
  `Su presupuesto es: ${buget} ingrese cual es su umbral a gastar`
);

let want = confirm('Quiere hacer una lista de posibles articulos a agregar');

while (want) {
  if (!isNaN(money) && buget > money) {
    names = prompt("Ingresa el nombre del articulo extra:");
    price = parseFloat(prompt("Ingresa el precio del articulo extra:"));
    if (!isNaN(price)) {
      addArticle(names, price);
    }
  } else {
    alert("evite gastos adicionales para no sobrepasar su presupuesto.");
  } 
  want = confirm('Desea seguir haciendo la listade posibles articulos?');
 }


console.log(`Los articulos que as decidido incluir son:`);
console.table(list);

// let max = Math.max(list.price);
// let min = Math.min(list.price);

let aux = 0;
let go = confirm("Quieres ingresar algun articulo de la anterior lista?");

while (money > aux && go === true) {
  indice = parseInt(
    prompt("Ingrese el indice del articulo que desea ingresar: ")
  );
  articles.push(list[indice]);
  aux += list[indice].price;
  go = confirm("Desea ingresar otro articulo?");
}


if (aux > money) {
  let total = 0;
  alert("Su presupuesto es insuficiente para el viaje");
  articles.forEach((article) => {
    total += article.price;
  });

  console.log(`Su presupuesto a gastar es ${money} y sus articulos superan este monto el total es: ${total}`);
}

console.table(articles);
} catch (error) {
  console.error(error);
}