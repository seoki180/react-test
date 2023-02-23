
class userStroage{
    static #users = {
        id : ["seoki123","cco1234"],
        passwd : ["1234","567"],
        name : ["석희","서서키"]
    };

    static getUsers(...fields) {
        const users = this.#users
        const newUsers = fields.reduce((newUsers,fields) =>{
            if(users.hasOwnProperty(fields)){
                newUsers[fields] = users[fields]
            }
            return newUsers
        },{})
        return newUsers
    }
    static  

}

module.exports = userStroage