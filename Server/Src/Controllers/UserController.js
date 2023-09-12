const UserService = require('../Services/UserService')
const createUser = async (req, res) => {
    try {
        console.log("USerController: ");
        console.log(req.body);
        const { name, email, password, confirmPassword, phone } = req.body
        const reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
        const isCheckEmail = reg.test(email)
        if (!email || !password || !confirmPassword) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required'
            })
        } else if (!isCheckEmail) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is email'
            })
        } else if (password !== confirmPassword) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The password is equal confirmPassword'
            })
        }
        console.log("TEST 1")
      
      
        const response = await UserService.createUser(req.body)
        if(response){
            return res.status(200).json(response)
        }
        else{
            return res.status(400).json({
                status: 'ERR',
                message: 'No connect UserService'
            })
        }
        // try {
           
        // } catch (error) {
        //     console.log("Error UserService: "+ error)
        // }
        
      
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

module.exports = {
    createUser
}