import React, { useState } from "react";

import DetailCamilanModal from "../components/Modals/DetailCamilanModal";

import PopcornJumbo from '../assets/images/menu/popcorn jumbo.png';
import Hotdog from '../assets/images/menu/hotdog.png';
import CocaCola from '../assets/images/menu/coca-cola.png';
import Fanta from '../assets/images/menu/fanta.png';
import Popcorn from '../assets/images/menu/popcorn.png';
import Kentang from '../assets/images/menu/kentang.png';

import KenyangKecil from '../assets/images/menu/kenyang kecil.png';
import KenyangAja from '../assets/images/menu/kenyang aja.png';
import CemilPopcorn from '../assets/images/menu/cemil popcorn.png';
import NontonBerempat from '../assets/images/menu/nonton berempat.png';
import NontonBerenam from '../assets/images/menu/nonton berenam.png';

import Hemat1 from '../assets/images/menu/hemat1.png';
import Hemat2 from '../assets/images/menu/hemat2.png';
import Hemat3 from '../assets/images/menu/hemat3.png';
import Hemat4 from '../assets/images/menu/hemat4.png';
import Hemat5 from '../assets/images/menu/hemat5.png';

const data = [
    {
        category: "camilan",
        gambar: PopcornJumbo,
        nama: 'Popcorn Jumbo',
        deskripsi: 'Sensasi Pop Corn yang melimpah cocok menemani sepanjang menonton film kesayangan anda',
        harga: 'Rp 80.000'
    },
    {
        category: "camilan",
        gambar: Hotdog,
        nama: 'Hotdog',
        deskripsi: 'Kelezatan daging, saus, dan roti menjadi Hotdog yang istimewa',
        harga: 'Rp 30.000'
    },
    {
        category: "camilan",
        gambar: CocaCola,
        nama: 'Coca Cola',
        deskripsi: 'Pelepas dahaga, dan menambah sensasi keseruan saat menonton film yang menarik',
        harga: 'Rp 25.000'
    },
    {
        category: "camilan",
        gambar: Fanta,
        nama: 'Fanta',
        deskripsi: 'Pelepas dahaga, dan menambah sensasi keseruan saat menonton film yang menarik',
        harga: 'Rp 15.000'
    },
    {
        category: "camilan",
        gambar: Popcorn,
        nama: 'Popcorn',
        deskripsi: 'Sensasi Pop Corn yang melimpah cocok menemani sepanjang menonton film kesayangan anda',
        harga: 'Rp 20.000'
    },
    {
        category: "camilan",
        gambar: Kentang,
        nama: 'Kentang Goreng',
        deskripsi: 'Nikmati renyahan kentang gorang dengan bumbu tabur yang melimpah',
        harga: 'Rp 25.000'
    },
    {
        category: "promo",
        gambar: KenyangKecil,
        nama: 'Kenyang Kecil',
        deskripsi: 'Cocok buat kamu yang nonton berdua dan lagi laper kecil, udah dapet satu makanan dan satu minuman',
        harga: 'Rp 80.000'
    },
    {
        category: "promo",
        gambar: KenyangAja,
        nama: 'Kenyang Aja',
        deskripsi: 'Cocok buat kamu yang lagi laper udah dapet 3 burger sekaligus',
        harga: 'Rp 65.000'
    },
    {
        category: "promo",
        gambar: CemilPopcorn,
        nama: 'Cemil Popcorn',
        deskripsi: 'Sensasi Pop Corn yang melimpah cocok menemani sepanjang menonton film kesayangan anda',
        harga: 'Rp 25.000'
    },
    {
        category: "promo",
        gambar: NontonBerempat,
        nama: 'Nonton Berempat',
        deskripsi: 'Cocok buat kamu yang nonton double date sama sahabat dan pasangan udah dapet satu makanan dan satu minuman',
        harga: 'Rp 150.000'
    },
    {
        category: "promo",
        gambar: NontonBerenam,
        nama: 'Nonton Berenam',
        deskripsi: 'Cocok buat kamu yang nonton triple date sama sahabat dan pasangan udah dapet satu makanan dan satu minuman',
        harga: 'Rp 105.000'
    },
    {
        category: "paket",
        gambar: Hemat1,
        nama: 'Hemat 1',
        deskripsi: 'Cocok buat kamu yang lagi hemat, tapi tetep pengen makan selama nonton film favorit',
        harga: 'Rp 110.000'
    },
    {
        category: "paket",
        gambar: Hemat2,
        nama: 'Hemat 2',
        deskripsi: 'Cocok buat kamu yang lagi hemat, tapi tetep pengen makan selama nonton film favorit',
        harga: 'Rp 50.000'
    },
    {
        category: "paket",
        gambar: Hemat3,
        nama: 'Hemat 3',
        deskripsi: 'Cocok buat kamu yang lagi hemat, tapi tetep pengen makan selama nonton film favorit',
        harga: 'Rp 70.000'
    },
    {
        category: "paket",
        gambar: Hemat4,
        nama: 'Hemat 4',
        deskripsi: 'Cocok buat kamu yang lagi hemat, tapi tetep pengen makan selama nonton film favorit',
        harga: 'Rp 30.000'
    },
    {
        category: "paket",
        gambar: Hemat5,
        nama: 'Hemat 5',
        deskripsi: 'Cocok buat kamu yang lagi hemat, tapi tetep pengen makan selama nonton film favorit',
        harga: 'Rp 35.000'
    }
];


const ShowCamilan = () => {
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showItems = (category) => {
        setSelectedCategory(category);
    };

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <div>
            {isModalOpen && <DetailCamilanModal toggleModal={toggleModal} />}
            <div >
                <div>
                    <button onClick={() => showItems("all")} className="float-start btn btn-nav ms-4 mb-2 text-center" style={{width:"85px", height: "40px"}}>
                        <strong>Semua</strong>
                    </button>
                    <button onClick={() => showItems("promo")} className="btn btn-nav ms-4 mb-2 test-center" style={{width:"85px", height: "40px"}}>
                        <strong>Promo</strong>
                    </button>
                    <button onClick={() => showItems("paket")} className="btn btn-nav ms-4 mb-2" style={{width:"85px", height: "40px"}}>
                        <strong>Paket</strong>
                    </button>
                    <button onClick={toggleModal} className="float-end btn btn-nav ms-4 mb-2" style={{width:"85px", height: "40px"}} data-bs-toggle="modal" data-bs-target="#detailCamilan">
                        <strong>Selesai</strong>
                    </button>
                </div>
            </div>

            <div className="row row-cols-1 row-cols-md-2 g-4 w-100"> 
                {data
                    .filter(
                        (item) => selectedCategory === "all" || item.category === selectedCategory
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
                                src={item.gambar}
                                className="img-fluid my-3 mx-2"
                                alt={item.nama}
                            />
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body bg-transparent">
                            <h5 className="card-title text-white">
                                <strong>{item.nama}</strong>
                            </h5>
                            <p className="card-text text-white text-custom">{item.deskripsi}</p>
                            <p className="card-text text-white fs-5">
                                <strong>{item.harga}</strong>
                            </p>
                            <button
                                type="button"
                                className="btn btn-sm btn-custom rounded float-end ms-4 mb-2"
                            >
                                <i className="fa-solid fa-plus"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowCamilan;
