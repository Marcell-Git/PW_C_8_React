import React from "react";
import "../../pages/css/logoutModal.css"; // Ensure this path is correct

const LogOutModal = ({ toggleModalLogOut, onConfirmLogout }) => {
    return (
        <div className="modal fade show" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }} tabIndex="-1" role="dialog">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header" style={{ backgroundColor: '#343a40', color: '#fff' }}>
                        <h5 className="modal-title">Apakah Anda Yakin Ingin Keluar?</h5>
                        <button type="button" className="close" onClick={toggleModalLogOut}>
                            <span>&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <p>Jika Anda keluar, Anda akan diminta untuk masuk lagi.</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={toggleModalLogOut}>Tidak</button>
                        <button type="button" className="btn btn-danger" onClick={onConfirmLogout}>Ya</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogOutModal;
