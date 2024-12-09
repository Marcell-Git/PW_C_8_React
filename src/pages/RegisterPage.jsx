import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../pages/css/Register.css"
import { useRegisterForm } from "../hooks/use_register"; 
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import imgLogo from "../assets/images/logo.png"; 

const RegisterPage = () => {
    const onSubmit = (data) => {
        if (data.password !== data.confirmPassword) {
        toast.error("Kata sandi dan verifikasi kata sandi tidak cocok!");
        return;
        }

        toast.success("Pendaftaran berhasil! Mengarahkan ke halaman login...");
        setTimeout(() => {
        window.location.href = "/";
        }, 2000);
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useRegisterForm(onSubmit);

    return (
        <div className="register-page">
        <div className="register-container">
            {/* Kolom Kiri */}
            <div className="register-left">
            <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
                <div className="col-lg-12 text-center ">
                <img
                    src={imgLogo}
                    alt="Kawaii"
                    className="img-fluid"
                    style={{ width: "300px" }}
                />
                </div>
                <h1 className="register-title">Daftar Akun</h1>
                <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    placeholder="you@example.com"
                    className={`form-control form-r ${
                    errors.email ? "is-invalid" : ""
                    }`}
                    {...register("email")}
                />
                {errors.email && (
                    <div className="invalid-feedback">{errors.email.message}</div>
                )}
                </div>
                <div className="form-group">
                <label htmlFor="username">Nama Pengguna</label>
                <input
                    type="text"
                    id="username"
                    placeholder="Nama Pengguna"
                    className={`form-r  form-control ${
                    errors.username ? "is-invalid" : ""
                    }`}
                    {...register("username")}
                />
                {errors.username && (
                    <div className="invalid-feedback">
                    {errors.username.message}
                    </div>
                )}
                </div>
                <div className="form-group">
                <label htmlFor="password">Kata Sandi</label>
                <input
                    type="password"
                    id="password"
                    placeholder="●●●●●●●"
                    className={`form-r  form-control ${
                    errors.password ? "is-invalid" : ""
                    }`}
                    {...register("password")}
                />
                {errors.password && (
                    <div className="invalid-feedback">
                    {errors.password.message}
                    </div>
                )}
                </div>
                <div className="form-group">
                <label htmlFor="confirmPassword">Konfirmasi Kata Sandi</label>
                <input
                    type="password"
                    id="confirmPassword"
                    placeholder="●●●●●●●"
                    className={`form-r form-control ${
                    errors.confirmPassword ? "is-invalid" : ""
                    }`}
                    {...register("confirmPassword")}
                />
                {errors.confirmPassword && (
                    <div className="invalid-feedback">
                    {errors.confirmPassword.message}
                    </div>
                )}
                </div>
                <button className="btn btn-danger btn-danger-register">Daftar</button>
                <p className="mt-3 text-white">
                Sudah punya akun?{" "}
                <a href="/" className="text-orange">
                    Masuk
                </a>
                </p>
            </form>
            </div>

            {/* Kolom Kanan */}
            <div className="register-right">
            <div className="register-overlay">
                <div className="text-content">
                <p className="step-indicator">01/03</p>
                <h1 className="hero-title">Nikmati Pengalaman Bioskop</h1>
                <p className="hero-subtitle">
                    Nikmati pengalaman bioskop yang tak terlupakan dengan VGC
                    Cinema. Dengan layanan pelanggan yang siap membantu, kemudahan
                    pemesanan, dan pilihan snack yang menggugah selera, kami
                    berkomitmen untuk memberikan pengalaman menonton film yang
                    sempurna bagi Anda dan orang-orang terkasih.
                </p>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
};

export default RegisterPage;