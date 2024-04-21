
import {z} from "zod"

export const usernamevalidation=z.string().min(3,"username must be atleast 3 charachters").regex(/^[a-zA-Z0-9_]+$/, 'Username must not contain special characters').max(30,"username should not be longer than 30 charachters")

const SignUpSchema=z.object({
    username:usernamevalidation,
    email:z.string().email(),
    password:z.string().min(8,"password must be atleast 8 charachters ")
})

export default SignUpSchema