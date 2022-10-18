function PilihanComputer(){
    let comp = Math.random();

    if( comp < 0.34 ) return 'rock';
    if( comp >= 0.34 && comp < 0.67 ) return 'paper';
        return 'scissors';
    
}

function Result(comp, player){
    if( player == comp ) return 'DRAW';
    if( player == 'rock' ) return ( comp == 'scissors' ) ? 'PLAYER 1 WIN' : 'COM WIN';
    if( player == 'scissors' ) return ( comp == 'rock' ) ? 'COM WIN' : 'PLAYER 1 WIN';
    if( player == 'paper' ) return ( comp == 'scissors' ) ? 'COM WIN' : 'PLAYER 1 WIN';
}
function changeBackground(PilihanComputer) {
	let highlight = document.getElementsByClassName('highlight');
	for(let i = 0; i < highlight.length; i++){
        highlight[i].setAttribute('src', 'assets/' + PilihanComputer + '.png')
		highlight[i].style.background = "Green";
	}
}

let pRock = document.querySelector('.rock');
pRock.addEventListener('click', function() {
         let pComputer = PilihanComputer();
         let pPlayer = pRock.className;
         let hasil = Result(pComputer, pPlayer)
         let versus = document.querySelector('.versus');
         versus.setAttribute('src', '../public/assets/' + hasil + '.png');
         
        
}
);

let pPaper = document.querySelector('.paper');
pPaper.addEventListener('click', function() {
         let pComputer = PilihanComputer();
         let pPlayer = pPaper.className;
         let hasil = Result(pComputer, pPlayer)
         let versus = document.querySelector('.versus');
         versus.setAttribute('src', '../public/assets/' + hasil + '.png');
         
        
}
);

let pScissors = document.querySelector('.scissors');
pScissors.addEventListener('click', function() {
         let pComputer = PilihanComputer();
         let pPlayer = pScissors.className;
         let hasil = Result(pComputer, pPlayer)
         let versus = document.querySelector('.versus');
         versus.setAttribute('src', '../public/assets/' + hasil + '.png');
         
        
}
);
let refresh = document.querySelector('.refresh')
       refresh.addEventListener('click', function() {
let versus = document.querySelector('.versus');
    versus.setAttribute('src', '../public/assets/' + 'VS' + '.png');


}
);







