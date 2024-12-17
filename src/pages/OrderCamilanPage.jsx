import TopNavBar from '../components/TopNavbar';
import { getSnack } from '../api/apiSnack';
import { postPembayaranCamilan } from '../api/apiPembayaranCamilan';
import { useEffect, useState } from 'react';
import { getGambarSnack } from '../api';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from 'react-router-dom';
import './css/OrderCamilan.css';

const OrderCamilanPage = () => {
    const [snacks, setSnack] = useState([]);
    const [selectedsnack, setSelectedsnack] = useState(null);       
    const [data, setData] = useState({
        id_snack: "",
        metode_pembayaran_camilan: "",
        total_pembayaran_camilan: "",
    });
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

    const handleSnackSelect = (snack) => {
        setSelectedsnack(snack);
        setData((prevData) => ({
            ...prevData,
            id_snack: snack.id_snack,
            total_pembayaran_camilan: snack.harga_snack,
        }));
    };

    const handlePaymentMethodChange = (event) => {
        setData((prevData) => ({
            ...prevData,
            metode_pembayaran_camilan: event.target.value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    
        if (!data.id_snack || !data.metode_pembayaran_camilan || !data.total_pembayaran_camilan) {
            alert("Semua kolom harus diisi!");
            return;
        }
    
        postPembayaranCamilan(data)
            .then((res) => {
                console.log("Order snack successful:", res);
                toast.success("Pemesanan snack berhasil!", {
                    autoClose: 1000, 
                    onClose: () => {
                        navigate("/profil"); 
                    }
                });
            })
            .catch((err) => {
                console.error("Order snack failed:", err);
                toast.error(err.message || "Terjadi kesalahan saat memesan snack.", {
                    autoClose: 1500, 
                });
            });
    };

    return (
        <div>
            <TopNavBar  />
            <div className='d-flex align-items-center justify-content-center'>
                <div className="body-orderCamilan p-5">  
                    <h2>Pesan Camilan</h2>

                    <form onSubmit={handleSubmit}>
                        <div className="form-group-pesan pt-3 pb-3" style={{width: "100%"}}>
                            <div className="btn-group-pesan">
                                <button
                                    className="btn btn-dropdown dropdown-toggle"
                                    type="button"
                                    id="snackDropdown"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    {selectedsnack?.nama_snack || "Pilih snack"}
                                </button>
                                <ul className="dropdown-menu dropdown-menu-end" style={{ maxHeight: "270px", maxWidth: "670px", overflowY: "auto" }}>
                                    {snacks.map((snack) => (
                                        <li
                                            key={snack.id_snack}
                                            className="dropdown-item"
                                            onClick={() => handleSnackSelect(snack)}
                                        >
                                            <img 
                                                className='img-tiket' 
                                                src={getGambarSnack(snack.gambar_snack)} 
                                                alt={snack.nama_snack} 
                                                style={{width: "80px", height: "auto"}} 
                                            />
                                            <div style={{ display: "flex", flexDirection: "column" }}>
                                                <span style={{fontSize: "18px"}}>{snack.nama_snack}</span>
                                                <p style={{ fontSize: "14px", wordWrap: "break-word", whiteSpace: "normal" }}>
                                                    {snack.deskripsi_snack}
                                                </p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <p style={{fontSize: "20px"}}>Metode Pembayaran</p>
                        <div className="pr-5">
                            <div className="form-check form-check-inline">
                                <input 
                                    className="form-check-input" 
                                    type="radio" 
                                    name="inlineRadioOptions" 
                                    id="inlineRadio1" 
                                    value="Transfer Bank"
                                    onChange={handlePaymentMethodChange}
                                />
                                <label className="form-check-label" for="inlineRadio1">
                                    <img 
                                        src="https://cdn.prod.website-files.com/64199d190fc7afa82666d89c/648b63af41676287e601542d_regular-bank-transfer.png" 
                                        style={{height: "60px", width: "170px"}}
                                    />
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input 
                                    className="form-check-input" 
                                    type="radio" 
                                    name="inlineRadioOptions" 
                                    id="inlineRadio2" 
                                    value="OVO"
                                    onChange={handlePaymentMethodChange}
                                />
                                <label className="form-check-label" for="inlineRadio2">
                                    <img 
                                        src="https://i0.wp.com/bosbiller.com/wp-content/uploads/2020/12/logo-ovo-pay.png?fit=1000%2C412&ssl=1" 
                                        style={{height: "60px", width: "170px"}} 
                                    />
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input 
                                    className="form-check-input" 
                                    type="radio" 
                                    name="inlineRadioOptions" 
                                    id="inlineRadio3" 
                                    value="Gopay"
                                    onChange={handlePaymentMethodChange}
                                />
                                <label className="form-check-label" for="inlineRadio3">
                                    <img 
                                        src="https://i0.wp.com/umsu.ac.id/berita/wp-content/uploads/2024/07/cara-lihat-nomor-gopay-di-aplikasi-gojek.webp?fit=850%2C510&ssl=1" 
                                        style={{height: "60px", width: "170px"}} 
                                    />
                                </label>
                            </div>
                        </div>
                        <div className="border-bottom pt-3"></div>  
                        
                        <div className="row pt-3">
                            <div className="col">
                                <h5 className='text-light'>Total Pembayaran</h5>
                            </div>
                            <div className="col d-flex align-items-end justify-content-end">
                                <h5 className="text-light">
                                    Rp. {new Intl.NumberFormat('id-ID').format(selectedsnack?.harga_snack)}
                                </h5>
                            </div>
                        </div>

                        <div className="d-flex justify-content-center pt-3">
                            <button type="submit" className="btn btn-success" style={{width: "70%", fontSize: "20px"}}>
                                <strong>Pesan Sekarang</strong>
                            </button>
                        </div>
                    </form>
                    <ToastContainer /> 
                </div>
            </div>
        </div>
    );  
}

export default OrderCamilanPage;
