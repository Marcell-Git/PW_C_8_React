import { Link } from 'react-router-dom';

import hemat1 from '../../assets/images/menu/hemat1.png';
import popcorn from '../../assets/images/menu/popcorn.png';
import kenyangAja from '../../assets/images/menu/kenyang aja.png';

const DetailFilmModal = () =>{
    return(
        <div class="modal fade" id="detailCamilan" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{backgroundColor: "black"}}>
            <div class="modal-dialog modal-dialog-centered modal-m">
                <div class="modal-content modal-content-camilan p-3">
                    <div class="modal-body">
                        <div class="d-flex align-items-center justify-content-center">
                            <h2 style={{color: "white"}}><strong>Camilan</strong> </h2>
                        </div>

                        <p class="pt-3" style={{color: "white"}}><strong>Rincian Camilan</strong></p>

                        <div class="row">
                            <div class="col-3">
                                <div class="col-5 d-flex align-items-center justify-content-center">
                                    <img src={hemat1} style={{maxWidth: "70px"}}/>
                                </div>
                            </div>
                            <div class="col-1 d-flex align-items-center justify-content-start">
                                <p class="text-modal text-modal-camilan">1x</p>
                            </div>
                            <div class="col-5 d-flex align-items-center justify-content-start">
                                <p class="text-modal text-modal-camilan">Hemat 1</p>
                            </div>
                            <div class="col-3 d-flex align-items-center justify-content-end">
                                <p class="text-modal text-modal-camilan">Rp 110.000</p>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-3">
                                <div class="col-5 d-flex align-items-center justify-content-center">
                                    <img src={popcorn} style={{maxWidth: "70px"}}/>
                                </div>
                            </div>
                            <div class="col-1 d-flex align-items-center justify-content-start">
                                <p class="text-modal text-modal-camilan">1x</p>
                            </div>
                            <div class="col-5 d-flex align-items-center justify-content-start">
                                <p class="text-modal text-modal-camilan">Popcorn</p>
                            </div>
                            <div class="col-3 d-flex align-items-center justify-content-end">
                                <p class="text-modal text-modal-camilan">Rp 80.000</p>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-3">
                                <div class="col-5 d-flex align-items-center justify-content-center">
                                    <img src={kenyangAja} style={{maxWidth: "70px"}}/>
                                </div>
                            </div>
                            <div class="col-1 d-flex align-items-center justify-content-start">
                                <p class="text-modal text-modal-camilan">1x</p>
                            </div>
                            <div class="col-5 d-flex align-items-center justify-content-start">
                                <p class="text-modal text-modal-camilan">Kenyang aja</p>
                            </div>
                            <div class="col-3 d-flex align-items-center justify-content-end">
                                <p class="text-modal text-modal-camilan">Rp 65.000</p>
                            </div>
                        </div>

                        <div class="row pt-3 pb-5">
                            <div class="col">
                                <p class="text-modal text-modal-camilan"><strong>Total</strong></p>
                            </div>
                            <div class="col d-flex align-items-center justify-content-end">
                                <p class="text-modal text-modal-camilan">Rp 255.000</p>
                            </div>
                        </div>

                        <div class="d-flex align-items-center justify-content-center">
                            <button type="button" class="btn" style={{backgroundColor: "#5C3CFE", color: "white"}}><i class="fa-solid fa-wallet"></i> <strong>e-wallet</strong></button>
                        </div>
                        <div class="row pt-4">
                            <div class="col">
                                <div class="d-flex align-items-center justify-content-end">
                                    <Link to="/home" type="button" class="btn btn-danger" style={{paddingLeft: "20px", paddingRight: "20px"}}><strong>Batal</strong></Link>
                                </div>
                            </div>
                            <div class="col">
                                <div class="d-flex align-items-center justify-content-start">
                                    <Link to="/profil" type="button" class="btn btn-success" style={{paddingLeft: "20px", paddingRight: "20px"}}><strong>Pesan</strong></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailFilmModal;