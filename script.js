let counterValue = document.querySelector(".counter__value");
let counterReset = document.querySelector(".counter__reset-button");
let counterDec = document.querySelector(".counter__button--decrease");
let counterInc = document.querySelector(".counter__button--increase");
const audio = new Audio("click.wav");

count = 0;
function updateCounter(){
    // if (count>5) {
    //     count=5;
    // }else if(count<0){
    //     count=0;
    // }
    audio.currentTime=0;
    audio.play();
    counterValue.textContent = count;
}
counterReset.addEventListener("click" , () =>{
    count = 0;
    updateCounter();
});

counterDec.addEventListener("click" , () =>{
    count --;
    updateCounter();
})
counterInc.addEventListener("click" , () =>{
    count ++;
    updateCounter();
});
document.addEventListener("keydown" , (event) =>{
    if (event.key === "ArrowDown" || event.key === "Backspace" || event.key === "Delete" || event.key === "Minus") {
        updateCounter();
        count--;
    }else if (event.key === "ArrowUp" || event.key === "Enter" || event.key === "Plus") {
        updateCounter();
        count++;
    }
    
} )
