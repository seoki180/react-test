class UserStroage{
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

    static getUserInfo(id) {
        const users = this.#users
        const idx = users.id.indexOf(id)
        const userKeys = Object.keys(users)
        const userInfo = userKeys.reduce((newUser,info) =>{
            newUser[info] = users[info][idx]
            return newUser
        },{})
        return userInfo
    }

    static save(userInfo){
        const user = this.#users
        user.id.push(userInfo.id)
        user.passwd.push(userInfo.passwd)
        user.name.push(userInfo.name)
        console.log(user)
        return {success: true}
    } 
}

module.exports = UserStroage