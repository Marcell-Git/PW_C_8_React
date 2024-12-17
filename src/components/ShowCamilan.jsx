import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';  
import { getSnack } from "../api/apiSnack";
import { getGambarSnack } from "../api/index";

const ShowCamilan = () => {
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [snack, setSnack] = useState([]);
    const navigate = useNavigate();  

    useEffect(() => {
        const fetchSnack = async () => {
            try {
                const snackData = await getSnack();
                const sortedSnackData = snackData.sort((a, b) => a.id_snack - b.id_snack);
                setSnack(sortedSnackData);
            } catch (error) {
                console.error("Error fetching snack:", error);
            }
        };

        fetchSnack();
    }, []);

    const showItems = (category) => {
        setSelectedCategory(category);
    };

    const handlePesanSekarang = () => {
        navigate('/pesanCamilan'); 
    };

    return (
        <div>
            <div>
                <button onClick={() => showItems("all")} className="float-start btn btn-nav ms-4 mb-2 text-center" style={{width:"85px", height: "40px"}}>
                    <strong>Semua</strong>
                </button>
                <button onClick={() => showItems("promo")} className="btn btn-nav ms-4 mb-2 text-center" style={{width:"85px", height: "40px"}}>
                    <strong>Promo</strong>
                </button>
                <button onClick={() => showItems("paket")} className="btn btn-nav ms-4 mb-2" style={{width:"85px", height: "40px"}}>
                    <strong>Paket</strong>
                </button>
                <button onClick={handlePesanSekarang} className="float-end btn btn-success ms-4 mb-2" style={{width:"170px", height: "40px"}}>
                    <strong>Pesan Sekarang</strong>
                </button>
            </div>

            <div className="row row-cols-1 row-cols-md-2 g-4 w-100">
                {snack
                    .filter(
                        (item) => selectedCategory === "all" || item.jenis_snack === selectedCategory
                    )
                    .map((item, index) => (
                        <Card key={index} item={item} />
                    ))}
            </div>
        </div>
    );
};

const Card = ({ item }) => {
    return (
        <div className="col-md-6">
            <div className="card h-100 bg-transparent border-0">
                <div className="row g-0 item">
                    <div className="col-md-4">
                        <div className="d-flex align-items-center justify-content-center">
                            <img
                                src={getGambarSnack(item.gambar_snack)}
                                className="img-fluid my-3 mx-2"
                                alt={item.nama_snack}
                            />
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body bg-transparent">
                            <h5 className="card-title text-white">
                                <strong>{item.nama_snack}</strong>
                            </h5>
                            <p className="card-text text-white text-custom">{item.deskripsi_snack}</p>
                            <p className="card-text text-white fs-5">
                                <strong>{item.harga_snack}</strong>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowCamilan;
