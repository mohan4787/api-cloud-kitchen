const Joi = require('joi');

const EmailDTO = Joi.string().email().required();
const PasswordDTO = Joi.string().min(8).max(25).required();

const RegisterDTO = Joi.object({
    name: Joi.string().min(2).max(50).required(),
    email: EmailDTO,
    password: PasswordDTO,
    confirmPassword: Joi.string().equal(Joi.ref("password")).required(),
    phone: Joi.string().max(21).allow(null, '').optional().default(null),
    address: Joi.object({
        billingAddress: Joi.string().max(100).allow(null, " ").default(null),
        shippingAddress: Joi.string().max(100).allow(null, " ").default(null)
    }).allow(null, "").default(null),
    role: Joi.string().regex(/^(customer|admin|kitchen|delivery)$/).default("customer"),
    gender: Joi.string().regex(/^(male|female|other)$/).optional().default(null),
    image: Joi.string().allow(null, "").optional().default(null)
})

const LoginDTO = Joi.object({
    email: EmailDTO,
    password: PasswordDTO
})

const ResetPasswordRequestDTO = Joi.object({
    email: EmailDTO
})

module.exports = {
    RegisterDTO,
    LoginDTO,
    ResetPasswordRequestDTO
}