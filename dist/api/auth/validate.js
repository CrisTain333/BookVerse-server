"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userValidate = void 0;
const zod_1 = require("zod");
const userZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({
            required_error: 'Name is required'
        }),
        email: zod_1.z
            .string({
            required_error: 'Email is required'
        })
            .email(),
        password: zod_1.z.string({
            required_error: 'Password is required'
        })
    })
});
const userLoginZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        email: zod_1.z
            .string({
            required_error: 'Email is required'
        })
            .email(),
        password: zod_1.z.string({
            required_error: 'Password is required'
        })
    })
});
exports.userValidate = {
    userZodSchema,
    userLoginZodSchema
};
