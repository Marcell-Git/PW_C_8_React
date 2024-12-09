const EditFilmModal = () => {
    return(
        <div class="modal fade" id="editFilm" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dark modal-dialog-centered modal-m">   
                <div class="modal-content p-3" style={{backgroundColor: "#212121"}}>
                    <div class="modal-header">
                        <h3 class="text-center" style={{color: "white"}}>Edit Film</h3>
                    </div>
                    <div class="modal-body">
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label" style={{color: "white"}}>Poster</label>
                            <input class="form-control" type="file" id="formFile"/>
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label" style={{color: "white"}}>Judul</label>
                            <input type="text" class="form-control" id="exampleFormControlInput1" value="Suparman"/>
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label" style={{color: "white"}}>Tanggal Tayang</label>
                            <input type="date" class="form-control" id="exampleFormControlInput1" value="suparmangaming1234@gmail.com"/>
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label" style={{color: "white"}}>Rating</label>
                            <input type="number" class="form-control" id="exampleFormControlInput1" value="4"/>
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label" style={{color: "white"}}>Pemeran</label>
                            <input type="text" class="form-control" id="exampleFormControlInput1" value="Yunita Siregar, Derby Romeo, Risty Tagor, Fita Anggriani, Ayushita Nugroho, Ariyo Wahab"/>
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label" style={{color: "white"}}>Sinopsis</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
                        </div>
                        <div class="row">
                            <div class="col">
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                    <label class="form-check-label" for="flexRadioDefault1" style={{color: "white"}}>
                                        Segera Tayang
                                    </label>
                                </div>
                            </div>
                            <div class="col">
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
                                    <label class="form-check-label" for="flexRadioDefault2" style={{color: "white"}}>
                                        Sedang Tayang
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div class="row pt-3">
                            <div class="col-2">
                                <button type="button" class="btn btn-danger">Batal</button>
                            </div>
                            <div class="col-10">
                                <button type="button" class="btn btn-success">Simpan</button>
                            </div>
                        </div>
                        <div class="d-flex align-items-center justify-content-end">
                            <button type="button" class="btn btn-danger"><i class="fa-solid fa-trash"></i> Hapus Film</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditFilmModal;