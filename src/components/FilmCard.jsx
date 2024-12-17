import React, { useState, useEffect} from 'react';
import { getPembayaranTiketByUser } from '../api/apiPembayaranTiket';
import { getPoster } from '../api';
import DetailRiwayatTiketModal from './Modals/DetailRiwayatTiketModal';

const FilmCard = () => {
    const [pembayaranTiket, setPembayaranTiket] = useState([]);
    const [selectedFilm, setSelectedFilm] = useState(null);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const openModal = (film) => {
        setSelectedFilm(film);
        setIsModalVisible(true);
    };
    
    const closeModal = () => {
        setSelectedFilm(null);
        setIsModalVisible(false);
    };
    
    useEffect(() => {
        const fetchPembayaranTiket = async () => {
            try {
                const data = await getPembayaranTiketByUser();
                setPembayaranTiket(data);
            } catch (error) {
                console.error("Error fetching pembayaran tiket:", error);
            }
        };

        fetchPembayaranTiket();
    }, []);

    return(
        <div>
            {pembayaranTiket.map((item) => (
                <div key={item.id_pembayaran_tiket} className="d-flex align-items-center justify-content-end">
                    <div className="card card-profil mb-3" style={{ width: "100%", backgroundColor: "transparent", borderBottom: "3px solid white" }}>
                        <div className="row g-0 p-3">
                            <div className="col-md-3 d-flex align-items-center justify-content-start">
                                <img src={getPoster(item.tiket.film.poster)} className="img-fluid" style={{ width: "101px", height: "151px", borderRadius: "16px" }} />
                            </div>
                            <div className="col-md-9">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-7">
                                            <h5 className="card-title" style={{ color: "#FF6500" }}>{item.tiket.film.judul}</h5>
                                        </div>
                                        <div className="col-md-5 text-end">
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-10">
                                            <p className="card-text">{item.tiket.tempat_duduk} - {item.tiket.studio.nama_studio}</p>
                                            <p style={{ color: "red" }} className="card-text pt-4">Rp. {item.total_pembayaran}</p>
                                        </div>
                                        <div className="col-md-2 text-end">
                                            <button style={{ fontSize: "30px", color: "white" }} type="button" className="btn" onClick={() => openModal(item)}><i className="fa-solid fa-ticket" style={{ fontSize: "30px" }}></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            <DetailRiwayatTiketModal
                film={selectedFilm} 
                isVisible={isModalVisible} 
                onClose={closeModal} 
            />
        </div>
    )
}

export default FilmCard;