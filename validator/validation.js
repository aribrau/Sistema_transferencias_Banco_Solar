//import JOI
import Joi from 'joi';
//esta funcion toma un esquema de validación definido por JOI como argumento y devuelve otra función para validar el objeto Payload
const validator = (schema) => (payload) =>
    schema.validate(payload, { abortEarly: false });
//esta funcion se usa para validar los inputs del objeto usuario cuando creamos un nuevo usuario
const userSchema = Joi.object({
    id: Joi.number(),
    nombre: Joi.string().pattern(/^[A-Za-z\s]+$/).min(5).max(45).required(),
    balance: Joi.number().positive().required()
});
//esta función se usa para validar los inputs de la transferencia cuando hacemos una nueva transferencia
const transferenciaSchema = Joi.object({
    emisor: Joi.string().pattern(/^[A-Za-z\s]+$/).required(),
    receptor: Joi.string().pattern(/^[A-Za-z\s]+$/).required(),
    monto: Joi.number().positive().required()
});
//exportamos nuestras validaciones
export const validateUser = validator(userSchema);
export const validateTransferencia = validator(transferenciaSchema);