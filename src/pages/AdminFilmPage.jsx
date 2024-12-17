import '../pages/css/AdminFilm.css';
import TopNavbarAdmin from '../components/TopNavbarAdmin';
import React, { useState, useEffect } from "react";
import TambahFilmModal from '../components/Modals/TambahFilmModal';
import EditFilmModal from '../components/Modals/EditFilmModal';
import LogOutModal from '../components/Modals/LogOutModal'; // Import LogOutModal
import { getFilm, createFilm, updateFilm } from '../api/apiFilm'; // Import API functions
import { toast } from 'react-toastify'; // Import toast for notifications

const AdminFilmPage = () => {
    const [isModalTambahFilmOpen, setIsModalTambahFilmOpen] = useState(false);
    const [isModalEditFilmOpen, setIsModalEditFilmOpen] = useState(false);
    const [isModalLogOutOpen, setIsModalLogOutOpen] = useState(false); // State for logout modal
    const [films, setFilms] = useState([]); // State to hold film data
    const [selectedFilm, setSelectedFilm] = useState(null); // State to hold the selected film for editing
    const [error, setError] = useState(null); // State to hold error messages

    const toggleModalTambahFilm = () => {
        setIsModalTambahFilmOpen(!isModalTambahFilmOpen);
    }

    const toggleModalEditFilm = () => {
        setIsModalEditFilmOpen(!isModalEditFilmOpen);
    }

    const toggleModalLogOut = () => {
        setIsModalLogOutOpen(!isModalLogOutOpen);
    }

    useEffect(() => {
        const fetchFilms = async () => {
            try {
                const filmData = await getFilm(); // Fetch film data
                setFilms(filmData); // Set the fetched film data
                setError(null); // Clear any previous errors
            } catch (error) {
                console.error("Error fetching films:", error);
                setError(error.message || "An error occurred while fetching films.");
            }
        };
        fetchFilms();
    }, []);

    const handleFilmSelect = (film) => {
        setSelectedFilm(film); // Set the selected film for editing
        toggleModalEditFilm(); // Open the edit modal
    };

    const handleAddFilm = async (filmData) => {
        try {
            await createFilm(filmData); // Call the createFilm function
            const updatedFilms = await getFilm(); // Refresh the film list
            setFilms(updatedFilms); // Update the films state
            toast.success("Film berhasil ditambahkan!"); // Show success message
            toggleModalTambahFilm(); // Close the add film modal
        } catch (error) {
            console.error("Error adding film:", error);
            toast.error("Gagal menambahkan film. Coba lagi!"); // Show error message
        }
    };

    const handleEditFilm = async (filmData) => {
        try {
            await updateFilm({ ...filmData, id_film: selectedFilm.id_film }); // Call the updateFilm function with the film ID
            const updatedFilms = await getFilm(); // Refresh the film list
            setFilms(updatedFilms); // Update the films state
            toast.success("Film berhasil diperbarui!"); // Show success message
            toggleModalEditFilm(); // Close the edit film modal
            setSelectedFilm(null); // Reset selected film to avoid stale data
        } catch (error) {
            console.error("Error updating film:", error);
            toast.error("Gagal memperbarui film. Coba lagi!"); // Show error message
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('authToken'); // Clear authentication token
        window.location.href = '/'; // Redirect to login page
    };

    return (
        <div>
            <TopNavbarAdmin />
            {isModalTambahFilmOpen && <TambahFilmModal toggleModalTambahFilm={toggleModalTambahFilm} onAddFilm={handleAddFilm} />}
            {isModalEditFilmOpen && <EditFilmModal toggleModalEditFilm={toggleModalEditFilm} film={selectedFilm} onEditFilm={handleEditFilm} />}
            {isModalLogOutOpen && <LogOutModal toggleModalLogOut={toggleModalLogOut} onConfirmLogout={handleLogout} />}
            <div className="container">
                <div className="card card-adminFilm">
                    <button className="btn btn-success mb-4" style={{ width: "10%" }} onClick={toggleModalTambahFilm}>
                        <i className="fa-regular fa-square-plus"></i> Tambah
                    </button>
                    {error && <div className="alert alert-danger">{error}</div>}
                    <table className="table table-dark table-striped">
                        <thead>
                            <tr>
                                <th scope="col" className="text-center judul">ID</th>
                                <th scope="col" className="text-center judul">Poster</th>
                                <th scope="col" className="text-center judul">Judul</th>
                                <th scope="col" className="text-center judul">Tanggal Tayang</th>
                                <th scope="col" className="text-center judul">Sinopsis</th>
                                <th scope="col" className="text-center judul">Rating</th>
                                <th scope="col" className="text-center judul">Pemeran</th>
                                <th scope="col" className="text-center judul">Status</th>
                                <th scope="col" className="text-center judul">Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Array.isArray(films) && films.map((film, index) => (
                                <tr key={film.id_film}>
                                    <th scope="row" className="text-center body">{index + 1}</th>
                                    <td><img src={`http://127.0.0.1:8000/storage/poster/${film.poster}`} className="img-fluid" alt="Poster" /></td>
                                    <td className="text-center body">{film.judul}</td>
                                    <td className="text-center body">{film.tanggal_tayang}</td>
                                    <td className="text-center body sinopsis">{film.sinopsis}</td>
                                    <td className="text-center body">{film.rating}</td>
                                    <td className="text-center body">{film.pemeran}</td>
                                    <td><span className={`badge ${film.status === 'Sedang Tayang' ? 'text-bg-success' : 'text-bg-warning'}`}>{film.status}</span></td>
                                    <td className="text-center">
                                        <button className="btn" onClick={() => handleFilmSelect(film)}>
                                            <i className="fa fa-pencil-alt" style={{ color: "white" }}></i>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AdminFilmPage;
