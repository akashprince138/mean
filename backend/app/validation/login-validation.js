const Joi = require("@hapi/joi");
login = (loginData) => {
  const JoiSchema = Joi.object({
    email: Joi.string().email().min(5).max(50).required(),
    password: Joi.string().required(),
  }).options({ abortEarly: false });

  return JoiSchema.validate(loginData);
};
module.exports = login;
