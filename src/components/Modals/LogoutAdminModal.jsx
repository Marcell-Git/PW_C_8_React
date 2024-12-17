import React from 'react';

const LogoutAdminModal = ({ confirmLogout, handleLogout }) => {
    return (
        <div className="modal fade" id="keluar" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Apakah Anda Yakin Ingin Keluar Dari Halaman Admin?</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleLogout}></button>
                    </div>
                    <div className="modal-body">
                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={handleLogout}>Tidak</button>
                        <button type="button" className="btn btn-success" onClick={() => { confirmLogout(); handleLogout(); }}>Ya</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LogoutAdminModal;
