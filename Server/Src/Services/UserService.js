const User = require("../models/UserModel");
const createUser = (newUser)=>{
    console.log(newUser)
    return new Promise( async(resolve,reject)=>{
        const {name,email,password,confirmPassword,phone} = newUser;
        console.log(newUser)
        try {
            const createdUser = await User.create({
                name,email,password,confirmPassword,phone
            })
            if(createdUser){
                resolve({
                    status:"OK",
                    message: "SUCCESS",
                    data :  createdUser
                }) 
            }
           
        } catch (error) {
            reject(error);
        }
    })
}

module.exports = {createUser};