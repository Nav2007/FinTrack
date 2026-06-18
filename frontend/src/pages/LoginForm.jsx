import { useForm } from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import Name from "../inputs/NameInput";
import Password from "../inputs/PasswordInput";

const loginSchema = z.object({
  username: z.string().trim().min(1, "Enter your username"),
  password: z.string().min(1, "Enter your password"),
});
export default function Login(){
    const{register,handleSubmit,formState:{errors}}=useForm({
          resolver: zodResolver(loginSchema),
        });
        function onSubmit(data) {
        console.log(data);
        }
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Name
                  name="username"
                  label="User Name"
                  register={register}
                  error={errors.username}  
                  />
                <Password
                    register={register}
                    error={errors.password}
                />
                <button type="submit">
                    Login
                </button>
            </form>
        </>
    )
}