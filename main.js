let value = " ";
let computerchoice = " ";
let ys = 0;
let cs = 0;
const choices = ['rock', 'paper', 'scissors'];

const submain = (choice) => {
    document.getElementById(choice).onclick = ()=> {
        value = choice;
        computerchoice = choices[Math.floor(Math.random()* 3)]
        compare(value, computerchoice)
        console.log(value,computerchoice)}
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

    