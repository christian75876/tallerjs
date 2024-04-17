try {
    
const moneySaving = parseFloat(prompt('Ingresa cual va a ser el ahorro final'));
const savingToday = parseFloat(prompt('Cuanto dinero vas ahorrar diario?'));

let days = Math.ceil(moneySaving / savingToday);
alert(`Vamos a ahorrar durante ${days} dias`);

let count = 1;
let summation = 0;
const expenses =[];

while(count <= days){
    let budget = parseFloat(prompt(`Ingresa que presupuesto tienes pensado para el dia ${count}`));
    let budgetDay = budget - savingToday;
    let activities = confirm(`El dia ${count} piensas hacer actividades como salir a comer, comprar un libro, ir a cine?`)
    
    if(activities && summation < budgetDay){
        let activity = confirm(`el dia ${count} saldras a comer afuera?`);
        if(activity && summation < budgetDay){
            let aux = parseFloat(prompt(`Ingresa que cuanto vas a gastar en comida el dia ${count}`));
            summation += aux;
        }
        activity = confirm(`El dia ${count} piensas comprar un libro?`);
        if(activity && summation < budgetDay){
            let aux = parseFloat(prompt(`Ingresa que cuanto vale el libro en el dia ${count}`));
            summation += aux;
        }
        activity = confirm(`El dia ${count} piensas salir a un cine?`);
        if(activity && summation < budgetDay){
            let aux = parseFloat(prompt(`Ingresa que cuanto vas a gastar en el cine el dia ${count}`));
            summation += aux;
        }
    }if(activities && summation > budgetDay){
        alert(`El presupuesto de $${budgetDay} recuerda que ahorras diario $${savingToday} tus gastos el dia ${count} sobrepasaron tu presupuesto por ${summation - budgetDay} `);
    }
    count++
    aux2 = summation
    expenses[count-1] = aux2;
    aux2 = 0;
}

savingTotal = days * savingToday;

alert(`El ahorro total sera de ${savingTotal}`);
console.log('El gato total de los gastos fue por')
console.table(expenses);
} catch (error) {
    console.error(error);
}