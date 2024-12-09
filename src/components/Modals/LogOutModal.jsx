import { Link } from 'react-router-dom';

const LogOutModal = () => {
    return(
        <div class="modal fade" id="keluar" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5 text-light" id="exampleModalLabel">Apakah Anda Yakin Ingin Keluar?</h1>
                    </div>
                    <div class="modal-body">
                        <div className="row">
                            <div className="col-2">
                                <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Tidak</button>
                            </div>
                            <div className="col-10">
                                <Link to="/" type="button" class="btn btn-success">Ya</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LogOutModal;