const Joi = require("@hapi/joi");
user = (userData) => {
  const JoiSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    phone: Joi.number().required(),
    password: Joi.string().allow(""),
  }).options({ abortEarly: false });

  return JoiSchema.validate(userData);
};
module.exports = user;
