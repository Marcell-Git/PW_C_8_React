import hemat1 from '../../assets/images/menu/hemat1.png';
import popcorn from '../../assets/images/menu/popcorn.png';
import kenyangAja from '../../assets/images/menu/kenyang aja.png';
import barcodeTiket from '../../assets/images/tiket barcode.gif';

const DetailRiwayatCamilan = () => {
    return(
        <div class="modal fade" id="detailRiwayatCamilan" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{backgroundColor: "black"}}>
            <div class="modal-dialog modal-dialog-centered modal-m">
                <div class="modal-content p-3" style={{backgroundColor: "#212121"}}>
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
                                <p class="text-modal">1x</p>
                            </div>
                            <div class="col-5 d-flex align-items-center justify-content-start">
                                <p class="text-modal">Hemat 1</p>
                            </div>
                            <div class="col-3 d-flex align-items-center justify-content-end">
                                <p class="text-modal">Rp 110.000</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <div class="col-5 d-flex align-items-center justify-content-center">
                                    <img src={popcorn} style={{maxWidth: "70px"}}/>
                                </div>
                            </div>
                            <div class="col-1 d-flex align-items-center justify-content-start">
                                <p class="text-modal">1x</p>
                            </div>
                            <div class="col-5 d-flex align-items-center justify-content-start">
                                <p class="text-modal">Popcorn</p>
                            </div>
                            <div class="col-3 d-flex align-items-center justify-content-end">
                                <p class="text-modal">Rp 80.000</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <div class="col-5 d-flex align-items-center justify-content-center">
                                    <img src={kenyangAja} style={{maxWidth: "70px"}}/>
                                </div>
                            </div>
                            <div class="col-1 d-flex align-items-center justify-content-start">
                                <p class="text-modal">1x</p>
                            </div>
                            <div class="col-5 d-flex align-items-center justify-content-start">
                                <p class="text-modal">Kenyang aja</p>
                            </div>
                            <div class="col-3 d-flex align-items-center justify-content-end">
                                <p class="text-modal">Rp 65.000</p>
                            </div>
                        </div>
                        <div class="row pt-3 pb-5">
                            <div class="col">
                                <p class="text-modal"><strong>Total</strong></p>
                            </div>
                            <div class="col d-flex align-items-center justify-content-end">
                                <p class="text-modal">Rp 255.000</p>
                            </div>
                        </div>
                        <div class="d-flex align-items-center justify-content-center">
                            <card class="barcode-camilan">
                                <div class="d-flex align-items-center justify-content-center pt-2">
                                    <img src={barcodeTiket} style={{width: "60%"}}/>
                                </div>
                            </card>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailRiwayatCamilan;