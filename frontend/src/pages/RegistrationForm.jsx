import { useForm } from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import Name from "../inputs/NameInput";
import Password from "../inputs/PasswordInput";
import Email from "../inputs/EmailInput"
import Currency from "../inputs/CurrencyInput";
import { registerUser } from "../api/authApi";

const registerSchema=z.
object({
    firstName:z.string().trim().min(2,'First name should have atleast 2 characters'),
    lastName:z.string().trim(),
    email:z.string().email("Enter valid email"),
    password: z
            .string()
            .min(8, "Password must be at least 8 characters")
            .regex(/[A-Z]/, "Must contain an uppercase letter")
            .regex(/[a-z]/, "Must contain a lowercase letter")
            .regex(/[0-9]/, "Must contain a number"),
    confirmPassword:z.string().min(1,"Confirm your password"),
    currency:z.string().min(1,"Please select a currency"),
    username:z
    .string().trim()
  .min(3, "Username must be at least 3 characters")
  .max(20, "Username must be at most 20 characters")
  .regex(
    /^[a-zA-Z0-9_]+$/,
    "Only letters, numbers and underscores are allowed"
  )
})
.refine((data)=>data.password===data.confirmPassword,{
    message:"Passwords do not match",
    path:["confirmPassword"]
})

export default function Register() {
const{register,handleSubmit,formState:{errors}}=useForm({
  resolver: zodResolver(registerSchema),
});

async function onSubmit(data) {
  try {
    const { confirmPassword, ...userData } = data;

    const response = await registerUser(userData);

    console.log(response.data);

  } catch (error) {
    console.log(error.response?.data);
  }
}
return(
<form onSubmit={handleSubmit(onSubmit)}>
    <Name
  name="firstName"
  label="First Name"
  register={register}
  error={errors.firstName}  
  />

    <Name
    name="lastName"
    label="Last Name"
    register={register}
    error={errors.lastName}
    />

    <Name
    name="username"
    label="User Name"
    register={register}
    error={errors.username}
    />

    <Email
    register={register}
    error={errors.email}
    />

    <Password
    register={register}
    error={errors.password}
    />

    <Password
    name="confirmPassword"
    label="Confirm Password"
    register={register}
    error={errors.confirmPassword}
    />
    
    <Currency
    register={register}
    error={errors.currency}
    />
    <button type="submit">
        Create Account
    </button>
</form>)
}
