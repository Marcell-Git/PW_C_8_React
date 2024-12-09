import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// Schema validasi menggunakan Zod
const registerSchema = z
    .object({
        email: z.string().email("Email tidak valid"),
        username: z.string().min(1, "Nama pengguna tidak boleh kosong"),
        password: z.string().min(6, "Kata sandi minimal harus 6 karakter"),
        confirmPassword: z
        .string()
        .min(6, "Verifikasi kata sandi tidak boleh kosong"),
    })
    .refine((data) => data.password === data.confirmPassword, {
        path: ["confirmPassword"],
        message: "Kata sandi dan verifikasi kata sandi tidak cocok",
    });

// Hook untuk form register
export const useRegisterForm = (onSubmit) => {
    return useForm({
        resolver: zodResolver(registerSchema),
        defaultValues: {
        email: "",
        username: "",
        password: "",
        confirmPassword: "",
        },
        mode: "onBlur",
    });
};
