import '../pages/css/AdminUser.css';
import React, { useState, useEffect } from 'react';
import { getUserAllProfile } from '../api/apiContent';

import EditUserModal from '../components/Modals/EditUserModal';
import TambahUserModal from '../components/Modals/TambahUserModal';

import TopNavbarAdmin from '../components/TopNavbarAdmin';
import { getGambarUser } from '../api';

const AdminUserPage = () => {
    const [isModalEditOpen, setIsModalEditOpen] = useState(false);
    const [isModalTambahOpen, setIsModalTambahOpen] = useState(false);
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null); // State to hold the selected user for editing
    const [error, setError] = useState(null); // State to hold error messages


    const toggleModalEdit = () => {
        setIsModalEditOpen(!isModalEditOpen);
    }

    const toggleModalTambah = () => {
        setIsModalTambahOpen(!isModalTambahOpen);
    }

    const fetchUsers = async () => {
        try {
            const userData = await getUserAllProfile();
            setUsers(userData); // Assuming userData is an array of users
            setError(null); // Clear any previous errors
        } catch (error) {
            console.error("Error fetching all user profiles:", error);
            setError(error.message || "An error occurred while fetching user profiles.");
        }
    };

    useEffect(() => {
        fetchUsers(); // Fetch users on component mount
    }, []);

    const handleUserSelect = (user) => {
        setSelectedUser(user); // Set the selected user
        toggleModalEdit(); // Open the edit modal
    };

    const handleUserAdded = () => {
        fetchUsers(); // Refresh the user list after adding a new user
        toggleModalTambah(); // Close the modal
    };

    const handleUserUpdated = () => {
        fetchUsers(); // Refresh the user list after updating a user
        toggleModalEdit(); // Close the edit modal
    };

    return (
        <div>
            <TopNavbarAdmin />
            <div className="container">
                <div className="card card-adminUser">
                    <button className="btn btn-success mb-4" style={{ width: "10%" }} onClick={toggleModalTambah}>
                        <i className="fa-solid fa-user-plus"></i> Tambah
                    </button>
                    {error && <div className="alert alert-danger">{error}</div>} {/* Display error message */}
                    <table className="table table-dark table-striped">
                        <thead>
                            <tr>
                                <th scope="col" className="text-center title">ID</th>
                                <th scope="col" className="text-center title">Foto Profil</th>
                                <th scope="col" className="text-center title">Nama Pengguna</th>
                                <th scope="col" className="text-center title">Email</th>
                                <th scope="col" className="text-center title">Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Array.isArray(users) && users.map((user, index) => (
                                <tr key={user.id}>
                                    <th scope="row" className="text-center body">{index + 1}</th>
                                    <td className="text-center">
                                        <img 
                                            src={user && user.profile_picture 
                                                ? getGambarUser(user.profile_picture) 
                                                : "https://static.vecteezy.com/system/resources/previews/002/275/847/original/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg"
                                            } 
                                            className="img-fluid" 
                                            style={{ width: "50px", height: "50px", borderRadius: "50%" }} 
                                            alt="Profile" 
                                        />
                                    </td>
                                    <td className="text-center body">{user.name}</td>
                                    <td className="text-center body">{user.email}</td>
                                    <td className="text-center body">
                                        <button className="btn" onClick={() => handleUserSelect(user)}>
                                            <i className="fa fa-pencil-alt" style={{ color: "white" }}></i>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Edit User Modal */}
            {isModalEditOpen && (
                <EditUserModal 
                    isOpen={isModalEditOpen} 
                    onClose={handleUserUpdated} // Call this to refresh the user list after update
                    user={selectedUser} // Pass the selected user to the modal
                />
            )}

            {/* Add User Modal */}
            {isModalTambahOpen && (
                <TambahUserModal 
                    isOpen={isModalTambahOpen} 
                    onClose={handleUserAdded} // Pass the callback to refresh user list
                />
            )}
        </div>
    );
};

export default AdminUserPage;
