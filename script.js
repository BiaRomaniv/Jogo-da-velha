
let jogador = "X";
jogadorSelecionado.innerHTML = jogador;

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
    
    checkSequence();
    mudaJogador(jogador); 
                               
}              

function mudaJogador(valor) {
    jogador = valor;    
    jogadorSelecionado.innerHTML = jogador;
}

function checkSequence() {
    let square11 = document.getElementById(1)
    let square12 = document.getElementById(2)
    let square13 = document.getElementById(3)
    let square21 = document.getElementById(4)
    let square22 = document.getElementById(5)
    let square23 = document.getElementById(6)
    let square31 = document.getElementById(7)
    let square32 = document.getElementById(8)
    let square33 = document.getElementById(9)

    if(square11.innerHTML !== "-" && square11.innerHTML === square12.innerHTML && square12.innerHTML === square13.innerHTML){
        square11.style.background = "aqua"
        square12.style.background = "aqua"
        square13.style.background = "aqua"
        checkWinner(square11.innerHTML)        
    }
    if(square21.innerHTML !== "-" && square21.innerHTML === square22.innerHTML && square22.innerHTML === square23.innerHTML){
        square21.style.background = "aqua"
        square22.style.background = "aqua"
        square23.style.background = "aqua"
        checkWinner(square21.innerHTML)        
    }
    if(square31.innerHTML !== "-" && square31.innerHTML === square32.innerHTML && square32.innerHTML === square33.innerHTML){
        square31.style.background = "aqua"
        square32.style.background = "aqua"
        square33.style.background = "aqua"
        checkWinner(square31.innerHTML)        
    }
    if(square11.innerHTML !== "-" && square11.innerHTML === square21.innerHTML && square21.innerHTML === square31.innerHTML){
        square11.style.background = "aqua"
        square21.style.background = "aqua"
        square31.style.background = "aqua"
        checkWinner(square11.innerHTML)      
    }
    if(square12.innerHTML !== "-" && square12.innerHTML === square22.innerHTML && square22.innerHTML === square32.innerHTML){
        square12.style.background = "aqua"
        square22.style.background = "aqua"
        square32.style.background = "aqua"
        checkWinner(square12.innerHTML)        
    }
    if(square13.innerHTML !== "-" && square13.innerHTML === square23.innerHTML && square23.innerHTML === square33.innerHTML){
        square13.style.background = "aqua"
        square23.style.background = "aqua"
        square33.style.background = "aqua"
        checkWinner(square13.innerHTML)       
    }
    if(square11.innerHTML !== "-" && square11.innerHTML === square22.innerHTML && square22.innerHTML === square33.innerHTML){
        square11.style.background = "aqua"
        square22.style.background = "aqua"
        square33.style.background = "aqua"
        checkWinner(square11.innerHTML)        
    }
    if(square13.innerHTML !== "-" && square13.innerHTML === square22.innerHTML && square22.innerHTML === square31.innerHTML){
        square13.style.background = "aqua"
        square22.style.background = "aqua"
        square31.style.background = "aqua"
        checkWinner(square13.innerHTML) 
    }
}

function checkWinner(square) {
    vencedor = square
    vencedorSelecionado.innerHTML = vencedor           
}

function reiniciar() {

   for( i=1; i<=9 ; i++) {
    var square = document.getElementById(i)
    square.innerHTML = "-"
    square.style.color = "gray"
    square.style.background = "gray"            
    }

    jogadorSelecionado.innerHTML = "X"
    vencedorSelecionado.innerHTML = ""
    jogador = "X"
}