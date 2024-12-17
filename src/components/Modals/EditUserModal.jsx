import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { updateUserAllProfile, deleteUserProfiles } from '../../api/apiContent'; // Import the deleteUserProfiles function

const EditUserModal = ({ isOpen, onClose, user }) => {
    const [formData, setFormData] = useState({
        profilePicture: null,
        name: '',
        email: '',
        password: '',
    });
    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false); // State for delete confirmation modal

    useEffect(() => {
        if (user) {
            setFormData({
                profilePicture: null, // Reset file input
                name: user.name,
                email: user.email,
                password: '', // Keep password empty for security
            });
        }
    }, [user]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (event) => {
        setFormData({ ...formData, profilePicture: event.target.files[0] });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const { profilePicture, name, email, password } = formData;

        // Validate form data
        if (!name || !email) {
            toast.error("Nama dan Email harus diisi!");
            return;
        }

        // Prepare the user data
        const userData = {
            id: user.id,
            name: name,
            email: email,
            ...(password && { password }), // Only include password if provided
        };

        // If a profile picture is provided, append it to the user data
        if (profilePicture) {
            const formDataToSend = new FormData();
            formDataToSend.append('profile_picture', profilePicture);
            formDataToSend.append('name', name);
            formDataToSend.append('email', email);
            if (password) {
                formDataToSend.append('password', password);
            }

            // Wrap the user data in an array
            const usersToUpdate = [{ id: user.id, ...Object.fromEntries(formDataToSend) }];

            try {
                await updateUserAllProfile(usersToUpdate); // Call the updateUserAllProfile function
                toast.success("Profil pengguna berhasil diperbarui!");
                onClose(); // Call the onClose callback to refresh the user list
            } catch (error) {
                console.error("Error updating user profile:", error);
                toast.error("Gagal memperbarui profil pengguna. Coba lagi!");
            }
        } else {
            // If no profile picture, just send the user data
            const usersToUpdate = [userData];

            try {
                await updateUserAllProfile(usersToUpdate); // Call the updateUserAllProfile function
                toast.success("Profil pengguna berhasil diperbarui!");
                onClose(); // Call the onClose callback to refresh the user list
            } catch (error) {
                console.error("Error updating user profile:", error);
                toast.error("Gagal memperbarui profil pengguna. Coba lagi!");
            }
        }
    };

    const confirmDelete = () => {
        setShowDeleteConfirm(true); // Show the delete confirmation modal
    };

    const handleConfirmDelete = async () => {
        setShowDeleteConfirm(false); // Hide the confirmation modal
        try {
            await deleteUserProfiles([user.id]); // Pass the user ID in an array
            toast.success("Profil pengguna berhasil dihapus!");
            onClose(); // Call the onClose callback to refresh the user list
        } catch (error) {
            console.error("Failed to delete users:", error);
            toast.error("Gagal menghapus profil pengguna. Coba lagi!");
        }
    };

    const handleCancelDelete = () => {
        setShowDeleteConfirm(false); // Hide the confirmation modal
    };

    return (
        <div className={`modal fade ${isOpen ? 'show' : ''}`} style={{ display: isOpen ? 'block' : 'none' }} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden={!isOpen}>
            <div className="modal-dialog modal-dark modal-dialog-centered modal-m">
                <div className="modal-content p-3" style={{ backgroundColor: "#212121" }}>
                    <ToastContainer />
                    <div className="modal-header">
                        <h3 className="text-center" style={{ color: "white" }}>Edit Profil</h3>
                        <button type="button" className="btn-close" onClick={onClose}></button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label className="form-label" style={{ color: "white" }}>Foto Profil</label>
                                <input className="form-control" type="file" onChange={handleFileChange} />
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
                                <label className="form-label" style={{ color: "white" }}>Password (Kosongkan jika tidak ingin mengubah)</label>
                                <input type="password" className="form-control" name="password" value={formData.password} onChange={handleChange} />
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <button type="button" className="btn btn-danger" onClick={onClose}>Batal</button>
                                </div>
                                <div className="col-6">
                                    <button type="submit" className="btn btn-success">Simpan</button>
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-end">
                                <button type="button" className="btn btn-danger" onClick={confirmDelete}><i className="fa-solid fa-trash"></i> Hapus Profil</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {/* Delete Confirmation Modal */}
            {showDeleteConfirm && (
                <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1" aria-labelledby="deleteConfirmationModal" aria-hidden="false">
                    <div className="modal-dialog modal-dark modal-dialog-centered">
                        <div className="modal-content p-3" style={{ backgroundColor: "#212121" }}>
                            <div className="modal-header">
                                <h5 className="modal-title" style={{ color: "white" }}>Konfirmasi Hapus</h5>
                                <button type="button" className="btn-close" onClick={handleCancelDelete}></button>
                            </div>
                            <div className="modal-body">
                                <p style={{ color: "white" }}>Apakah Anda yakin ingin menghapus profil ini?</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={handleCancelDelete}>Batal</button>
                                <button type="button" className="btn btn-danger" onClick={handleConfirmDelete}>Hapus</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default EditUserModal;
