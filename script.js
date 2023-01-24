let n = document.getElementById("txtn")
let tab = document.getElementById("seltab")
let res = document.querySelector('div#res')
let numVet = []
function isNumber(n){
    if(Number(n)>= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}
function inLista(n,vet){
    if(vet.indexOf(Number(n)) !=-1){
        return true
    }else{
        return false
    }
}
function adicionar(){
   
    if(isNumber(n.value) && !inLista(n.value,numVet) ){
        //alert("Tudo OK")
        numVet.push(Number(n.value))
        console.log(numVet)
        
        
        let item = document.createElement('option')
        item.text = `Valor ${n.value} adicionado.`
        tab.appendChild(item)
        res.innerHTML =''
    }else{
        alert("[ERRO] Valor invalido ou já existente")
    }
    n.value = ''
    n.focus()//apagar ao executar
}
function finalizar(){
   if(numVet.length == 0){
    alert("Adicione ao menos um valor antes de finalizar")
   }else{
    let tam = numVet.length
    let maior = numVet[0]
    let menor = numVet[0]
    let soma = 0
    let md = 0
    for (let i in numVet) {
        soma += numVet[i]
        md = soma/numVet.length
        if (numVet[i]>maior) {
           maior = numVet[i]
        }
        if (numVet[i]<menor) {
            menor = numVet[i]
         }
    }
    res.innerHTML = ''
    res.innerHTML += `<p>Tem no total de ${tam} números cadastrados</p>`
    res.innerHTML += `<p>O maior valor foi ${maior}</p>`
    res.innerHTML += `<p>O menor valor foi ${menor}</p>`
    res.innerHTML += `<p>A soma de todos o números foi ${soma}</p>`
    res.innerHTML += `<p>A média dos valores foi ${md}</p>`
   }
}
