import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../pages/css/Login.css"; 
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import imgLogo from "../assets/images/logo.png"; 
import { SignIn } from "../api/apiAuth";  // Import SignIn API function

const LoginPage = () => {
    const [formData, setFormData] = useState({ email: "", password: "" }); // Menggunakan email
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const validateForm = () => {
        const newErrors = {};

        if (!formData.email) {
            newErrors.email = "Email harus diisi.";
        }

        if (!formData.password) {
            newErrors.password = "Kata sandi harus diisi.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!validateForm()) return;

        const { email, password } = formData;
        setLoading(true);

        // Call the SignIn API function with the form data
        SignIn({ email, password })
            .then((res) => {
                // On success, save the token and user info to sessionStorage
                sessionStorage.setItem("token", res.token); // Sesuaikan dengan nama variabel token dari backend
                sessionStorage.setItem("user", JSON.stringify(res.detail)); // Simpan detail user
                toast.success("Login berhasil!");
                setTimeout(() => {
                    // Navigate to the appropriate page
                    window.location.href = "/home"; 
                }, 2000);
            })
            .catch((err) => {
                // Handle errors (e.g., incorrect email/password)
                console.log(err);
                toast.error("Email atau kata sandi salah. Coba lagi!");
            })
            .finally(() => {
                setLoading(false);
            });
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <div className="body-login d-flex">
            <div className="container-login">
                <ToastContainer />
                <div className="row gx-lg-5 align-items-center mb-5">
                    <div className="col-lg-6 text-center mb-5 mb-lg-0" style={{ paddingLeft: "100px", paddingRight: "auto" }}>
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
                                <form className="form" onSubmit={handleSubmit}>
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
                                            type="email" // Ubah tipe input menjadi email
                                            className={`form-control text-black ${errors.email ? "is-invalid" : ""}`}
                                            id="email"
                                            name="email"
                                            placeholder=" "
                                            value={formData.email}
                                            onChange={handleChange}
                                        />
                                        <label htmlFor="email">Email</label>
                                        {errors.email && (
                                            <div className="invalid-feedback">
                                                {errors.email}
                                            </div>
                                        )}
                                    </div>

                                    <div className="form-floating mb-2 mt-3">
                                        <input
                                            type="password"
                                            className={`form-control text-black ${errors.password ? "is-invalid" : ""}`}
                                            id="password"
                                            name="password"
                                            placeholder=" "
                                            value={formData.password}
                                            onChange={handleChange}
                                        />
                                        <label htmlFor="password">Kata Sandi</label>
                                        {errors.password && (
                                            <div className="invalid-feedback">
                                                {errors.password}
                                            </div>
                                        )}
                                    </div>

                                    <button
                                        type="submit"
                                        className="btn btn-danger btn-block mb-2 mt-3 bg-orange"
                                        style={{ color: "black", width: "100%", height: "50px", fontSize: "20px" }}
                                        disabled={loading} // Disable button when loading
                                    >
                                        <strong>{loading ? "Memuat..." : "Masuk"}</strong>
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
            </div>
        </div>
    );
};

export default LoginPage;
