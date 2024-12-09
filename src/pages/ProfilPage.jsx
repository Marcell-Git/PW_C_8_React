import TopNavBar from "../components/TopNavbar";
import './css/Profil.css';
import React, { useState } from "react";

import poster1 from '../assets/images/poster1.webp';

import LogOutModal from "../components/Modals/LogOutModal";
import DetailRiwayatTiketModal from "../components/Modals/DetailRiwayatTiketModal";
import DetailRiwayatCamilanModal from "../components/Modals/DetailRiwayatCamilanModal";

const ProfilPage = () => {
    const [isModalLogOutOpen, setIsModalLogOutOpen] = useState(false);
    const [isModalDetailRiwayatTiketOpen, setIsModalDetailRiwayatTiketOpen] = useState(false);
    const [isModalDetailRiwayatCamilanOpen, setIsModalDetailRiwayatCamilanOpen] = useState(false);

    const toggleModalLogOut = () => {
        setIsModalLogOutOpen(!isModalLogOutOpen);
    };

    const toggleModalDetailRiwayatTiket = () => {
        setIsModalDetailRiwayatTiketOpen(!isModalDetailRiwayatTiketOpen);
    }

    const toggleModalDetailRiwayatCamilan = () => {
        setIsModalDetailRiwayatCamilanOpen(!isModalDetailRiwayatCamilanOpen);
    }


    return (
        <div className="body-profil">
            <TopNavBar />
            {isModalLogOutOpen && <LogOutModal toggleModalLogOut={toggleModalLogOut} />}
            {isModalDetailRiwayatTiketOpen && <DetailRiwayatTiketModal toggleModalDetailRiwayatTiket={toggleModalDetailRiwayatTiket} />}
            {isModalDetailRiwayatCamilanOpen && <DetailRiwayatCamilanModal toggleModalDetailRiwayatCamilan={toggleModalDetailRiwayatCamilan} />}

            <div class="container mt-3 mb-5">
                <div class="row">
                    <div class="col-md-6">
                        <h4>Info Akun</h4>
                        <div class="row pt-3">
                            <div class="col-12 d-flex align-items-center justify-content-center">
                                <img src="https://static.vecteezy.com/system/resources/previews/002/275/847/original/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg" class="img-fluid" style={{width: "250px", height: "250px", borderRadius: "50%"}}/>
                            </div>
                            <div class="col-12 d-flex align-items-center justify-content-center pt-3">
                                <button class="btn btn-success" style={{width: "200px", borderRadius: "16px"}}>Ubah Gambar</button>
                            </div>
                        </div>
                        <form class="mt-4">
                            <div class="mb-3">
                                <label for="exampleInputNama" class="form-label">Nama Pengguna</label>
                                <input type="text" class="form-control" id="exampleInputNama" value="Supraman123"/>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail" class="form-label">Email</label>
                                <input type="email" class="form-control" id="exampleInputEmail" value="suparmangaming1234@gmail.com"/>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword" class="form-label">Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword" value="1234567890"/>
                            </div>
                            <div class="row pt-3">
                                <div class="col">
                                    <button class="btn btn-success" style={{width:"155px"}} type="submit">Edit Profil</button>
                                </div>
                                <div class="col text-end">
                                    <button class="btn btn-danger" style={{width:"155px"}} type="button" data-bs-toggle="modal" data-bs-target="#keluar" onClick={toggleModalLogOut}>Keluar</button>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div class="col-md-6">
                        <h4 class="text-end pb-3">Pesanan Saya</h4>
                        <div class="d-flex align-items-center justify-content-end">
                            <div class="card card-profil mb-3" style={{width: "100%", backgroundColor: "transparent", borderBottom: "3px solid white"}}>
                                <div class="row g-0 p-3">
                                    <div class="col-md-3 d-flex align-items-center justify-content-start">
                                        <img src={poster1} class="img-fluid" style={{width: "101px", height: "151px", borderRadius: "16px"}}/>
                                    </div>
                                    <div class="col-md-9">
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-md-7">
                                                    <h5 class="card-title" style={{color: "#FF6500"}}>Home Sweet Loan</h5>
                                                </div>
                                                <div class="col-md-5 text-end">
                                                    <p>27 September 2024</p>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-10">
                                                    <p class="card-text">H18 - REGULAR</p>
                                                    <p style={{color: "red"}} class="card-text pt-4">Rp. 43.000</p>
                                                </div>
                                                <div class="col-md-2 text-end">
                                                    <button style={{fontsize: "30px", color: "white"}} type="button" class="btn" data-bs-toggle="modal" data-bs-target="#detailRiwayatTiket" onClick={toggleModalDetailRiwayatTiket}><i class="fa-solid fa-ticket" style={{fontSize: "30px"}}></i></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="d-flex align-items-center justify-content-end">
                            <div class="card mb-3" style={{width: "100%",backgroundColor: "transparent",borderBottom: "3px solid white"}}>
                                <div class="row g-0 p-3">
                                    <div class="col-md-10 w-100">
                                        <div class="card-body p-0">
                                            <div class="row">
                                                <div class="col-md-7">
                                                    <h5 class="card-title" style={{color: "#FF6500"}}>Camilan</h5>
                                                </div>
                                                <div class="col-md-5 text-end">
                                                    <p>27 September 2024</p>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-10">
                                                    <p class="card-text">Hemat 1, Popcorn, Kenyang aja</p>
                                                    <p style={{color: "red"}} class="card-text pt-4">Rp. 255.000</p>
                                                </div>
                                                <div class="col-md-2 text-end">
                                                    <button style={{fontsize: "30px", color: "white"}} type="button" class="btn" data-bs-toggle="modal" data-bs-target="#detailRiwayatCamilan" onClick={toggleModalDetailRiwayatCamilan}><i class="fa-solid fa-utensils" style={{fontSize: "30px"}}></i></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilPage;