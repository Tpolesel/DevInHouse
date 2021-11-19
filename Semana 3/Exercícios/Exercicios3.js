// Exercício 1
let botao1 = document.getElementById('exercicio1s3')

botao1.addEventListener("click",function(){
let dataNascimento = document.getElementById('datas3').value
let dataAtual = new Date();
let resposta = document.getElementById('respostas3')

let anoNascimentoQuebrado = dataNascimento.split("-")
let diaNascimento = parseInt(anoNascimentoQuebrado[2]);
let mesNascimento = parseInt(anoNascimentoQuebrado[1]) -1;
let anoNascimento = parseInt(anoNascimentoQuebrado[0]);
let diaAtual = dataAtual.getDate()
let mesAtual = dataAtual.getMonth()
let anoAtual = dataAtual.getFullYear()

let difAno = anoAtual - anoNascimento;
let difMes = mesAtual - mesNascimento;
let difDia = diaAtual - diaNascimento;


console.log (difAno, difDia, difMes)

if(difMes < 0){
    let idade = difAno -1;
    resposta.value = `Sua idade é ${idade}`;
    console.log("1");
} else if(difMes > 0){
    resposta.value = `Sua idade é ${difAno}`;
    console.log("2");
}else{
    if(difDia < 0){
        let idade = difAno -1;
        resposta.value = `Sua idade é ${idade}`;
        console.log("3");
    }
    else if(difDia > 0){
        resposta.value = `Sua idade é ${difAno}`;
        console.log("4");
    }else {
        resposta.value =` Parabéns, hoje voce completa ${difAno}`;
        console.log("5");
    }
}
})

//Exercício 2
let mais = document.getElementById('mais')
let menos = document.getElementById('menos')
let asterisco = document.getElementById('multiplicacao')
let barra = document.getElementById('divisao')

mais.addEventListener("click", function(){
    let numero1 = document.getElementById('number1').value
    let numero2 = document.getElementById('number2').value
    let valor1 = parseInt(numero1)
    let valor2 = parseInt(numero2)
    let calculo = valor1 + valor2
    document.getElementById('respostas32').value = calculo

})
menos.addEventListener("click", function(){
    let numero1 = document.getElementById('number1').value
    let numero2 = document.getElementById('number2').value
    let valor1 = parseInt(numero1)
    let valor2 = parseInt(numero2)
    let calculo = valor1 - valor2
    document.getElementById('respostas32').value = calculo

})
asterisco.addEventListener("click", function(){
    let numero1 = document.getElementById('number1').value
    let numero2 = document.getElementById('number2').value
    let valor1 = parseInt(numero1)
    let valor2 = parseInt(numero2)
    let calculo = valor1 * valor2
    document.getElementById('respostas32').value = calculo

})
barra.addEventListener("click", function(){
    let numero1 = document.getElementById('number1').value
    let numero2 = document.getElementById('number2').value
    let valor1 = parseInt(numero1)
    let valor2 = parseInt(numero2)
    let calculo = valor1 / valor2
    document.getElementById('respostas32').value = calculo

})

//Exercício 3
let botaoValida = document.getElementById('verificador');

botaoValida.addEventListener("click", function(){
    let numero3 = document.getElementById('number3').value;
    let valor3 = parseInt(numero3);
    let par = valor3%2

    if(par == 0){
        document.getElementById('validacao').value = `O número ${valor3} é par`
    }
    else{
        document.getElementById('validacao').value = `O número ${valor3} é impar`
    }
})

//Exercício 4
let data = new Date();
let hora = data.getHours()
let minutos = data.getMinutes("")
document.getElementById('horario').value = `Você acessou as ${hora}:${minutos}`

//Exercício 5
let variavel = setInterval(relogio, 1000);

function relogio() {
  let d = new Date();
  let t = d.toLocaleTimeString().split(":")
  let h = t[0];
  let m = t[1];
  let s = t[2];
  document.getElementById("horarioAtual").value = `Agora são ${h}:${m}`
}

//Exercicio 6
/* let data2 = new Date();
let diaHoje = data2.getDate();
let mesHoje = data2.getMonth(); */
let atualiza = document.getElementById('datehoje')
atualiza.addEventListener("change", function(){

var str = document.getElementById('datehoje').value;
var date = new Date(str.split('/').reverse().join('/'));
let diaHoje = date.getDate();
let mesHoje = date.getMonth();
console.log(diaHoje)
 
let estacao = document.getElementById('estacao');
let verao = document.getElementById('verao')
let inverno = document.getElementById('inverno')
let outono = document.getElementById('outono')
let primavera = document.getElementById('primavera')

if (mesHoje +1 == 4 || mesHoje +1 == 5){
    estacao.innerHTML = "Outono"
    outono.style.display = "block"
    verao.style.display = "none";
    primavera.style.display = "none";
    inverno.style.display = "none";
} else if(mesHoje +1 == 1 || mesHoje +1 == 2){
    estacao.innerHTML = "verão"
    verao.style.display = "block"
    outono.style.display = "none";
    primavera.style.display = "none";
    inverno.style.display = "none";
}else if (mesHoje +1 == 10 || mesHoje +1 == 11){
    estacao.innerHTML = "primavera"
    primavera.style.display = "block"
    verao.style.display = "none";
    outono.style.display = "none";
    inverno.style.display = "none";
}else if (mesHoje +1 == 7 || mesHoje +1 == 8){
    estacao.innerHTML = "inverno"
    inverno.style.display = "block"
    verao.style.display = "none";
    primavera.style.display = "none";
    outono.style.display = "none";
}else if(mesHoje == 3){
    if(diaHoje < 21){
        estacao.innerHTML = "Outono"
        outono.style.display = "block"
        verao.style.display = "none";
        primavera.style.display = "none";
        inverno.style.display = "none";
    }else{
        estacao.innerHTML = "verão"
        verao.style.display = "block"
        outono.style.display = "none";
        primavera.style.display = "none";
        inverno.style.display = "none";
    }
}else if(mesHoje == 6){
    if(diaHoje < 21){
        estacao.innerHTML = "inverno"
        inverno.style.display = "block"
        verao.style.display = "none";
        primavera.style.display = "none";
        outono.style.display = "none";
    }else{
        estacao.innerHTML = "Outono"
        outono.style.display = "block"
        verao.style.display = "none";
        primavera.style.display = "none";
        inverno.style.display = "none";
    }
}else if(mesHoje == 9){
    if(diaHoje < 21){
        estacao.innerHTML = "primavera"
        primavera.style.display = "block"
        verao.style.display = "none";
        outono.style.display = "none";
        inverno.style.display = "none";
    }else{
        estacao.innerHTML = "inverno"
        inverno.style.display = "block"
        verao.style.display = "none";
        primavera.style.display = "none";
        outono.style.display = "none";
    }
}else if(mesHoje == 12){
    if(diaHoje < 21){
        estacao.innerHTML = "verão"
        verao.style.display = "block"
        outono.style.display = "none";
        primavera.style.display = "none";
        inverno.style.display = "none";
    }else{
        estacao.innerHTML = "primavera"
        primavera.style.display = "block"
        verao.style.display = "none";
        outono.style.display = "none";
        inverno.style.display = "none";
    }
    }
})

// Exercicio 7

let valores = [] 
let botaoAdd = document.getElementById('botaoAdd')
botaoAdd.addEventListener("click", function(){
    let novoItem = document.getElementById('novoItem').value
    
        if(novoItem == ""){
        window.alert("Por favor, insira um valor valido")
    }else{
    let lista = document.getElementById('minhaLista')
    let novaLinha = document.createElement('li')
    let valorLinha = document.createTextNode(novoItem)

    novaLinha.classList.add("linha")
    novaLinha.appendChild(valorLinha)
    lista.appendChild(novaLinha)
    valores.push(novoItem)
    document.getElementById('novoItem').value = "";
    window.alert(valores)
   
}
})

// Exercício 8

let salvarLs = document.getElementById('salvar')
salvarLs.addEventListener("click", function(){
    localStorage.setItem("valores", valores)
})

// Exercício 9

if(localStorage.length > 0){
    let valoresLs = Object.values(localStorage)[0].split(',')
    for(let i = 0; i< valoresLs.length; i++){
        let lista = document.getElementById('minhaLista')
        let novaLinha = document.createElement('li')
        let valorLinha = document.createTextNode(valoresLs[i])
    
        novaLinha.classList.add("linha")
        novaLinha.appendChild(valorLinha)
        lista.appendChild(novaLinha)
    }

}

// Exercício 10

let botaoProgA = document.getElementById('progA')
let botaoProgG = document.getElementById('progG')

botaoProgA.addEventListener("click", function(){
    let valorInicial = document.getElementById('valorInicial').value;
    let raiz = document.getElementById('raiz').value;
    let prog = [];
    for(let i = 0; i<10; i++){
        prog.push(valorInicial)
        let soma = parseInt(valorInicial) + parseInt(raiz)
        valorInicial = soma
    }
    window.alert(`A sua P.A é ${prog}`)
})
botaoProgG.addEventListener("click", function(){
    let valorInicial = document.getElementById('valorInicial').value;
    let raiz = document.getElementById('raiz').value;
    let prog = [];
    for(let i = 0; i<10; i++){
        prog.push(valorInicial)
        let soma = valorInicial * raiz
        valorInicial = soma
    }
    window.alert(`A sua P.G é ${prog}`)
})
