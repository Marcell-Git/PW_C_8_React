import './css/Dashboard.css';
import React, { useState } from 'react';

import { useEffect } from 'react';
import { getFilm } from '../api/apiFilm';
import { getPoster } from '../api/index';

import ImageCarousel from '../components/CarouselImage';
import TopNavBar from '../components/TopNavbar';

import imgLogo from '../assets/images/logo.png';

import promo1 from '../assets/images/event1.png';
import promo2 from '../assets/images/event2.png';
import promo3 from '../assets/images/event3.png';

import DetailFilmModal from '../components/Modals/DetailFilmModal';
import { use } from 'react';

const promo = [
    promo1, promo2, promo3
]

const DashboardPage = () => {
    const [selectedFilm, setSelectedFilm] = useState(null);
    const [film, setFilm] = useState([]);

    useEffect(() => {
        const fetchFilm = async () => {
            try {
                const data = await getFilm();
                console.log(data);
                setFilm(data);
            } catch (error) {
                console.error("Error fetching film:", error);
            }
        };

        fetchFilm();
    }, []);

    const handleFilmSelect = (film) => {
        setSelectedFilm(film);
    };

    return (
        <div className="body-dashboard">
            <div className="">
                <TopNavBar  />
            </div>

            <DetailFilmModal film={selectedFilm} />
            <ImageCarousel images={promo} />

            <h4 className="text-light  p-4" >Sedang Tayang</h4>

            
            <div className="d-flex align-items-center justify-content-center p-5">
                <div className="row row-cols-1 row-cols-md-4 g-5 d-flex">
                    {film?.filter((film) => film.status === "Sedang Tayang").map((film) => (
                        <div className="col" key={film.id_film}>
                            <div className="card card-dashboard">
                                <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#detailFilm" onClick={() => handleFilmSelect(film)}>
                                    <img src={getPoster(film.poster)} className="card-img-top rounded img-fluid img-dashboard" style={{ width: "350px", height: "564px" }} />
                                </button>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-sm-9">
                                            <h5 className="card-title card-title-dashboard">{film.judul}</h5>
                                        </div>
                                        <div className="col-sm-3">
                                            <div className="d-flex align-items-center justify-content-end">
                                                <h5 style={{ color: film.rating === "SU" ? "green" : film.rating === "D17+" ? "red" : "blue" }}>{film.rating}</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <h4 className="text-light" >Mendatang</h4>

            <div className="d-flex align-items-center justify-content-center p-5">
                <div className="row row-cols-1 row-cols-md-4 g-5 d-flex">
                    {film?.filter((film) => film.status === "Mendatang").map((film) => (
                        <div className="col" key={film.id_film}>
                            <div className="card card-dashboard">
                                <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#detailFilm" onClick={() => handleFilmSelect(film)}>
                                    <img src={getPoster(film.poster)} className="card-img-top rounded img-fluid img-dashboard" style={{ width: "350px", height: "564px" }} />
                                </button>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-sm-9">
                                            <h5 className="card-title card-title-dashboard">{film.judul}</h5>
                                        </div>
                                        <div className="col-sm-3">
                                            <div className="d-flex align-items-center justify-content-end">
                                                <h5 style={{ color: film.rating === "SU" ? "green" : film.rating === "D17+" ? "red" : "blue" }}>{film.rating}</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div style={{backgroundColor: "#162F4B"}}>
                <div class="row pt-2">
                    <div class="col d-flex" style={{alignItems: "center", paddingLeft: "100px"}}>
                        <img src={imgLogo} style={{width: "50%"}}/>
                    </div>
                    <div class="col d-flex" style={{alignItems: "center", paddingRight: "100px"}}>
                        <p class="text-center" style={{color: "white"}}>
                            © 2024 VGC Cinema. Semua hak dilindungi undang-undang. Pesan tiket dan snack dengan mudah, nikmati film favorit Anda tanpa antre. Temukan lokasi bioskop terdekat, jadwal film terbaru, dan promo menarik hanya di VGC Cinema.
                        </p>
                    </div>
                </div>

                <div class="d-flex justify-content-center">
                    <h3 style={{color: "white", fontSize: "20px"}}>
                        Ikuti Kami
                    </h3>
                </div>

                <div class="d-flex justify-content-center pt-3" style={{paddingBottom: "40px"}}>
                    <div class="row">
                        <div class="col">
                            <i class="fa-brands fa-facebook"></i>
                        </div>
                        <div class="col">
                            <i class="fa-brands fa-twitter"></i>
                        </div>
                        <div class="col">
                            <i class="fa-brands fa-instagram"></i>
                        </div>
                    </div>
                </div>
            </div>
            <footer>
                <div style={{backgroundColor: "#1E3E62"}}>
                    <h5 class="text-center p-3" style={{color: "white"}}>2024 VGC Cinema - Tugas Besar Pemrograman Web</h5>
                </div>
            </footer>
        </div>
    );
};

export default DashboardPage;