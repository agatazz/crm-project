import { Joi } from "express-validation";

export const EmployeeValdiation=Joi.object({
    first_name:Joi.string().required(),
    last_name:Joi.string().required(),
    email:Joi.string().email().required(),
    phoneNumber:Joi.string().required(),
    office:Joi.string().required(),
    position:Joi.string().required(),
    role_id:Joi.number().required(),
    team_id:Joi.number().required()
})