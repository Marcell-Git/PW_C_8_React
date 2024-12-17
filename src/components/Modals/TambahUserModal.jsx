import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createUserProfile } from '../../api/apiContent'; // Import the createUserProfile function

const TambahUserModal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        profilePicture: null,
        name: '',
        email: '',
        password: '',
        role: 'user', // Default role
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (event) => {
        setFormData({ ...formData, profilePicture: event.target.files[0] });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const { profilePicture, name, email, password, role } = formData;

        // Validate form data
        if (!name || !email || !password) {
            toast.error("Semua field harus diisi!");
            return;
        }

        const formDataToSend = new FormData();
        formDataToSend.append('profilePicture', profilePicture);
        formDataToSend.append('name', name);
        formDataToSend.append('email', email);
        formDataToSend.append('password', password);
        formDataToSend.append('role', role);

        try {
            await createUserProfile(formDataToSend); // Call the createUserProfile function
            toast.success("Profil pengguna berhasil ditambahkan!");
            onClose(); // Call the onClose callback to refresh the user list
        } catch (error) {
            console.error("Error adding user profile:", error);
            toast.error("Gagal menambahkan profil pengguna. Coba lagi!");
        }
    };

    return (
        <div className={`modal fade ${isOpen ? 'show' : ''}`} style={{ display: isOpen ? 'block' : 'none' }} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden={!isOpen}>
            <div className="modal-dialog modal-dark modal-dialog-centered modal-m">
                <div className="modal-content p-3" style={{ backgroundColor: "#212121" }}>
                    <ToastContainer />
                    <div className="modal-header">
                        <h3 className="text-center" style={{ color: "white" }}>Tambah Pengguna</h3>
                        <button type="button" className="btn-close" onClick={onClose}></button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label className="form-label" style={{ color: "white" }}>Foto Profil</label>
                                <input className="form-control" type="file" onChange={handleFileChange} required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label" style={{ color: "white" }}>Nama Pengguna</label>
                                <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label" style={{ color: "white" }}>Email</label>
                                <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label" style={{ color: "white" }}>Password</label>
                                <input type="password" className="form-control" name="password" value={formData.password} onChange={handleChange} required />
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <button type="button" className="btn btn-danger" onClick={onClose}>Batal</button>
                                </div>
                                <div className="col-6">
                                    <button type="submit" className="btn btn-success">Simpan</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TambahUserModal;
