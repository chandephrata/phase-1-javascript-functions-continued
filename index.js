function saturdayFun(activity="roller-skate"){ // define a function using function declaration
    return `This Saturday, I want to ${activity}!`
}
const mondayWork = function(activity="go to the office"){ // defining a function using function expression
    return`This Monday, I will ${activity}.`
    
}
const wrapAdjective= function(design="*"){
    return function(adjective="special"){
    return `You are ${design}${adjective}${design}!`
    //console.log ("You are %a dedicated programmer%!")
 }
}