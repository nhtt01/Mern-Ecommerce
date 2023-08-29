const UserService = require("../Services/UserService");
const createUser =async (req,res)=>{
    try {
        console.log(req.body);
        const {name,email,password,confirmPassword,phone} = req.body;
        const reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
        const isCheckEmail = reg.test(email);
        if(!name || !email || !password || !confirmPassword || !phone){
              return res.status(201).json({
                status:"ERROR",
                message: "The Input is required"
            })
        }else if(!isCheckEmail){
            return res.status(201).json({
                status:"ERROR",
                message: "The Input is Email"
            })
        }else if(password != confirmPassword){
            return res.status(201).json({
                status:"ERROR",
                message: "The Input is Password"
            })
        }
       
         const response = await UserService.createUser(req.body);

         return res.status(200).json({
         response
        })
    } catch (error) {
        return res.status(404).json({
            message: error
        })
    }
}
module.exports = {
    createUser
}