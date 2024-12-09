const EditUserModal = () => {
    return(
        <div class="modal fade" id="editProfil" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dark modal-dialog-centered modal-m">   
                <div class="modal-content p-3" style={{backgroundColor: "#212121"}}>
                    <div class="modal-header">
                        <h3 class="text-center" style={{color: "white"}}>Edit Profil</h3>
                    </div>
                    <div class="modal-body">
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label" style={{color: "white"}}>Foto Profil</label>
                            <input class="form-control" type="file" id="formFile"/>
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label" style={{color: "white"}}>Nama Pengguna</label>
                            <input type="text" class="form-control" id="exampleFormControlInput1" value="Suparman"/>
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label" style={{color: "white"}}>Email</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" value="suparmangaming1234@gmail.com"/>
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label" style={{color: "white"}}>Password</label>
                            <input type="text" class="form-control" id="exampleFormControlInput1" value="1234567890"/>
                        </div>
                        <div class="row">
                            <div class="col-2">
                                <button type="button" class="btn btn-danger">Batal</button>
                            </div>
                            <div class="col-10">
                                <button type="button" class="btn btn-success">Simpan</button>
                            </div>
                        </div>
                        <div class="d-flex align-items-center justify-content-end">
                            <button type="button" class="btn btn-danger"><i class="fa-solid fa-trash"></i> Hapus Profil</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditUserModal;