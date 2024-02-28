const hours = document.querySelector("#hr")
const minutes = document.querySelector("#min")
const second = document.querySelector("#sec")

let start = document.querySelector("#start")
let reset = document.querySelector("#reset")
let pause = document.querySelector("#pause")

let timeout

start.addEventListener("click", (e)=>{

    //parseInt converts string to int 
    const hr = parseInt(hours.value) || 0
    const min = parseInt(minutes.value) || 0
    const sec = parseInt(second.value) || 0

    console.log(hr)
    console.log(min)
    console.log(sec)

    countDownTime = sec + min * 60 + hr * 60 * 60

    timer(countDownTime)
    updateUI(countDownTime)
})

reset.addEventListener("click", (e) => {
    clearTimeout(timeout)
    hours.value = '00'
    minutes.value = '00'
    second.value = '00'
})

pause.addEventListener("click", (e) => {
    clearTimeout(timeout)
}) 
function timer(countDownTime){
    console.log(countDownTime)
    if(countDownTime === 0)
        return

    countDownTime--

    updateUI(countDownTime)

    timeout = setTimeout(() =>{
        timer(countDownTime)
    }, 1000)
}


// 100 second
// hrs: second/60*60
// min : second/60
// sec : second%60

// 50000 seconds
// hrs: 50000/3600 = 13
// mins : 50000/60 = 8333 which is wrong 
//        50000%3600 gives the remaining mins in the hrs that is pending = 3200
//        3200/60 = 53min
       

function updateUI(countDownTime){
    let hrs = Math.floor(countDownTime / 3600)
    let mins = Math.floor((countDownTime%3600) / 60)
    let secs = Math.floor(countDownTime % 60)

    hours.value = hrs
    minutes.value = mins
    second.value = secs

}
