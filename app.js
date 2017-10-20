//variable's
let playerScore = document.querySelectorAll('h1');
let dice = document.querySelector('img')
let getPoints = document.querySelector('p');
let roundScore = document.querySelector('.round');
let pRS = 0;
let totalScore=[0,0];
let active = Math.floor(Math.random()*2);
let cursor = document.querySelector('cursor');
let input = document.querySelector('input')
let start =document.querySelector('button')
const sound = new Audio('pop.mp3');
let diceCount = [];


start.addEventListener('click', function () {
function getValue(){
    let score=input.value;
    return score;
}

let playerName = document.querySelectorAll('h3');
playerName[active].classList.add('active');
//paspaudimo metu sugeneruojam atsiiktini sk.
dice.addEventListener('click',function(){
    sound.play();
    let rand = Math.floor(Math.random()*6+1)
    //pakeiciam paveiksleli
    dice.src=`img/${rand}.png`
    //jai iskrenta 2 kartus pridedam 20tasku
    diceCount+=rand;
    if(diceCount[diceCount.length-1] == diceCount[diceCount.length-2]){
        pRS+=rand+15;
    }else{
        pRS+=rand
    }
    //skaiciuojam raundo tasku suma

    roundScore.textContent=pRS;
    //jai iskrenta 1 pakeiciam zaideja ir issaugom jo tasku suma
    if(rand==1){
        changePlayers();
        roundScore.textContent=pRS;
    }
})
getPoints.addEventListener('click', function(){
    totalScore[active]+=pRS;
    playerScore[active].textContent=totalScore[active];
    //laimejimo salyga
    if(totalScore[active]>=getValue()){
        alert(`Player ${active+1} wins the game`);
    }
    //nunulinam raundo taskus
    changePlayers();
    roundScore.textContent='--'
})

function changePlayers() {
    if (pRS != 0) {
        pRS = 0;
        playerName[active].classList.remove('active');
        if (active == 0) {
            active = 1;
        } else {
            active = 0;
        }
        playerName[active].classList.add('active');
        console.log(active);
    }
}
})

