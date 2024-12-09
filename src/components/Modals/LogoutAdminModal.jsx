import { Link } from 'react-router-dom';

const LogoutAdminModal = () => {
    return(
        <div class="modal fade" id="keluar" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Apakah Anda Yakin Ingin Keluar Dari Halaman Admin?</h1>
                    </div>
                    <div class="modal-body">
                        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Tidak</button>
                        <Link to="/" type="button" class="btn btn-success">Ya</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default LogoutAdminModal;