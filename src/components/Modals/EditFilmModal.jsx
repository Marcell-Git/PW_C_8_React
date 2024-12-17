import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify'; // Import toast for notifications
import { updateFilm } from '../../api/apiFilm'; // Adjust the path accordingly

const EditFilmModal = ({ toggleModalEditFilm, film, onEditFilm }) => {
    const [formData, setFormData] = useState({
        poster: null,
        judul: '',
        tanggal_tayang: '',
        rating: '',
        pemeran: '',
        sinopsis: '',
        status: 'Sedang Tayang', // Default status
        review: '', // Assuming you have a review field
    });

    useEffect(() => {
        if (film) {
            setFormData({
                ...formData,
                judul: film.judul,
                tanggal_tayang: film.tanggal_tayang,
                rating: film.rating,
                pemeran: film.pemeran,
                sinopsis: film.sinopsis,
                status: film.status,
                review: film.review || '', // Assuming you have a review field
            });
        }
    }, [film]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (event) => {
        setFormData({ ...formData, poster: event.target.files[0] });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const { judul, tanggal_tayang, rating, pemeran, sinopsis, status, review } = formData;
    
        // Validate form data
        if (!judul || !tanggal_tayang || !rating || !pemeran || !sinopsis || review === '') {
            toast.error("Semua field harus diisi!");
            return;
        }
    
        const updateData = {
            judul,
            tanggal_tayang,
            rating,
            pemeran,
            sinopsis,
            status,
            review,
        };
    
        console.log("Update Data:", updateData); // Log the data being sent
    
        try {
            await updateFilm(updateData); // Call the updateFilm function
            toast.success("Film berhasil diperbarui!"); // Show success message
            toggleModalEditFilm(); // Close the edit film modal
        } catch (error) {
            console.error("Error updating film:", error);
            toast.error("Gagal memperbarui film. Coba lagi!"); // Show error message
        }
    };

    return (
        <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dark modal-dialog-centered modal-m">
                <div className="modal-content p-3" style={{ backgroundColor: "#212121" }}>
                    <div className="modal-header">
                        <h3 className="text-center" style={{ color: "white" }}>Edit Film</h3>
                        <button type="button" className="btn-close" onClick={toggleModalEditFilm}></button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label className="form-label" style={{ color: "white" }}>Poster</label>
                                <input className="form-control" type="file" onChange={handleFileChange} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label" style={{ color: "white" }}>Judul</label>
                                <input type="text" className="form-control" name="judul" value={formData.judul} onChange={handleChange} required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label" style={{ color: "white" }}>Tanggal Tayang</label>
                                <input type="date" className="form-control" name="tanggal_tayang" value={formData.tanggal_tayang} onChange={handleChange} required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label" style={{ color: "white" }}>Rating</label>
                                <input type="number" className="form-control" name="rating" value={formData.rating} onChange={handleChange} required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label" style={{ color: "white" }}>Pemeran</label>
                                <input type="text" className="form-control" name="pemeran" value={formData.pemeran} onChange={handleChange} required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label" style={{ color: "white" }}>Sinopsis</label>
                                <textarea className="form-control" name="sinopsis" value={formData.sinopsis} onChange={handleChange} rows="4" required></textarea>
                            </div>
                            <div className="mb-3">
                                <label className="form-label" style={{ color: "white" }}>Status</label>
                                <select className="form-select" name="status" value={formData.status} onChange={handleChange} required>
                                    <option value="Sedang Tayang">Sedang Tayang</option>
                                    <option value="Selesai Tayang">Selesai Tayang</option>
                                    <option value="Segera Tayang">Segera Tayang</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label className="form-label" style={{ color: "white" }}>Review (Integer)</label>
                                <input type="number" className="form-control" name="review" value={formData.review} onChange={handleChange} required />
                            </div>
                            <div className="row pt-3">
                                <div className="col-2">
                                    <button type="button" className="btn btn-danger" onClick={toggleModalEditFilm}>Batal</button>
                                </div>
                                <div className="col-10">
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

export default EditFilmModal;
