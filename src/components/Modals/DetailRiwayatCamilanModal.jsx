import React from 'react';
import barcodeTiket from '../../assets/images/tiket barcode.gif';
import { getGambarSnack } from '../../api';

const DetailRiwayatCamilanModal = ({ isOpen, toggleModal, data }) => {
    if (!isOpen) return null; 

    return (
        <div 
            className="modal-overlay" 
            onClick={toggleModal} 
            style={{ 
                position: 'fixed', 
                top: 0, 
                left: 0, 
                width: '100%', 
                height: '100%', 
                backgroundColor: 'rgba(0, 0, 0, 0.5)', 
                zIndex: 1050 
            }}
        >
            <div 
                className="modal-dialog-centered" 
                style={{
                    position: 'fixed',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    backgroundColor: '#212121',
                    borderRadius: '10px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
                    width: '90%',
                    maxWidth: '500px',
                    padding: '20px',
                }} 
                onClick={(e) => e.stopPropagation()} 
            >
                <div className="modal-body">
                    <div className="d-flex align-items-center justify-content-center">
                        <h2 style={{ color: 'white' }}>
                            <strong>Camilan</strong>
                        </h2>
                    </div>
                    <p className="pt-3" style={{ color: 'white' }}>
                        <strong>Rincian Camilan</strong>
                    </p>
                    <div className="row">
                        <div className="col-3">
                            <img 
                                src={getGambarSnack(data.snack.gambar_snack)} 
                                alt="Snack" 
                                style={{ maxWidth: '70px' }} 
                            />
                        </div>
                        <div className="col-1 d-flex align-items-center justify-content-start">
                            <p className="text-modal">1x</p>
                        </div>
                        <div className="col-5 d-flex align-items-center justify-content-start">
                            <p className="text-modal">{data.snack.nama_snack}</p>
                        </div>
                        <div className="col-3 d-flex align-items-center justify-content-end">
                            <p className="text-modal">Rp {data.snack.harga_snack}</p>
                        </div>
                    </div>
                    <div className="row pt-3 pb-5">
                        <div className="col">
                            <p className="text-modal">
                                <strong>Total</strong>
                            </p>
                        </div>
                        <div className="col d-flex align-items-center justify-content-end">
                            <p className="text-modal">Rp {data.total_pembayaran_camilan}</p>
                        </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-center">
                        <div className="barcode-camilan">
                            <div className="d-flex align-items-center justify-content-center pt-2">
                                <img 
                                    src={barcodeTiket} 
                                    alt="Barcode" 
                                    style={{ width: '60%' }} 
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailRiwayatCamilanModal;
