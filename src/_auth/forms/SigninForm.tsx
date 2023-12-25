/* eslint-disable @typescript-eslint/no-unused-vars */

import { Button } from "@/components/ui/button"
import {Form,FormControl,FormField,FormItem,FormLabel,FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from 'react-hook-form' 
import { SigninValidation, } from "@/lib/validation"
import Loader from "@/components/shared/Loader"
import { Link, useNavigate } from "react-router-dom"
import { useToast } from "@/components/ui/use-toast"
//import { createUserAccount } from "@/lib/appwrite/api"
import { useSignInAccount} from "@/lib/react-query/quriesAndMutations"
import { useUserContext } from "@/Context/AuthContext"


const SignInForm = () => {
    const {checkAuthUser ,isLoading:isUserLoading}=useUserContext();
   const navigate=useNavigate();
    const {toast}=useToast();

  

    const {mutateAsync:signInAccount,isPending}=
    useSignInAccount();
       // 1. Define your form.
  const form = useForm<z.infer<typeof SigninValidation>>({
    resolver: zodResolver(SigninValidation),
    defaultValues: {
      email:'',
      password:''
      
    },
  })
 
  // 2. Define a submit handler. 
 async function onSubmit(values: z.infer<typeof SigninValidation>) {
  
   const session=await signInAccount({email:values.email,password:values.password});
   if(!session){
    console.log(`session${session}`);
    return toast({title:"Sign in failed. Please try again."})
   }
   const isLoggedIn=await checkAuthUser();
   if(isLoggedIn){
    form.reset();
    navigate('/')
   }else{
    return toast({title:"Sign up failed. Please try again"})
   }

  }
 
  return  (
    <Form {...form}>
      <div className="sm:w-420 flex-center flex-col">
        <img src="Public\assets\images\BlackBox.png" alt="logo" className="h-14 w-15" /> 
        <h2 className="h3-bold md:h2-bold pt-5 sm:pt-7">
         
          Log In to an account
        </h2>
        <p className="text-light-3 small-medium md:base-regular mt-2">To use Social enter your account details</p>

      
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-2 sm:w-5/6 w-full mt-2 " >
      
         <FormField
          control={form.control}
          name="email"
          render={({ field }) => (  
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" className="shad-input" {...field}/>
              </FormControl>
             
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="password"
          render={({ field }) => (  
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" className="shad-input" {...field} />
              </FormControl>
             
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="shad-button_primary mt-3">
          
          {isUserLoading?(
            <div className="flex-center gap-2">
              <Loader/> Loading...
            </div>
          ) : "Sign In"}</Button>
          <p className="text-small-regular text=light-2 text-center mt-2 "> If you don't have an account?
          <Link to="/sign-up" className="text-primary-500 text-small-semiblod ml-1">Sign Up</Link>
          </p>

      </form>
      </div>
    </Form>
  )
}

export default SignInForm;
