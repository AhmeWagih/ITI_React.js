import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useNavigate } from "react-router";

const registerSchema = z
  .object({
    email: z
      .string()
      .min(1, "Email is required")
      .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email format"),
    name: z.string().min(1, "Name is required"),
    username: z
      .string()
      .min(1, "Username is required")
      .regex(/^\S+$/, "Username must not contain spaces"),
    password: z
      .string()
      .min(1, "Password is required")
      .min(8, "Password must be at least 8 characters")
      .regex(/[a-z]/, "Must contain at least one lowercase letter")
      .regex(/[A-Z]/, "Must contain at least one uppercase letter")
      .regex(/\d/, "Must contain at least one digit")
      .regex(/[*@%$#]/, "Must contain at least one special character (*@%$#)"),
    confirmPassword: z.string().min(1, "Confirm password is required"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type RegisterFormData = z.infer<typeof registerSchema>;

export function useRegister() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    mode: "onSubmit",
    reValidateMode: "onSubmit",
  });

  const onSubmit = (data: RegisterFormData) => {
    const {...payload } = data;
    alert(JSON.stringify(payload, null, 2));
    navigate("/");
  };

  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
  };
}
