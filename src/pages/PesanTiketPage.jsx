import './css/Tiket.css';
import { useState, useEffect } from 'react';
import TopNavBar from '../components/TopNavbar';
import { getFilm } from '../api/apiFilm';
import { getStudio } from '../api/apiStudio';
import { pesanTiket } from '../api/apiPesanTiket';

const PesanTiketPage = () => {
    const [selectedDate, setSelectedDate] = useState("");
    const [selectedTime, setSelectedTime] = useState("");
    const [selectedFilm, setSelectedFilm] = useState(null);
    const [selectedStudio, setSelectedStudio] = useState(null);
    const [selectedSeat, setSelectedSeat] = useState("");
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const [studios, setStudios] = useState([]);
    const [films, setFilms] = useState([]); // Perbaiki nama state menjadi films

    const times = ["13.45", "16.30", "18.00", "20.30"];

    useEffect(() => {
        const fetchFilm = async () => {
            try {
                const data = await getFilm();
                console.log(data);
                setFilms(data); // Mengatur state films
            } catch (error) {
                console.error("Error fetching film:", error);
            }
        };

        fetchFilm();
    }, []);

    useEffect(() => {
        const fetchStudio = async () => {
            try {
                const data = await getStudio();
                console.log(data);
                setStudios(data); // Mengatur state studios
            } catch (error) {
                console.error("Error fetching studio:", error);
            }
        };

        fetchStudio();
    }, []);

    const handleSeatChange = (e) => {
        setSelectedSeat(e.target.value);
    };

    const handleFilmSelect = (film) => {
        setSelectedFilm(film);
    };

    const handleStudioSelect = (studio) => {
        setSelectedStudio(studio);
    };

    const handleBooking = async () => {
        setError(null);
        setSuccess(null);
        try {
            const token = sessionStorage.getItem("token");
            if (!token) {
                throw new Error("No token found");
            }

            const response = await pesanTiket({
                date: selectedDate,
                time: selectedTime,
                film: selectedFilm?.title,
                studio: selectedStudio?.name,
                seat: selectedSeat,
            }, token);

            setSuccess("Anda berhasil memesan tiket!");
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
                                {selectedFilm?.title || "Pilih Film"}
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end">
                                {films.map((film) => (
                                    <li
                                        key={film.id}
                                        className="dropdown-item"
                                        onClick={() => handleFilmSelect(film)}
                                    >
                                        <img className='img-tiket' src={film.poster} alt={film.title} style={{ width: "20%" }} />
                                        <div style={{ display: "flex", flexDirection: "column" }}>
                                            <span>{film.title}</span>
                                            <p style={{ fontSize: "12px" }}>{film.description}</p>
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
                                {selectedStudio?.name || "Pilih Studio"}
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end">
                                {studios.map((studio) => (
                                    <li
                                        key={studio.id}
                                        className="dropdown-item"
                                        onClick={() => handleStudioSelect(studio)}
                                    >
                                        <img className='img-tiket' src={studio.image} alt={studio.name} />
                                        <div style={{ display: "flex", flexDirection: "column" }}>
                                            <span>{studio.name}</span>
                                            <p>{studio.description}</p>
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
