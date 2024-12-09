const DetailFilmModal = ({ film }) => {
    if (!film) return null;

    return(
        <div class="modal fade" id="detailFilm" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-xl">
                <div class="modal-content p-3">
                    <div class="modal-body">
                        <div class="row pt-2">
                            <div class="col-12 col-md-4 col-lg-3 text-center mb-3 mb-md-0">
                                <img src={film.img} class="img-fluid" style={{borderRadius: "10px", padding: "0"}}/>
                            </div>
                            <div class="col-12 col-md-8 col-lg-9">
                                <h3 style={{color: "#FF6500", fontSize: "2.5rem"}}>{film.title}</h3>
                                <h5 style={{color: "white"}}>24 September 2024</h5>
                                <p class="pt-3" style={{color: "white", textAlign: "justify"}}>
                                    Kaluna, pegawai bagian umum, bermimpi membeli rumah demi keluar dari rumah dengan tiga kepala keluarga, Ayah dan kedua kakaknya. 
                                    Namun, gajinya yang tak pernah menyentuh dua digit membuatnya serasa bermimpi untuk memiliki rumah idaman yang minimal nyerempet Jakarta. 
                                    Dengan modal usaha ngirit, kerja sampingan sebagai model bibir, dan pinjaman kantor, Kaluna bersama tiga sahabatnya berjuang menemukan rumah yang sesuai. 
                                    Di tengah segala perjuangannya, Kaluna tiba-tiba harus dihadapkan pada keputusan finansial keluarga yang sulit. Kaluna dihadapkan pada pilihan antara memperjuangkan rumah atau keluarganya.
                                </p>
                            </div>
                        </div>
                        <div class="pt-4" style={{color: "white"}}>
                            <h5 style={{color: "#FF6500"}}>Rating</h5>
                            <p style={{color: "orange"}}>
                                <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                            </p>
                        </div>
                        <div class="pb-1" style={{paddingTop: "10px"}}>
                            <h5 style={{color: "#FF6500"}}>Pemeran</h5>
                            <div class="d-flex flex-wrap">
                                <h6 class="pr-3" style={{color: "white"}}>Yunita Siregar</h6>
                                <h6 class="pr-3" style={{color: "white"}}>Derby Romeo</h6>
                                <h6 class="pr-3" style={{color: "white"}}>Risty Tagor</h6>
                                <h6 class="pr-3" style={{color: "white"}}>Fita Anggriani</h6>
                                <h6 class="pr-3" style={{color: "white"}}>Ayushita Nugraha</h6>
                                <h6 class="pr-3" style={{color: "white"}}>Ariyo Wahab</h6>              
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailFilmModal;