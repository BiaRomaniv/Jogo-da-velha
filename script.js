
    let jogador = "X";
    jogadorSelecionado.innerHTML = jogador;
/* não esquecer o parametro dentro da função */
function play(id) {
    
    let square = document.getElementById(id)
    if (square.innerHTML === "-") {
        square.innerHTML = jogador;
        square.style.color = "#000"            
        if( jogador === "X"){
            jogador = "O"
        } else {
            jogador = "X"
        }   
    }    
    mudaJogador(jogador); 
                               
    }              

function mudaJogador(valor) {
    jogador = valor;    
    jogadorSelecionado.innerHTML = jogador;
}

function reiniciar() {
    for( i=1; i<=9 ; i++) {
        var square = document.getElementById(i)
        square.innerHTML = "-"
        square.style.color = "gray"
        jogadorSelecionado.innerHTML = "X"
    }
    
}

function verificaGanhador() {
  /*   square
   if(document.getElementById(1).innerHTML === document.getElementById(2).innerHTML && document.getElementById(2).innerHTML === document.getElementById(3).innerHTML ) {
        */
   
    for( i=1; i<=9 ; i++) {
        var square = document.getElementById(i).innerHTML
        
    }
}