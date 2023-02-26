const userStorage = require("../../models/userStorage")

const output = {
    hello : (req,res) =>{
        res.render('home/index')
    },

    login : (req,res) =>{
        res.render('home/login')
    }
}

const process = {
    login : (req,res) =>{
        const user= new User(req.body)
        // const id = req.body.id
        // const passwd = req.body.passwd


        // const user = userStorage.getUsers("id","passwd")

        // if(user.id.includes(id) && user.passwd.includes(passwd)){
        //     return res.json({
        //         success : true
        //     })
        // }       
        // else{
        //     return res.json({
        //         success : false,
        //         msg : "실패"
        //     })
        // }
    }
}

module.exports = {
    output,
    process
}