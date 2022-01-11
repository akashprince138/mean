const Joi = require("@hapi/joi");
user = (userData) => {
  const JoiSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required(),
    phone: Joi.number().required(),
  }).options({ abortEarly: false });

  return JoiSchema.validate(userData);
};
module.exports = user;
