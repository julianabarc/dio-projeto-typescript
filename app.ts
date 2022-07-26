let button = document.getElementById('button');
let input1 = document.getElementById('input1') as HTMLInputElement;
let input2 = document.getElementById('input2') as HTMLInputElement;


function desafioLogico(numero1: number, numero2: number) {
    if (numero1===19 && numero2===17) {
        alert('Parabéns! A resposta está certa.');
    } else {
        alert('A resposta certa é 19 e 17.');
    }
};

if (button){
    button.addEventListener('click', () => {
        if (input1 && input2){
        desafioLogico(Number(input1.value), Number(input2.value))
        }
    })
};
