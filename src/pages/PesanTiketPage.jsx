import './css/Tiket.css';
import { useState, useEffect } from 'react';
import TopNavBar from '../components/TopNavbar';
import { getFilm } from '../api/apiFilm';
import { getStudio } from '../api/apiStudio';
import { pesanTiket } from '../api/apiPesanTiket';
import { getFilm } from '../api/apiFilm';
import { getPoster } from '../api/index';
import { getStudio } from '../api/apiStudio';
import { getGambarStudio } from '../api/index';
import { useNavigate } from 'react-router-dom';  

import PembayaranFilmModal from './PembayaranFilmPage';

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const PesanTiketPage = () => {
    const navigate = useNavigate();
    const [selectedDate, setSelectedDate] = useState("");
    const [selectedTime, setSelectedTime] = useState("");
    const [selectedFilm, setSelectedFilm] = useState(null);
    const [selectedStudio, setSelectedStudio] = useState(null);
    const [selectedSeat, setSelectedSeat] = useState("");
    const [film, setFilm] = useState([]);
    const [studio, setStudio] = useState([]);


    useEffect(() => {
        const fetchFilm = async () => {
            try {
                const data = await getFilm();
                setFilm(data);
            } catch (error) {
                console.error("Error fetching film:", error);
            }
        };

        fetchFilm();

        const fetchStudio = async () => {
            try {
                const data = await getStudio();
                setStudio(data);
            } catch (error) {
                console.error("Error fetching studio:", error);
            }
        };

        fetchStudio();
    }, []);

    const times = ["13.45", "16.30", "18.00", "20.30"];

    const handleSeatChange = (e) => {
        setSelectedSeat(e.target.value);
    };

    const handleBooking = async () => {
        // Prepare the data to send to the API
        const bookingData = {
            id_studio: selectedStudio?.id_studio,
            id_film: selectedFilm?.id_film,
            tanggal: selectedDate,
            waktu: selectedTime,
            tempat_duduk: selectedSeat,
            harga: 50000 // Example price, adjust as needed
        };
      
        try {
            const response = await pesanTiket(bookingData);
            console.log("Order snack successful:", response);
                toast.success("Lanjut Ke pembayaran!", {
                    autoClose: 1000, 
                    onClose: () => {
                        navigate("/pembayaran-tiket"); 
                    }
                });
        } catch (error) {
            setError("Gagal memesan tiket. Silakan coba lagi.");
        }
    };

    return (
        <div className="body-tiket">
            <TopNavBar />
            <div className="container-tiket pb-5">
                <h2>Pesan Tiket</h2>
                {error && <div className="alert alert-danger">{error}</div>}
                {success && <div className="alert alert-success">{success}</div>}
                <form>
                    <div className="btn-group">
                        <label htmlFor="tanggal">Pilih Tanggal:</label>
                        <input
                            type="date"
                            id="tanggal"
                            className="form-control"
                            value={selectedDate}
                            onChange={(e) => setSelectedDate(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <div className="btn-group">
                            <button
                                className="btn btn-dropdown dropdown-toggle"
                                type="button"
                                id="timeDropdown"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                {selectedTime || "Pilih Jam"}
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end">
                                {times.map((time) => (
                                    <li
                                        key={time}
                                        className="dropdown-item"
                                        onClick={() => setSelectedTime(time)}
                                    >
                                        <p style={{ fontSize: "12px" }}>{time}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="btn-group">
                            <button
                                className="btn btn-dropdown dropdown-toggle"
                                type="button"
                                id="filmDropdown"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                {selectedFilm?.judul || "Pilih Film"}
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end">
                                {film?.filter((film) => film.status === "Sedang Tayang").map((film) => (
                                    <li
                                        key={film.id_film}
                                        className="dropdown-item"
                                        onClick={() => handleFilmSelect(film)}
                                    >
                                        <img className='img-tiket' src={getPoster(film.poster)} alt={film.judul} style={{ width: "20%" }} />
                                        <div style={{ display: "flex", flexDirection: "column" }}>
                                            <span>{film.judul}</span>
                                            <p style={{ fontSize: "12px" }}>{film.rating}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="btn-group">
                            <button
                                className="btn btn-dropdown dropdown-toggle"
                                type="button"
                                id="studioDropdown"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                {selectedStudio?.nama_studio || "Pilih Studio"}
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end">
                                {studio.map((studio) => (
                                    <li
                                        key={studio.id_studio}
                                        className="dropdown-item"
                                        onClick={() => handleStudioSelect(studio)}
                                    >
                                        <img className='img-tiket' src={getGambarStudio(studio.gambar_studio)} alt={studio.nama_studio} />
                                        <div style={{ display: "flex", flexDirection: "column" }}>
                                            <span>{studio.nama_studio}</span>
                                            <p>{studio.deskripsi_studio}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="btn-group">
                            <label htmlFor="seatDropdown">Pilih Tempat Duduk:</label>
                            <input
                                type="text"
                                id="seatDropdown"
                                value={selectedSeat}
                                onChange={handleSeatChange}
                                className="form-control"
                            />
                        </div>
                    </div>
                    <button
                        type="button"
                        className="btn-pesan"
                        style={{ marginTop: "20px" }}
                        onClick={handleBooking}
                    >
                        Pesan Sekarang
                    </button>
                </form>
            </div>
        </div>
    );
};

export default PesanTiketPage;
