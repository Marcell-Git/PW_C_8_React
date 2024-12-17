import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection
import { getUserProfile, UpdateProfile, updateProfilePicture, getProfilePictureProfil } from "../api/apiContent"; // Pastikan UpdateProfile dan updateProfilePicture diimpor
import { Signout } from "../api/apiAuth"; // Import the Signout function
import TopNavBar from "../components/TopNavbar";
import './css/Profil.css';

import { getPembayaranCamilanByUser } from "../api/apiPembayaranCamilan";
import LogOutModal from "../components/Modals/LogOutModal";
import DetailRiwayatTiketModal from "../components/Modals/DetailRiwayatTiketModal";
import DetailRiwayatCamilanModal from "../components/Modals/DetailRiwayatCamilanModal";
import poster1 from '../assets/images/poster1.webp';
import CamilanCard from "../components/CamilanCard";
import FilmCard from "../components/FilmCard";

const ProfilPage = () => {
    const navigate = useNavigate(); // Initialize useNavigate
    const [userData, setUserData] = useState(null);
    const [isModalLogOutOpen, setIsModalLogOutOpen] = useState(false);
    const [isModalDetailRiwayatTiketOpen, setIsModalDetailRiwayatTiketOpen] = useState(false);
    const [isModalDetailRiwayatCamilanOpen, setIsModalDetailRiwayatCamilanOpen] = useState(false);
    const [error, setError] = useState(null);
    const [isEditing, setIsEditing] = useState(false); // State to toggle edit mode
    const [formValues, setFormValues] = useState({ name: '', email: '', password: '' }); // State for form values
    const [profilePicture, setProfilePicture] = useState(null); // State for profile picture file
    const [dataCamilan, setDataCamilan] = useState([]);
    

    const toggleModalLogOut = () => {
        setIsModalLogOutOpen(!isModalLogOutOpen);
    };

    const toggleModalDetailRiwayatTiket = () => {
        setIsModalDetailRiwayatTiketOpen(!isModalDetailRiwayatTiketOpen);
    }

    const toggleModalDetailRiwayatCamilan = () => {
        setIsModalDetailRiwayatCamilanOpen(!isModalDetailRiwayatCamilanOpen);
    }
    

    useEffect(() => {
        const userId = sessionStorage.getItem('userProfile');
        if (userId) {
            getUserProfile()
                .then(data => {
                    console.log("User Profile Data:", data);
                    setUserData(data);
                    setFormValues({ name: data.name, email: data.email, password: '' , profilePicture: data.profile_picture});
                })
                .catch(err => {
                    setError(err.message);
                    console.error("Error fetching user profile:", err);
                });
        } else {
            setError("User ID not found in session storage.");
            console.error("User ID not found in session storage.");
        }

        const fetchDataCamilan = async () => {
            try {
                const data = await getPembayaranCamilanByUser();
                setDataCamilan(data);
            } catch (error) {
                console.error("Error fetching snack:", error);
            }
        };
        
        fetchDataCamilan();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues(prevValues => ({
            ...prevValues,
            [name]: value
        }));
    };

    const handleEditProfile = async (e) => {
        e.preventDefault();
        try {
            await UpdateProfile(userData.id, formValues); // Pass the user ID and updated values
            setUserData(prevData => ({ ...prevData, name: formValues.name, email: formValues.email })); // Update local state
            setIsEditing(false); // Exit edit mode
            setFormValues(prevValues => ({ ...prevValues, password: '' })); // Reset password field
        } catch (err) {
            setError(err.message);
            console.error("Error updating profile:", err);
        }
    };

    const handleLogout = () => {
        Signout(); // Call the Signout function to clear session
        navigate("/"); // Redirect to login page
    };

    const handleProfilePictureChange = (e) => {
        setProfilePicture(e.target.files[0]); // Set the selected file
    };

    const handleProfilePictureUpload = async (e) => {
        e.preventDefault();
        if (!profilePicture) {
            setError("Please select a profile picture to upload.");
            return;
        }
    
        const formData = new FormData();
        formData.append('profile_picture', profilePicture); // Append the file to form data
    
        try {
            const response = await updateProfilePicture(formData); // Call the API to update the profile picture
            console.log("Upload Response:", response); // Log the response to check the URL
            // Update local state with the new URL
            setUserData(prevData => ({ 
                ...prevData, 
                profile_picture: response.data.profile_picture, // Update with the filename
                profile_picture_url: response.data.url // Update with the URL
            })); 
            setProfilePicture(null); // Reset the profile picture state
            setError(null); // Clear any previous errors
        } catch (err) {
            setError(err.message);
            console.error("Error updating profile picture:", err);
        }
    };
    
    return (
        
        <div className="body-profil">
            <TopNavBar />
            {isModalLogOutOpen && (
                <LogOutModal 
                    toggleModalLogOut={toggleModalLogOut} 
                    onConfirmLogout={handleLogout} // Pass the logout function to the modal
                />
            )}
            {isModalDetailRiwayatTiketOpen && <DetailRiwayatTiketModal toggleModalDetailRiwayatTiket={toggleModalDetailRiwayatTiket} />}
            {isModalDetailRiwayatCamilanOpen && <DetailRiwayatCamilanModal toggleModalDetailRiwayatCamilan={toggleModalDetailRiwayatCamilan} />}

            <div className="container-profil mb-5">
                <div className="row p-5">
                    <div className="col-md-6">
                        <h4>Info Akun</h4>
                        <div className="row pt-3">
                            <div className="col-12 d-flex align-items-center justify-content-center">
                                <img 
                                    src={userData ? getProfilePictureProfil(userData.profile_picture) : "default-avatar-url"} 
                                    className="img-fluid" 
                                    style={{ width: "250px", height: "250px", borderRadius: "50%" }} 
                                    alt="Profile"
                                />
                            </div>
                            <div className="col-12 d-flex align-items-center justify-content-center pt-3">
                                <input type="file" accept="image/*" onChange={handleProfilePictureChange} />
                                <button className="btn btn-success" style={{ width: "200px", borderRadius: "16px" }} onClick={handleProfilePictureUpload}>Ubah Gambar</button>
                            </div>
                        </div>
                        <form className="mt-4" onSubmit={handleEditProfile}>
                            {error && <div className="alert alert-danger">{error}</div>}
                            <div className="mb-3">
                                <label htmlFor="exampleInputNama" className="form-label">Nama Pengguna</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleInputNama"
                                    name="name"
                                    value={isEditing ? formValues.name : userData ? userData.name : ''}
                                    onChange={handleInputChange}
                                    readOnly={!isEditing}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail" className="form-label">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="exampleInputEmail"
                                    name="email"
                                    value={isEditing ? formValues.email : userData ? userData.email : ''}
                                    onChange={handleInputChange}
                                    readOnly={!isEditing}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword" className="form-label">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="exampleInputPassword"
                                    name="password"
                                    value={isEditing ? formValues.password : '********'}
                                    onChange={handleInputChange}
                                    readOnly={!isEditing}
                                />
                            </div>
                            <div className="row pt-3">
                                <div className="col">
                                    <button className="btn btn-success" style={{ width: "155px" }} type="button" onClick={() => setIsEditing(true)}>Edit Profil</button>
                                </div>
                                <div className="col text-end">
                                    <button className="btn btn-danger" style={{ width: "155px" }} type="button" onClick={toggleModalLogOut}>Keluar</button>
                                </div>
                            </div>
                            {isEditing && (
                                <div className="row pt-3">
                                    <div className="col text-end">
                                        <button className="btn btn-primary" style={{ width: "155px" }} type="submit">Simpan Perubahan</button>
                                    </div>
                                </div>
                            )}
                        </form>
                    </div>

                    <div className="col-md-6">
                        <h4 className="text-end pb-3">Pesanan Saya</h4>

                        <FilmCard/>

                        <CamilanCard/>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilPage;
