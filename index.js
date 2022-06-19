let randomNumber1 = Math.ceil(Math.random() * 6);
let imgSelect1 = 'images/dice' +randomNumber1+'.png';
//console.log(randomNumber1);
//console.log('images/dice' +randomNumber1+'.png');


let randomNumber2 = Math.ceil(Math.random() * 6);
let imgSelect2 = 'images/dice' +randomNumber2+'.png';
//console.log(randomNumber2);


document.querySelector('.img1').setAttribute('src', imgSelect1);
document.querySelector('.img2').setAttribute('src', imgSelect2);

document.querySelector('h1').innerHTML = result();

function result(){
if(randomNumber1 === randomNumber2){
    return('Draw');
}
else if(randomNumber1 > randomNumber2){
    return('Player 1 wins ');
}
else {
    return('Player 2 wins');
}
}