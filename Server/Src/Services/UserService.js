const User = require("../models/UserModel");

const bcrypt = require("bcrypt");
const JwtService = require("./JwtService");
const createUser = (newUser) => {
  return new Promise(async (resolve, reject) => {
    const { name, email, password, confirmPassword, phone } = newUser;
    try {
      const checkUser = await User.findOne({
        email: email,
      });

      if (checkUser !== null) {
        resolve({
          status: "OK !",
          message: "The Email is already !",
        });
      }
      const hashPassword = bcrypt.hashSync(password, 10);
      const createdUser = await User.create({
        name,
        email,
        password: hashPassword,
        phone,
      });

      if (createdUser) {
        resolve({
          status: "OK",
          message: "SUCCESS",
          data: createdUser,
        });
      }
    } catch (error) {
      reject(error);
    }
  });
};

const loginUser = (userLogin) => {
  return new Promise(async (resolve, reject) => {
    const { name, email, password, confirmPassword, phone } = userLogin;
    try {
      const checkUser = await User.findOne({
        email: email,
      });

      if (checkUser === null) {
        resolve({
          status: "OK !",
          message: "The Email is not defined !",
        });
      }
      const comparePassword = bcrypt.compareSync(password, checkUser.password);
      if (!comparePassword) {
        resolve({
          status: "OK !",
          message: "The Password is incorrect Login !",
        });
      }
      const access_token = await JwtService.genneralAccessToken({
        id: checkUser.id,
        isAdmin: checkUser.isAdmin,
      });
      const refresh_token = await JwtService.genneralRefreshToken({
        id: checkUser.id,
        isAdmin: checkUser.isAdmin,
      });
      resolve({
        status: "OK",
        message: "SUCCESS",
        access_token,
        refresh_token
      });
    } catch (error) {
      reject(error);
    }
  });
};

const updateUser = (idUser,dataUser) => {
    return new Promise(async (resolve, reject) => {
   
      try {
        const checkUser = await User.findOne({
          _id: idUser,
        });
    
        if (checkUser === null) {
            resolve({
              status: "OK !",
              message: "The User is not defined !",
            });
        }
          const updateUser = await User.findByIdAndUpdate(idUser,dataUser,{new:true});
          resolve({
            status: "OK !",
            message: "Update Success !",
           data: updateUser
          });

      } catch (error) {
        reject(error);
      }
    });
};

const deleteUser = (idUser) => {
  return new Promise(async (resolve, reject) => {
 
    try {
      const checkUser = await User.findOne({
        _id: idUser,
      });
  
      if (checkUser === null) {
          resolve({
            status: "OK !",
            message: "The User is not defined !",
          });
      }
      await User.findByIdAndDelete(idUser);
        resolve({
          status: "OK !",
          message: "Delete Success !",
        });

    } catch (error) {
      reject(error);
    }
  });
};
  
const getAllUser = () => {
  return new Promise(async (resolve, reject) => {
 
    try {
 const allUser = await User.find();

   
        resolve({
          status: "OK !",
          message: "Get All Success !",
          data :  allUser
        });

    } catch (error) {
      reject(error);
    }
  });
};
  
module.exports = { createUser, loginUser,updateUser,deleteUser,getAllUser};
