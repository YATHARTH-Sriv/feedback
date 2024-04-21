
import {z} from "zod"

export const verifySchema=z.object({
    verifyCode:z.boolean()
})