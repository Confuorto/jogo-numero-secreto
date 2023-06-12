function verificaSeOChutePossuiValorValido(chute){
    const numero = +chute;

    if(verificaSeEhNumero(numero)){
        elementoChute.innerHTML += '<div>Valor invalido</div>';
        return
    }

    if(numeroMaiorOuMenorQueValorPermitido(numero)){
        elementoChute.innerHTML += `<div>Valor invalido: O numero secreto precisa estar entre ${menorValor} e ${maiorValor}</div>`;
        return
    }

    if(numero === numeroSecreto){
        document.body.innerHTML = `
        <h2>Você acertou!</h2>
        <h3>O numero secreto era ${numeroSecreto}</h3>
        <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
        `
    }else if(numero > numeroSecreto){
        elementoChute.innerHTML += `
        <div>O numero secreto é menor <i class="fa-solid fa-square-caret-down"></i></div>
        `
    }else{
        elementoChute.innerHTML += `
        <div>O numero secreto é maior <i class="fa-solid fa-square-caret-up"></i></div>
        `
    }
}

function verificaSeEhNumero(numero) {
    return Number.isNaN(numero);
}

function numeroMaiorOuMenorQueValorPermitido(numero){
    return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener("click", e=>{
    if(e.target.id == 'jogar-novamente'){
        window.location.reload();
    }
})