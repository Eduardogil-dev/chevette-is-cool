let valor = 0;
let resposta = 500;

const botao = document.getElementById('butao');
const valortela = document.getElementById('valortela');
const vender = document.getElementById('vender');


botao.addEventListener('click', () =>{
    valor += 1;
    valortela.textContent = valor;
})

vender.addEventListener('click', () => {
    if (valor!== 0) {
        valor -= 1;
        valortela.textContent = valor;
    }
})

setInterval(() => {
    if(valor!==0){
        valor -= 1;
        valortela.textContent = valor;
    }
}, 1000);


setInterval(() =>{
    valor +=1;
    valortela.textContent = valor;
},resposta);