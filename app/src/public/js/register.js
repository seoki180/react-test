
"use strict";

const _id = document.querySelector("#id")
const _passwd = document.querySelector("#passwd")
const _name  = document.querySelector("#name")
const _registerbtn = document.querySelector("#button")



_registerbtn.addEventListener("click",() => {
    const req = {
        id : _id.value,
        passwd : _passwd.value,
        name : _name.value
    }

    fetch("/register",{
        method : 'post',
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(req)
    })
        .then((res) => (res.json()))
        .then((res) => {
            console.log(res)
            if(res.success){
                location.href = "/login"
            }
            else{
                alert(res.msg)
            }
        })
        .catch((err) => {
            console.error(new Error("error in register process"))
        })
})