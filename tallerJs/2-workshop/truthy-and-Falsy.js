try {
    
//La Evaluación de Julian

let energy = parseInt(prompt('Ingrese su nivel de energia en valor numerico de 1 a 10'));
let job = confirm('Tienes trabajos pendientes?');
let climate = confirm('Hoy es un buen clima?');

if(!isNaN(energy) && energy <= 5 && job != true){
    alert('No tienes trabajos pendientes y tienes poca energia !Puedes descansar');
}if((!isNaN(energy) && energy <= 5 && job == true)){
    alert('Tienes poca enérgia pero debes trabajar!');
}else{
    alert('Ingresaste un valor no valido en tu nivel de energia');
}
if(climate){
    alert('El clima es muy bueno para cumplir con la meta hoy!');
}else{
    alert('El clima no es muy bueno pero debemos cumplir con las metas hoy!!!');
}

} catch (error) {
    console.error(error);
}