import {z} from 'zod';

export const registerSchema = z.object({
    username: z.string({
        required_error: "El nombre de usuario es obligatorio."
    }).min(6, {
        message: "El nombre de usuario debe tener entre 8 y 16 caracteres."
    }).max(16, {
        message: "El nombre de usuario debe tener entre 8 y 16 caracteres."
    }),

    email: z.string({
        required_error: "El email es obligatorio."
    }).email({
        message: "El email es inválido."
    }),

    password: z.string({
        required_error: "La contraseña es obligatorio."
    }).min(6, {
        message: "La contraseña debe tener entre 6 y 16 caracteres."
    }).max(18, {
        message: "La contraseña debe tener entre 6 y 16 caracteres."
    }),

    confirm_password: z.string({
        required_error: "La contraseña es obligatorio."
    }).min(6, {
        message: "La contraseña debe tener entre 6 y 16 caracteres."
    }).max(18, {
        message: "La contraseña debe tener entre 6 y 16 caracteres."
    }),
})