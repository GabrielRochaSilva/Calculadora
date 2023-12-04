function insert(num){
    var numero = document.getElementById('result').innerHTML; 
    document.getElementById('result').innerHTML = numero + num; 
}

function apagar(){
    document.getElementById('result').innerHTML = "";
}

function calcular(){
    var resultado =  document.getElementById('result').innerHTML;

    if (resultado) {
        document.getElementById('result').innerHTML = eval(resultado);
    }else{
        resultado =  document.getElementById('result').innerHTML = "Nenhum resultado"; 
    }
}