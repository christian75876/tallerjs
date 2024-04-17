
const articlesRain = [
    article1 = {
        name: 'paraguas',
        weigth: 3,
        size: 1
    },
    article2 = {
        name: 'botas de lluvia',
        weight: 2,
        size: 2,
    },
    article3 = {
        name: 'chaqueta',
        weight: 2,
        size: 3,
    }
];

const articlesSum = [
    article1 = {
        name: 'bloqueador',
        weight: 2,
        size: 2,
    },
    article2 = {
        name: 'gafas',
        weight: 1,
        size: 1,
    },
    article3 = {
        name: 'gorra',
        weight: 3,
        size: 2,
    }
];

const listArticles = [];

const articlesCount = (articles) => {
    articles.forEach(article => {
        alert(`Este es uno de los articulos que puedes llevar dado el clima: ${article.name}`);
    });
    return articles;
}

const addArticles = (option, aux, weightBag, weight, spaceBag) => {
    while (option && weightBag < weight && spaceBag >= 0) {
        let article = parseInt(prompt('Escoge el numero del indice del aticulo que deseas agregar'));
        listArticles.push(aux[article]);
        weightBag = addingSubs(true, weightBag, aux[article].weight)
        spaceBag = addingSubs(false, spaceBag, aux[article].size)  //----> Imperativa
        // weightBag += aux[article].weight;
        // spaceBag -= aux[article].size;  ----> Declarativa
        console.log(weightBag);
        option = confirm('Deseas agregar alguno de esto articulos?');
    }
    if (weightBag > weight || spaceBag <= 0) {
        alert('As alcanzado el limite permitido de la maleta');
    }
    return listArticles;
}

const fun = (aux) => {
    console.table(aux);
    let option = confirm('Deseas agregar alguno de esto articulos?');
    let result = addArticles(option, aux, weightBag, weight, spaceBag);
    alert(`Sus articulos agregados son: revise consola`)
    console.table(listArticles);

}

function addingSubs(flag, accum, accumValue) {
    return flag ? accum + accumValue : accum - accumValue
}

alert('Solo digitar numeros para evitar el cierre del programa ')

let climate = parseInt(prompt('si el cima es soleado ingresa: 0\nsi el clima es con lluvia ingresa: 1 '));

let spaceBag = parseFloat(prompt('Ingresa cuantos compartimientos tienes?'));
let weightBag = parseInt(prompt('Cuanto pesa tu maleta actualmente?'));

let weight = parseInt(prompt('Ingresa cuanto el es peso permitido para la maleta?'));

if (climate === 0 && !isNaN(climate)) {
    let aux = articlesCount(articlesSum);
    fun(aux);

} if (climate === 1 && !isNaN(climate)) {
    aux = articlesCount(articlesRain);
    fun(aux);
} if (isNaN(climate) || isNaN(spaceBag) || isNaN(weightBag) || isNaN(weight)) {
    alert('As ingresado un valor no valido se cierra el programa');
    console.error('SE ROMPIO');
}




