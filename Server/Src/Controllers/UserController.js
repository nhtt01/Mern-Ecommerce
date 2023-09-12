const UserService = require("../Services/UserService");

const createUser = async (req, res) => {
  console.log(req.body);
  try {
    const { name, email, password, confirmPassword, phone } = req.body;
    const reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    const isCheckEmail = reg.test(email);
    if (!email || !password || !confirmPassword) {
      return res.status(200).json({
        status: "ERR",
        message: "The input is required",
      });
    } else if (!isCheckEmail) {
      return res.status(200).json({
        status: "ERR",
        message: "The input is email",
      });
    } else if (password !== confirmPassword) {
      return res.status(200).json({
        status: "ERR",
        message: "The password is equal confirmPassword",
      });
    }

    const response = await UserService.createUser(req.body);

    if (response) {
      return res.status(200).json(response);
    } else {
      return res.status(400).json({
        status: "ERR",
        message: "No connect UserService",
      });
    }
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};

const loginUser = async (req, res) => {
  console.log(req.body);
  try {
    const { name, email, password, confirmPassword, phone } = req.body;
    const reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    const isCheckEmail = reg.test(email);

    if (!email) {
      return res.status(200).json({
        status: "ERR",
        message: "The input email is required",
      });
    } else if (!password) {
      return res.status(200).json({
        status: "ERR",
        message: "The input password is required ",
      });
    } else if (!confirmPassword) {
      return res.status(200).json({
        status: "ERR",
        message: "The input confirmPassword is required ",
      });
    } else if (!isCheckEmail) {
      return res.status(200).json({
        status: "ERR",
        message: "The input is email",
      });
    } else if (password !== confirmPassword) {
      return res.status(200).json({
        status: "ERR",
        message: "The password is equal confirmPassword",
      });
    }

    const response = await UserService.loginUser(req.body);
    if (response) {
      return res.status(200).json(response);
    } else {
      return res.status(400).json({
        status: "ERR",
        message: "No connect UserService",
      });
    }
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};

const updateUser = async (req, res) => {
  try {
    const idUser = req.params.id;
    const data = req.body;
    if (!idUser) {
      return res.status(200).json({
        status: "ERR",
        message: "The User not found !!",
      });
    }

    const response = await UserService.updateUser(idUser,data );
    if (response) {
      return res.status(200).json(response);
    } else {
      return res.status(400).json({
        status: "ERR",
        message: "No connect UserService",
      });
    }
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};

module.exports = {
  createUser,
  loginUser,
  updateUser,
};
