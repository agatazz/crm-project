import { Joi } from "express-validation";

export const TeamValidation=Joi.object({
    name:Joi.string().required(),
    manager:Joi.number().required(),
    members:Joi.array().required().allow(''),
    goals:Joi.array().required().allow(''),
    department:Joi.number().optional()
})