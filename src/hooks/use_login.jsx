import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const loginSchema = z.object({
    username: z.string().min(1, "Nama pengguna tidak boleh kosong"),
    password: z.string().min(6, "Kata sandi minimal harus 6 karakter"),
});

export const useLoginForm = (onSubmit) => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            username: "",
            password: "",
        },
        mode: "onSubmit",
    });

    return {
        register,
        handleSubmit,
        errors, // pastikan errors di-return dengan benar
    };
};
