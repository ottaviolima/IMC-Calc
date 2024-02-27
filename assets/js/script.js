// const form = document.getElementById('form');

// form.addEventListener('submit', function(event){
//     event.preventDefault();

//     const weightInput = document.getElementById('weight');
//     const heightInput = document.getElementById('height');

//     const weight = parseFloat(weightInput.value.replace(',', '.'));
//     const height = parseFloat(heightInput.value.replace(',', '.'));

//     if(isNaN(weight) || isNaN(height)) {
//         console.error("Por favor, insira valores válidos para peso e altura.");
//         return;
//     }

//     const bmi = (weight / (height * height)) * 1000;

//     console.log("IMC calculado:", bmi);

//     const value = document.getElementById('value');
//     let description = '';

//     document.getElementById('infos').classList.remove('hidden');

//     value.classList.add('attention');

//     if (bmi < 18.5){
//         description = 'Cuidado! Você está abaixo do peso.';
//         value.classList.remove('normal');
//         value.classList.add('attention');
//     } else if (bmi >= 18.5 && bmi < 25) {
//         description = 'Seu peso está dentro do intervalo saudável.';
//         value.classList.remove('attention');
//         value.classList.add('normal');
//     } else if (bmi >= 25 && bmi < 30) {
//         description = 'Cuidado! Você está acima do peso.';
//         value.classList.remove('normal');
//         value.classList.add('attention');
//     } else {
//         description = 'Cuidado! Você está obeso.';
//         value.classList.remove('normal');
//         value.classList.add('attention');
//     }

//     value.textContent = (bmi).toFixed(2).replace('.', '');
//     document.getElementById('description').textContent = description;
// });

// // Função para adicionar uma vírgula após o segundo dígito
// function adicionarVirgula(bmi) {
//     const value = document.getElementById('value');
//     // Converte o número para uma string
//     var bmiString = bmi.toString();

//     // Insere a vírgula após o segundo dígito
//     var newNumberString = bmiString.slice(0, 1) + "." + bmiString.slice(1);

//     // Converte de volta para número e retorna
//     var numeroComVirgula = adicionarVirgula(bmi);
//     value.textContent = numeroComVirgula;
//     return parseFloat(newNumberString);
// }

const form = document.getElementById('form');

form.addEventListener('submit', function(event){
    event.preventDefault();

    const weightInput = document.getElementById('weight');
    const heightInput = document.getElementById('height');

    const weight = parseFloat(weightInput.value.replace(',', '.'));
    const height = parseFloat(heightInput.value.replace(',', '.'));

    if(isNaN(weight) || isNaN(height)){
        console.error("Por favor, insira valores válidos para peso e altura.");
        return;
    }

    const bmi = (weight / (height * height)) * 10000;

    console.log("IMC calculado:", bmi);

    const value = document.getElementById('value');
    let description = '';

    document.getElementById('infos').classList.remove('hidden');

    value.classList.add('attention');

    if (bmi < 18.5){
        description = 'Cuidado! Você está abaixo do peso.';
        value.classList.remove('normal');
        value.classList.add('attention');
    } else if (bmi >= 18.5 && bmi < 25) {
        description = 'Seu peso está dentro do intervalo saudável.';
        value.classList.remove('attention');
        value.classList.add('normal');
    } else if (bmi >= 25 && bmi < 30) {
        description = 'Cuidado! Você está acima do peso.';
        value.classList.remove('normal');
        value.classList.add('attention');
    } else {
        description = 'Cuidado! Você está obeso.';
        value.classList.remove('normal');
        value.classList.add('attention');
    }

    value.textContent = bmi.toFixed(2);
    document.getElementById('description').textContent = description;
});

