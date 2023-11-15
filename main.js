let value = " ";
let computerchoice = " ";
let ys = 0;
let cs = 0;
const randerUser= document.getElementById('playerscore')
const randerPc= document.getElementById('pcscore')
const userchoice= document.getElementById('user')
const pcchoice= document.getElementById('pc')
const ifpc= document.getElementById('pcwin')
const ifuser= document.getElementById('userwin')
const stat= document.getElementById('stat')
const choices = ['rock', 'paper', 'scissors'];


const submain = (choice) => {
    

        document.getElementById(choice).onclick = ()=> {
            
            value = choice;
            computerchoice = choices[Math.floor(Math.random()* 3)]
            compare(value, computerchoice)
            console.log(value,computerchoice)
            pcchoice.innerHTML = computerchoice
            userchoice.innerHTML = value
            randerUser.innerHTML = ys
            randerPc.innerHTML = cs
            if(cs === 2 ){
                stat.innerHTML = "You lose! HAHAHAHAHAHAHAHAHAHAHAHAHA";
                setTimeout(function(){
                    window.location.reload()
                },3000)

            }else if(ys === 2){
                stat.innerHTML = "You win, GO FUCK YOUR SELF WITH AN UMBRELLA";
                setTimeout(function(){
                    window.location.reload()
                },500)

                
            }
        }      
}

const compare = (a,b) => {

    if (a === b){
        console.log("it's a draw")
    }
    else if(a === "rock" && b === "paper"){cs++}
    else if(a === "rock" && b === "scissors"){ys++}
    else if(a === "paper" && b === "rock"){ys++}
    else if(a === "paper" && b === "scissors"){cs++}
    else if(a === "scissors" && b === "paper"){ys++}
    else if(a === "scissors" && b === "rock"){cs++}
    console.log(`ys: ${ys}, cs: ${cs}`)
        
}

submain(choices[0])
submain(choices[1])
submain(choices[2])

