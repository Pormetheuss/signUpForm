let confirm=document.querySelector(".confirmI");
let password=document.querySelector(".originalI")
let warning=document.querySelector("span");
btn = document.querySelector("button");

confirm.addEventListener("input",function(){
    let original=document.querySelector(".originalI").value;
    let check=document.querySelector(".confirmI").value;
    if(check==original && check!=""){
        confirm.classList.remove("invalid")
        confirm.classList.add("valid")

        password.classList.remove("invalid")
        password.classList.add("valid")

        warning.innerText="";
    }
    else{
        confirm.classList.remove("valid")
        confirm.classList.remove("invalid")
        confirm.classList.add("invalid")

        password.classList.remove("valid")
        password.classList.remove("invalid")
        password.classList.add("invalid")

        warning.innerText="";
        warning.innerText="*Passwords Do Not Match";
    }
    console.log(1);
})
password.addEventListener("input",function(){
    let original=document.querySelector(".originalI").value;
    let check=document.querySelector(".confirmI").value;
    if(check==original&&check!=""){
        confirm.classList.remove("invalid")
        confirm.classList.add("valid")

        password.classList.remove("invalid")
        password.classList.add("valid")

        warning.innerText="";
    }
    else{
        confirm.classList.remove("valid")
        confirm.classList.remove("invalid")
        confirm.classList.add("invalid")

        password.classList.remove("valid")
        password.classList.remove("invalid")
        password.classList.add("invalid")

        warning.innerText="";
        warning.innerText="*Passwords Do Not Match";
    }
    console.log(1);
})

btn.addEventListener("submit",function(){
    let value = document.querySelector("h2");
    value.innerText="Yay! You made an account!"
    console.log(2);
})
