'use strict'

const startText=document.querySelector('.startText')
const startBtn=document.querySelector('.submit')

const buttonHover= function(){
    startBtn.style.backgroundColor = '#3b59ac';
    startBtn.style.color="white";
    
}
const buttonNotHover=function(){
    startBtn.style.backgroundColor='#1f5aff'
    startBtn.style.color="white";
}

const activeButton= function(){
    if(startText.value=="start"){
        startBtn.style.color="white";
        startBtn.style.backgroundColor = '#1f5aff';
        startBtn.addEventListener('mouseover',buttonHover)
        startBtn.addEventListener('mouseout',buttonNotHover)
        startBtn.style.cursor='pointer';
    }
    else{
        startBtn.style.color="#a0a0a0";
        startBtn.style.backgroundColor = '#dedede';
        startBtn.removeEventListener('mouseover',buttonHover)
        startBtn.removeEventListener('mouseout',buttonNotHover)
        startBtn.style.cursor='text';
    }
}
startText.addEventListener('keyup',activeButton)
// startBtn.removeEventListener('mouseover',activeButton)
// startBtn.removeEventListener('mouseout',activeButton)


// if (activeButton()){
// if(startText.value=="start"){
// startBtn.addEventListener('mouseover',buttonHover)
// startBtn.addEventListener('mouseout',buttonNotHover)
// }
// if(startText.textContent==="start")
//     startBtn.style.color='white';
// //background_color = '#dedede';