import React, { useState, useEffect } from "react";
import { getPembayaranCamilanByUser } from "../api/apiPembayaranCamilan";
import DetailRiwayatCamilanModal from "./Modals/DetailRiwayatCamilanModal";

const CamilanCard = () => {
    const [dataCamilan, setDataCamilan] = useState([]);
    const [isModalDetailRiwayatCamilanOpen, setIsModalDetailRiwayatCamilanOpen] = useState(false);
    const [selectedCamilan, setSelectedCamilan] = useState(null);

    useEffect(() => {
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

    const toggleModalDetailRiwayatCamilan = () => {
        setIsModalDetailRiwayatCamilanOpen(!isModalDetailRiwayatCamilanOpen);
    };

    const handleCamilanSelect = (camilan) => {
        setSelectedCamilan(camilan);
    }

    return (
        <div>
            <DetailRiwayatCamilanModal
                isOpen={isModalDetailRiwayatCamilanOpen}
                toggleModal={toggleModalDetailRiwayatCamilan}
                data = {selectedCamilan}
            />

            {dataCamilan.length > 0 ? (
                dataCamilan.map((item) => (
                    <div key={item.id_pemesanan_camilan} className="d-flex align-items-center justify-content-end">
                        <div className="card mb-3" style={{ width: "100%", backgroundColor: "transparent", borderBottom: "3px solid white" }}>
                            <div className="row g-0 p-3">
                                <div className="col-md-10 w-100">
                                    <div className="card-body p-0">
                                        <div className="row">
                                            <div className="col-md-7">
                                                <h5 className="card-title" style={{ color: "#FF6500" }}>Camilan</h5>
                                            </div>
                                            <div className="col-md-5 text-end">
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-10">
                                                <p className="card-text">{item.snack.nama_snack}</p>
                                                <p style={{ color: "red" }} className="card-text pt-4">Rp. {new Intl.NumberFormat('id-ID').format(item.total_pembayaran_camilan)}</p>
                                            </div>
                                            <div className="col-md-2 text-end">
                                                <button style={{ fontSize: "30px", color: "white" }} type="button" className="btn" onClick={() => { handleCamilanSelect(item); toggleModalDetailRiwayatCamilan(); }}>
                                                    <i className="fa-solid fa-utensils" style={{ fontSize: "30px" }}></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <p>Tidak ada data camilan tersedia.</p>
            )}
        </div>
    );
};

export default CamilanCard;
