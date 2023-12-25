import * as z from "zod";

export const SignupValidation = z.object({
    name:z.string().min(2,{message:'Too short'}),
    username: z.string().min(2,{message:"too short"}),
    email :z.string().email(),
    password:z.string().min(8,{message:"password must be less than 8 charaters"})   
  })   

  export const SigninValidation = z.object({
    email :z.string().email(),
    password:z.string().min(8,{message:"password must be less than 8 charaters"})   
  })   