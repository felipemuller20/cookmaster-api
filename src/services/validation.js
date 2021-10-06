const UserModel = require('../models/users');

const validateEntries = (userName, userEmail, password) => {
  const errorObj = {
    code: 400,
    message: 'Invalid entries. Try again.',
  };
  if (!userName || !userEmail || !password) {
    return errorObj;
  }
  const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/; // https://www.w3resource.com/javascript/form/email-validation.php
  if (!regex.test(userEmail)) return errorObj;
};

const verifyEmail = async (email) => {
  const allUsers = await UserModel.getAll();
  const existingEmail = allUsers.find((user) => user.email === email);
  if (existingEmail) {
    return {
      code: 409,
      message: 'Email already registered',
    };
  }
};

const validateRecipeInfo = (name, ingredients, preparation) => {
  const errorObj = {
    code: 400,
    message: 'Invalid entries. Try again.',
  };
  if (!name || !ingredients || !preparation) {
    return errorObj;
  }
};

module.exports = {
  validateEntries,
  verifyEmail,
  validateRecipeInfo,
};
