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
    fetch("/login",{
        method : 'post',
        headers :{
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(req)
    })
        .then((res) => (res.json()))
        .then((res) => {
            console.log(res)
            if(res.success){
                location.href = "/"
            }
            else{
                alert(res.msg)
            }
        })
        .catch((err) => {
            console.error(new Error("error in login process"))
        })
})