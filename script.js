gsap.registerPlugin(ScrollTrigger)

// ---------------- HERO TYPING ----------------

const typingElement = document.querySelector(".typing")

if(typingElement){

const text = "The Life of a Developer"
let i = 0

function typing(){
if(i < text.length){
typingElement.innerHTML += text.charAt(i)
i++
setTimeout(typing,80)
}
}

typing()

}

// ---------------- SCROLL ANIMATIONS ----------------

const sections = document.querySelectorAll(".section")

if(sections.length > 0){

sections.forEach(section => {

gsap.from(section,{
opacity:0,
y:100,
duration:1,
scrollTrigger:{
trigger:section,
start:"top 80%"
}
})

})

}

// ---------------- PARALLAX ----------------

const parallax = document.querySelector(".parallax-bg")

if(parallax){

gsap.to(".parallax-bg",{
y:200,
scrollTrigger:{
trigger:".hero",
start:"top top",
scrub:true
}
})

}

// ---------------- PROGRESS BAR ----------------

const progressBar = document.querySelector(".progress-bar")

if(progressBar){

window.addEventListener("scroll",()=>{

let scrollTop = document.documentElement.scrollTop
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight

let scrolled = (scrollTop/height)*100

progressBar.style.width = scrolled + "%"

})

}

// ---------------- DEBUGGING BUTTON ----------------

const bugBtn = document.getElementById("bugBtn")

if(bugBtn){

bugBtn.onclick = function(){

const avatar = document.getElementById("devAvatar")
const mood = document.getElementById("mood")
const bugMsg = document.getElementById("bugMsg")

if(avatar) avatar.src="https://cdn-icons-png.flaticon.com/512/4140/4140037.png"
if(mood) mood.innerText="Debugging frustration 😵"
if(bugMsg) bugMsg.innerText="Bug Fixed ✔"

}

}

// ---------------- COUNTDOWN ----------------

const timerElement = document.getElementById("timer")

if(timerElement){

let time = 10

const countdown = setInterval(()=>{

if(time <= 0){
clearInterval(countdown)
timerElement.innerText = "Deadline Missed"
}else{
timerElement.innerText = time
time--
}

},1000)

}

// ---------------- CODE TYPING ----------------

const codeElement = document.getElementById("code")

if(codeElement){

const codeText =
`function deploy(){

console.log("Building project...")

console.log("Fixing bugs...")

console.log("Deploy successful 🚀")

}`

let index = 0

function typeCode(){

if(index < codeText.length){

codeElement.innerHTML += codeText.charAt(index)
index++
setTimeout(typeCode,40)

}

}

typeCode()

}

// ---------------- TERMINAL ----------------

const command = document.getElementById("command")
const output = document.getElementById("output")

if(command && output){

command.addEventListener("keydown",function(e){

if(e.key === "Enter"){

let cmd = command.value
let response = ""

if(cmd === "help") response="commands: help debug deploy coffee"
else if(cmd === "debug") response="searching bugs..."
else if(cmd === "deploy") response="ready to deploy"
else if(cmd === "coffee") response="☕ productivity +100"
else response="command not found"

output.innerHTML += `<div>> ${cmd}</div><div>${response}</div>`

command.value = ""

}

})

}

// ---------------- DEPLOY CONFETTI ----------------

const deployBtn = document.getElementById("deployBtn")

if(deployBtn){

deployBtn.onclick = function(){

confetti({
particleCount:200,
spread:120,
origin:{y:0.6}
})

}

}