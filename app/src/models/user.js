
const userStorage = require('./userStorage')

class User{
    constructor(body) {
        this.body = body;
    }
    login(){
        const {id,passwd} = userStorage.getUsers("id",passwd)
        
    }
}

module.exports = User