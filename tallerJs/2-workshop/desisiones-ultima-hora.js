
const articlesRain = [
    article1 = {
        name: 'paraguas',
        weigth: 1.5,
        size: 1.0
    },
    article2 = {
        name: 'botas de lluvia',
        weight: 2,
        size: 2,
    },
    article3 = {
        name: 'chaqueta',
        weight: 2.5,
        size: 3,
    }
];

const articlesSum = [
    article1 = {
        name: 'bloqueador',
        weigth: 0.5,
        size: 0.5
    },
    article2 = {
        name: 'gafas',
        weight: 1,
        size: 1,
    },
    article3 = {
        name: 'gorra',
        weight: 1.5,
        size: 2,
    }
];

const articlesCount = (articles)=>{
    articles.forEach(article =>{
        alert(`Este es uno de los articulos que puedes llevar dado el clima: ${article.name}`);
       });
       return
}

let climate = parseInt(prompt('si el cima es soleado ingresa: 0\nsi el clima es con lluvia ingresa: 1 '));

let spaceBag = parseFloat(prompt('Ingresa el espacio disponible en tu maleta. Si tienes la mitad disponible, ingresa 5.0 Si tienes disponible una cuarta parte, ingresa 2.5'));
let weightBag = parseInt(prompt('Cuanto pesa tu maleta actualmente?'))

let weight = parseInt(prompt('Ingresa cuanto el es peso permitido de la maleta?'))

if (climate === 0){
   let sum = articlesCount(articlesSum);
}if (climate === 1) {
    let rain = articlesCount(articlesRain);
}

