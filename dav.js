let displayInfo = document.getElementById('d')

function showInfo(event) {
    document.getElementById('info').style.display = 'block'
    event.target.innerHTML = 'hello'
}

displayInfo.addEventListener('click', showInfo)

let see = document.getElementById('sm')
let information = document.getElementById('info')
function seeing(event) {
    information.style.display = 'none'
    event.target.innerHTML = 'display'
}
see.addEventListener('click', seeing)
/*********************************************************************/
/****************************************************************** */

let clicking = document.getElementById('cl')
let moreInfo = document.getElementById('more-info')
function aboutToSee() {
    moreInfo.style.display = 'block'
}
function details() {
    clicking.innerHTML = 'vhim'
}
clicking.addEventListener('click', aboutToSee)
clicking.addEventListener('click', details)


let closeAgain = document.getElementById('cls')

function clsA() {
    moreInfo.style.display = 'none'
}

function backTo() {
    clicking.innerHTML = 'click here'
}

closeAgain.addEventListener('click', clsA)
closeAgain.addEventListener('click', backTo)

/************************************************************************/
/***********************************************************************/

let fortunes = ["A beautiful, smart, and loving person will be coming into your life.",
    "A fresh start will put you on your way.",
    "A golden egg of opportunity falls into your lap this month.",
    "A smile is your personal welcome mat.",
    "All your hard work will soon pay off."
]
let lookman = document.getElementById('l')
let changings = document.getElementById('fff')
function selecting() {
    let randomFortunes = Math.floor(Math.random() * fortunes.length)
    let changings = fortunes[randomFortunes]
    return changings
}

function showFortune() {
    changings.innerHTML = selecting()
    lookman.innerHTML = 'come back the next day' + event.currentTarget
    changings.style.display = 'block'

}
lookman.addEventListener('click', showFortune)

let shout = document.getElementById('nice')
function shutdown() {
    lookman.innerHTML = 'look'
    changings.style.display = 'none'

}


shout.addEventListener('click', shutdown)
/************************************************************************/
/************************************************************************/
let oneC = document.getElementById('oneColor')
let mul = document.getElementById('multiple')

function colorValue() {
    return Math.floor(Math.random() * 256)
}

function colorChange(event) {
    let randomColor = 'rgb(' + colorValue() + ',' + colorValue() + ',' + colorValue() + ')'

    /*event.target.style.backgroundColor = randomColor*/
    event.target.style.backgroundColor = randomColor
    event.target.style.padding = '5em'
    /*oneC.style.padding = '4em'
    mul.style.padding = '4em'*/
}

/*function KuntuChangeYourStyle(event) {
    let randomKuntu = 'rgb(' + colorValue() + ',' + colorValue() + ',' + colorValue() + ')'
    mul.style.backgroundColor = randomKuntu
    event.target.style.padding = '8em'
}*/

oneC.addEventListener('keydown', colorChange)
mul.addEventListener('keyup', colorChange)


