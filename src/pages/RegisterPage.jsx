import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../pages/css/Register.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import imgLogo from "../assets/images/logo.png";
import { useNavigate } from "react-router-dom";
import { SignUp } from "../api/apiAuth"; // Ensure to import SignUp

const FormRegister = () => {
  const navigate = useNavigate();
  const [isDisabled, setIsDisabled] = useState(true);
  const [loading, setLoading] = useState(false); // Loading status
  const [data, setData] = useState({
    email: "",
    name: "", // Change from username to name
    password: "",
    confirmPassword: "",
  });

  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleCheck = (e) => {
    setIsDisabled(!e.target.checked);
  };

  const Register = (event) => {
    event.preventDefault();
  
    // Validasi data
    if (data.password !== data.confirmPassword) {
      toast.error("Kata sandi dan verifikasi kata sandi tidak cocok!");
      return;
    }
  
    if (!data.email || !data.name || !data.password) {
      toast.error("Semua kolom harus diisi!");
      return;
    }
  
    console.log("Data yang dikirim:", data); // Debug data yang dikirim
  
    setLoading(true); // Status loading
    SignUp(data)
      .then((res) => {
        console.log("Registration successful:", res); // Debug hasil sukses
        toast.success("Pendaftaran berhasil! Mengarahkan ke halaman login...");
        setTimeout(() => {
          navigate("/"); // Navigasi setelah 2 detik
        }, 2000);
      })
      .catch((err) => {
        console.error("Registration failed:", err); // Debug hasil error
        toast.error(err.message || "Terjadi kesalahan saat mendaftar.");
      })
      .finally(() => {
        setLoading(false); // Set status loading selesai
      });
  };

  return (
    <div className="register-page">
      <div className="register-container">
        {/* Left Column */}
        <div className="register-left">
          <form className="register-form" onSubmit={Register}>
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
                name="email"
                placeholder="you@example.com"
                className="form-control form-r"
                value={data.email}
                onChange={handleChange}
                 // Adding required attribute
              />
            </div>
            <div className="form-group">
              <label htmlFor="name">Nama Pengguna</label> {/* Change label to match field name */}
              <input
                type="text"
                id="name" // Change id to name
                name="name" // Change name to name
                placeholder="Nama Pengguna"
                className="form-r form-control"
                value={data.name} // Change value to name
                onChange={handleChange}
                 // Adding required attribute
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Kata Sandi</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="●●●●●●"
                className="form-r form-control"
                value={data.password}
                onChange={handleChange}
                // Adding required attribute
              />
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword">Konfirmasi Kata Sandi</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="●●●●●●"
                className="form-r form-control"
                value={data.confirmPassword}
                onChange={handleChange}
                // Adding required attribute
              />
            </div>
            <button
              className="btn btn-danger btn-danger-register"
              type="submit"
              disabled={loading} // Disable button while loading
            >
              {loading ? "Memuat..." : "Daftar"} {/* Show loading status */}
            </button>
            <p className="mt-3 text-white">
              Sudah punya akun?{" "}
              <a href="/" className="text-orange">
                Masuk
              </a>
            </p>
          </form>
        </div>

        {/* Right Column */}
        <div className="register-right">
          <div className="register-overlay">
            <div className="text-content">
              <p className="step-indicator">01/03</p>
              <h1 className="hero-title">Nikmati Pengalaman Bioskop</h1>
              <p className="hero-subtitle">
                Nikmati pengalaman bioskop yang tak terlupakan dengan VGC Cinema.
                Dengan layanan pelanggan yang siap membantu, kemudahan pemesanan,
                dan pilihan snack yang menggugah selera, kami berkomitmen untuk
                memberikan pengalaman menonton film yang sempurna bagi Anda dan
                orang-orang terkasih.
              </p>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer /> {/* Adding ToastContainer for notifications */}
    </div>
  );
};

export default FormRegister;