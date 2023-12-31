import { z } from 'zod';

const userZodSchema = z.object({
    body: z.object({
        name: z.string({
            required_error: 'Name is required'
        }),
        email: z
            .string({
                required_error: 'Email is required'
            })
            .email(),
        password: z.string({
            required_error: 'Password is required'
        })
    })
});
const userLoginZodSchema = z.object({
    body: z.object({
        email: z
            .string({
                required_error: 'Email is required'
            })
            .email(),
        password: z.string({
            required_error: 'Password is required'
        })
    })
});

export const userValidate = {
    userZodSchema,
    userLoginZodSchema
};
