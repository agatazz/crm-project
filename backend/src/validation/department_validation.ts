import { Joi } from "express-validation";

export const DepartmentValidation=Joi.object({
    name:Joi.string().required(),
    description:Joi.string().required(),
    teams:Joi.array().required().allow('')
})