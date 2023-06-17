const Joi = require("joi");
login = (loginData) => {
  const JoiSchema = Joi.object({
    email: Joi.string().email().min(5).max(50).required().messages({
      "string.empty": `Email cannot be an empty.`,
      "any.required": `Email is a required.`,
      "string.min": `Email should have a minimum length of {#limit}`,
    }),
    password: Joi.string().required(),
  }).options({ abortEarly: false });

  return JoiSchema.validate(loginData);
};
module.exports = login;
