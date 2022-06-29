let counter=0
const span=document.getElementById("number")
const buttons=Array.from(document.getElementsByClassName("button")) 
console.log(buttons)
buttons.forEach(button=>{
    button.addEventListener("click" ,()=>{
        switch (button.className) {
            case "button increase":
                increaseCounter()
                break;
            case "button decrease":
                decreaseCounter()
                break;
            case "button reset":
                resetCounter()
                break;    
        }

    })
})

const increaseCounter=()=>{
    counter++
    console.log(counter)
    updateDisplay()
}
const decreaseCounter=()=>{
    counter--
    updateDisplay()

}

const resetCounter=()=>{
    counter=0
    updateDisplay()

}
const updateDisplay=()=>{
    span.innerHTML=counter
    if(counter>0){
       
        span.classList.add("positive")
        span.classList.remove("zero")
        console.log(span)
    }
    else if(counter<0){
        span.classList.add("negative")
        span.classList.remove("zero")
        console.log(span)

    }

    else{
        span.classList.add("zero")
        span.classList.remove("positive","negative")
        console.log(span)
    }
}