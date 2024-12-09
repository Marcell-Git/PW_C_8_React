import './css/Tiket.css';
import { useState } from 'react';
import TopNavBar from '../components/TopNavbar';

import reguler from '../assets/images/download.jpeg';
import dolby from '../assets/images/download (1).jpeg';
import vip from '../assets/images/download (2).jpeg';

import poster1 from '../assets/images/poster1.webp';
import poster2 from '../assets/images/poster2.webp';
import poster4 from '../assets/images/poster4.jpg';

const PesanTiketPage = () => {
    const [selectedDate, setSelectedDate] = useState("");
    const [selectedTime, setSelectedTime] = useState("");
    const [selectedFilm, setSelectedFilm] = useState(null);
    const [selectedStudio, setSelectedStudio] = useState(null);
    const [selectedSeat, setSelectedSeat] = useState("");

    const times = ["13.45", "16.30", "18.00", "20.30"];
    const films = [
        {
            id: 1,
            title: "Home Sweet Loan",
            description: "2024 - Comedy - 1 Hours 52 Minutes",
            poster: poster1,
        },
        {
            id: 2,
            title: "Kuasa Gelap",
            description: "2024 - Horror - 1 Hours 36 Minutes",
            poster: poster2,
        },
        {
            id: 3,
            title: "Boleh Kah Sekali Saja Ku Menangis",
            description: "2024 - Drama - 1 Hours 41 Minutes",
            poster: poster4,
        },
    ];
    const studios = [
        {
            id: 1,
            name: "Reguler",
            description: "Pengalaman biasa saja",
            image: reguler,
        },
        {
            id: 2,
            name: "Dolby Atmos",
            description: "Pengalaman dengan suara yang lebih menggelegar",
            image: dolby,
        },
        {
            id: 3,
            name: "VIP",
            description: "Sofa yang nyaman dan suara yang menggelegar",
            image: vip,
        },
    ];

    const handleSeatChange = (e) => {
        setSelectedSeat(e.target.value);
    };

    const handleBooking = () => {
        alert(`Anda berhasil memesan tiket dengan detail berikut:
        Tanggal: ${selectedDate}
        Jam: ${selectedTime}
        Film: ${selectedFilm?.title}
        Studio: ${selectedStudio?.name}
        Tempat Duduk: ${selectedSeat}`);
    };

    return (
        <div className="body-tiket">
            <TopNavBar  />
            <div class="container-tiket pb-5">
                <h2>Pesan Tiket</h2>
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
                                onClick={() => setSelectedFilm(film)}
                            >
                                <img className='img-tiket' src={film.poster} alt={film.title} style={{width: "20%"}} />
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
                                onClick={() => setSelectedStudio(studio)}
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