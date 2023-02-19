"use strict"
console.log("hello")

const _id = document.querySelector("#id")
const _passwd = document.querySelector("#passwd")
const _loginbtn = document.querySelector("button")

_loginbtn.addEventListener("click",() => {
    const req = {
        id : _id.value,
        passwd : _passwd.value
    }
    console.log(req)
    fetch("/login",{
        method : 'post',
        headers :{
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(req)
    })
})