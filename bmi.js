const readline = require('readline-sync')

const IMC = () => {

    const questWeight = readline.questionFloat('What’s your weight ?');
    const questHeight = readline.questionFloat('What’s your height ?')

    const calc = questWeight / (questHeight * questHeight);

    if(calc < 18.5) {
        console.log(`O seu IMC é de ${calc} e você está Abaixo do Peso`);
    } if(calc >= 18.5 & calc <24.9) {
        console.log(`O seu IMC é de ${calc} e você está com o peso normal`);
    } if(calc >= 25 & calc < 29.9) {
        console.log(`O seu IMC é de ${calc} e você está Acima do peso (sobrepeso)`);
    }
    if(calc >= 30 & calc < 34.9) {
        console.log(`O seu IMC é de ${calc} e você está	Obesidade grau I`);
    } if(calc >= 35 & calc < 39.9) {
        console.log(`O seu IMC é de ${calc} e você está	Obesidade grau II`);
    }if(calc >= 40) {
        console.log(`O seu IMC é de ${calc} e você está	Obesidade grau III`);
    }
    console.log('imprimindo calc teste',calc);
    return calc
}
IMC()
