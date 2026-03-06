function login(){

let user=document.getElementById("user").value

localStorage.setItem("user",user)

localStorage.setItem("balance",1000)

location="trade.html"

}

function trade(direction){

let amount=parseInt(document.getElementById("amount").value)

let balance=parseInt(localStorage.getItem("balance"))

if(amount>balance){

alert("Not enough balance")

return

}

let start=Math.random()*100

setTimeout(()=>{

let end=Math.random()*100

if(direction=="CALL" && end>start){

alert("WIN")

balance+=amount*0.8

}

else if(direction=="PUT" && end<start){

alert("WIN")

balance+=amount*0.8

}

else{

alert("LOSE")

balance-=amount

}

localStorage.setItem("balance",balance)

document.getElementById("balance").innerText=balance

},5000)

}
