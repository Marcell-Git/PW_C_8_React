import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../pages/css/Login.css"; 
import { useLoginForm } from "../hooks/use_login"; 
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import imgLogo from "../assets/images/logo.png"; 

const LoginPage = () => {
    const onSubmit = (data) => {
        const { username, password } = data;

        if (username === "admin" && password === "admin123") {
            toast.success("Login berhasil!");
            setTimeout(() => {
                window.location.href = "/admin/film"; 
            }, 2000);
        } else if(username === "test" && password === "test123"){
            toast.success("Login berhasil!");
            setTimeout(() => {
                window.location.href = "/home"; 
            }, 2000);
        }else {
            toast.error("Nama pengguna atau kata sandi salah. Coba lagi!");
        }
    };

    const { register, handleSubmit, errors } = useLoginForm(onSubmit);

    return (
        <div className="body-login d-flex">

            <div className="container-login">
                <ToastContainer />
                <>
                    <div className="row gx-lg-5 align-items-center mb-5">
                        <div className="col-lg-6 text-center mb-5 mb-lg-0" style={{paddingLeft: "100px", paddingRight: "auto"}}>
                            <img
                                src={imgLogo}
                                alt="Kawaii"
                                className="img-fluid-login"
                                style={{ width: "400px" }}
                            />
                            <p className="mb-4 opacity-70 text-white" style={{ textAlign: "justify" }}>
                                Nikmati pengalaman bioskop yang tak terlupakan dengan VGC Cinema.
                                Dengan layanan pelanggan yang siap membantu, kemudahan pemesanan,
                                dan pilihan snack yang menggugah selera, kami berkomitmen untuk
                                memberikan pengalaman menonton film yang sempurna bagi Anda dan
                                orang-orang terkasih.
                            </p>
                        </div>
                        <div className="col-lg-6">
                            <div className="card bg-transparent">
                                <div className="card-body px-4 py-5 px-md-5">
                                    <form className="form" onSubmit={handleSubmit(onSubmit)}>
                                        <div className="text-start">
                                            <h1 className="text-white">
                                                <strong>{"HAI :)"}</strong>
                                            </h1>
                                            <p className="text-white mb-5" style={{ fontSize: "20px" }}>
                                                Selamat Datang di VGC Cinema
                                            </p>
                                        </div>

                                        <div className="form-floating mb-2 mt-3">
                                            <input
                                                type="text"
                                                className={`form-control text-black ${errors?.username ? "is-invalid" : ""}`}
                                                id="username"
                                                name="username"
                                                placeholder=" "
                                                {...register("username")}
                                            />
                                            <label htmlFor="username">Nama Pengguna</label>
                                            {errors?.username && (
                                                <div className="invalid-feedback">
                                                    {errors.username.message}
                                                </div>
                                            )}
                                        </div>

                                        <div className="form-floating mb-2 mt-3">
                                            <input
                                                type="password"
                                                className={`form-control text-black ${errors?.password ? "is-invalid" : ""}`}
                                                id="password"
                                                name="password"
                                                placeholder=" "
                                                {...register("password")}
                                            />
                                            <label htmlFor="password">Kata Sandi</label>
                                            {errors?.password && (
                                                <div className="invalid-feedback">
                                                    {errors.password.message}
                                                </div>
                                            )}
                                        </div>

                                        <button
                                            type="submit"
                                            className="btn btn-danger btn-block mb-2 mt-3 bg-orange"
                                            style={{ color: "black", width: "100%", height: "50px", fontSize: "20px" }}
                                        >
                                            <strong>Masuk</strong>
                                        </button>
                                        <div>
                                            <p className="text-white">
                                                Belum punya akun?{" "}
                                                <a
                                                    className="text-grey text-decoration-none"
                                                    href="/register"
                                                >
                                                    Daftar Sekarang!
                                                </a>
                                            </p>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            </div>
        </div>
    );
};

export default LoginPage;
