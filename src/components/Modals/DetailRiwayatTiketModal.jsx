import poster1 from '../../assets/images/poster1.webp';
import tiketBarcode from '../../assets/images/tiket barcode.gif';

const DetailRiwayatTiketModal = ()=> {
    return(
        <div class="modal fade" id="detailRiwayatTiket" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{backgroundColor: "black"}}>
            <div class="modal-dialog modal-dialog-centered modal-m">
                <div class="modal-content p-3" style={{backgroundColor: "#212121"}}>
                    <div class="modal-body">
                        <div class="row pt-2">
                            <div class="col-12 col-md-4 col-lg-3 text-center mb-3 mb-md-0">
                                <img src={poster1} class="img-fluid" style={{borderRadius: "10px", padding: "0"}}/>
                            </div>
                            <div class="col-12 col-md-8 col-lg-9">
                                <h4 style={{color: "white"}}>Home Sweet Loan</h4>
                                <p style={{color: "grey"}}>2024 - Comedy</p>
                                <p style={{color: "white"}}>Tiket x Rp40.000</p>
                                <div class="row">
                                    <div class="col">
                                        <p class="text-modal" style={{color: "white"}}>Film</p>
                                    </div>
                                    <div class="col">
                                        <div class="d-flex align-items-center justify-content-end">
                                            <strong class="text-modal" style={{color: "white"}}>Home Sweet Loan</strong>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col">
                                        <p class="text-modal" style={{color: "white"}}>Hari dan Tanggal</p>
                                    </div>
                                    <div class="col">
                                        <div class="d-flex align-items-center justify-content-end">
                                            <strong class="text-modal" style={{color: "white"}}>Jumat,27-09-2024</strong>
                                        </div>
                                        <div class="d-flex align-items-center justify-content-end">
                                            <p class="text-modal" style={{color: "grey"}}>13.45</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col">
                                        <p class="text-modal" style={{color: "white"}}>Tempat Duduk</p>
                                    </div>
                                    <div class="col">
                                        <div class="d-flex align-items-center justify-content-end">
                                            <strong class="text-modal" style={{color: "white"}}>B10</strong>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col">
                                        <p class="text-modal" style={{color: "white"}}>Studio</p>
                                    </div>
                                    <div class="col">
                                        <div class="d-flex align-items-center justify-content-end">
                                            <p class="text-modal" style={{color: "grey"}}>REGULAR</p>
                                        </div>
                                    </div>
                                </div>
                                <strong class="pt-1" style={{color: "white"}}>Detail</strong>
                                <div class="row">
                                    <div class="col">
                                        <p class="text-modal" style={{color: "white"}}>Harga Tiket</p>
                                    </div>
                                    <div class="col">
                                        <div class="d-flex align-items-center justify-content-end">
                                            <p class="text-modal" style={{color: "white"}}>Rp40.000</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col">
                                        <p class="text-modal" style={{color: "white"}}>Admin</p>
                                    </div>
                                    <div class="col">
                                        <div class="d-flex align-items-center justify-content-end">
                                            <p class="text-modal" style={{color: "white"}}>Rp3.000</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="row pt-1">
                                    <div class="col">
                                        <strong class="text-modal" style={{color: "white"}}>Total</strong>
                                    </div>
                                    <div class="col">
                                        <div class="d-flex align-items-center justify-content-end">
                                            <p class="text-modal" style={{color: "white"}}>Rp43.000</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="d-flex align-items-center justify-content-center">
                                    <card class="barcode">
                                        <div class="d-flex align-items-center justify-content-center pt-2">
                                            <img src={tiketBarcode} style={{width: "80%"}}/>
                                        </div>
                                    </card>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailRiwayatTiketModal;