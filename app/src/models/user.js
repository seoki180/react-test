"use strict"
const UserStorage = require('./UserStorage')

class User{
    constructor(body) {
        this.body = body;
    }

    login(){
        const body = this.body
        const {id,passwd} = UserStorage.getUserInfo(body.id,)
        if(id){
            if(id === body.id && passwd === body.passwd){
                return {success : true}
            }
            return {success : false , msg : "wrong password"}
        }
        return {sucess : false , msg : "no such ID"}   
    }

    register() {
        const client = this.body
        const response = UserStorage.save(client)
        return response

    }
}

module.exports = User