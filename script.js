function login(){

let user = document.getElementById("username").value;

if(user==""){
alert("Enter username");
return;
}

localStorage.setItem("user",user);

if(!localStorage.getItem(user+"_balance")){
localStorage.setItem(user+"_balance",100);
}

window.location="dashboard.html";

}
