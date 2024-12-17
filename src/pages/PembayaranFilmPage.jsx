import { getNewestTiket } from '../api/apiPesanTiket';
import TopNavBar from '../components/TopNavbar';
import { useEffect, useState } from 'react';
import { getPoster } from '../api';
import { postPembayaranTiket } from '../api/apiPembayaranTiket';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from 'react-router-dom';


const PembayaranFilm = () => {
    const navigate = useNavigate();
    const [tiket, setTiket] = useState([]);
    const [data, setData] = useState({
        metode_pembayaran: "",
        total_pembayaran: 55000,
        id_tiket: "",
    });

    useEffect(() => {
        const fetchTiket = async () => {
            try {
                const data = await getNewestTiket();
                setTiket(data);
                setData((prevData) => ({
                    ...prevData,
                    id_tiket: data.id_tiket,
                }));
            } catch (error) {
                console.error("Error fetching tiket:", error);
            }
        };

        fetchTiket();
    }, []);

    const handlePaymentMethodChange = (event) => {
        setData((prevData) => ({
            ...prevData,
            metode_pembayaran: event.target.value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    
        if (!data.metode_pembayaran || !data.total_pembayaran) {
            alert("Semua kolom harus diisi!");
            return;
        }
    
        postPembayaranTiket(data)
            .then((res) => {
                console.log(res);
                console.log("Order snack successful:", res);
                    toast.success("Pemesanan Tiket berhasil!", {
                        autoClose: 1000, 
                        onClose: () => {
                            navigate("/profil"); 
                        }
                    });
            })
            .catch((error) => {
                console.error("Error pembayaran:", error);
                alert("Pembayaran gagal!");
            });
    }

    return (
        <div style={{ paddingTop: "150px", paddingBottom: "50px" }}>
            <TopNavBar />
            <div className='d-flex justify-content-center'>
                <div className="body-orderCamilan p-5" style={{ maxWidth: "50%" }}>
                    <h2>Pembayaran Film</h2>
                    <div className='border-bottom'></div>

                    <p className='pt-3'><strong>Detail Tiket</strong></p>
                    <div className="row">
                        <div className="col-md-6">
                            <p>Nama Film: {tiket.film?.judul}</p>
                            <p>Studio: {tiket.studio?.nama_studio}</p>
                            <p>Tanggal: {tiket.tanggal}</p>
                            <p>Jam: {tiket.waktu}</p>
                            <p>Kursi: {tiket.tempat_duduk}</p>
                        </div>
                        <div className="col-md-6 d-flex justify-content-end">
                            <img src={getPoster(tiket.film?.poster)} alt="Poster Film" style={{ width: "40%" }} />
                        </div>
                    </div>

                    <div className='border-bottom pt-3'></div>
                    <form onSubmit={handleSubmit}>

                        <h5 className='pt-3' style={{color: "white"}}><strong>Metode Pembayaran</strong></h5>
                        <div className="pr-5 pt-3">
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
                        <h5 className='text-end pt-3' style={{color: "white"}}>Total Pembayaran</h5>
                        <h5 className='text-end' style={{color: "white"}}>Rp. {new Intl.NumberFormat('id-ID').format(data.total_pembayaran)}</h5>
                        <div className="border-bottom pt-3"></div>
                        <div className="d-flex justify-content-center pt-3">
                            <button type="submit" className="btn btn-primary w-50">Bayar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PembayaranFilm;
