import React from 'react';
import PropTypes from 'prop-types';
import tiketBarcode from '../../assets/images/tiket barcode.gif';
import { getPoster } from '../../api';

const DetailRiwayatTiketModal = ({ film, isVisible, onClose }) => {
    if (!isVisible || !film) return null;

    return (
        <div
        className="modal fade show"
        style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
        tabIndex="-1"
        >
        <div className="modal-dialog modal-dialog-centered modal-m">
            <div className="modal-content p-3" style={{ backgroundColor: '#212121' }}>
            <div className="modal-header border-0">
                <h5 className="modal-title" style={{ color: 'white' }}>Detail Tiket</h5>
                <button
                type="button"
                className="btn-close"
                style={{ backgroundColor: 'white' }}
                onClick={onClose}
                aria-label="Close"
                />
            </div>
            <div className="modal-body">
                <div className="row pt-2">
                <div className="col-12 col-md-4 col-lg-3 text-center mb-3 mb-md-0">
                    <img
                    src={getPoster(film.tiket.film.poster)}
                    alt={film.tiket.film.judul}
                    className="img-fluid"
                    style={{ borderRadius: '10px', padding: '0' }}
                    />
                </div>
                <div className="col-12 col-md-8 col-lg-9">
                    <div className="row">
                    <div className="col">
                        <p className="text-modal" style={{ color: 'white' }}>Film</p>
                    </div>
                    <div className="col">
                        <div className="d-flex align-items-center justify-content-end">
                        <strong className="text-modal" style={{ color: 'white' }}>
                            {film.tiket.film.judul}
                        </strong>
                        </div>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col">
                        <p className="text-modal" style={{ color: 'white' }}>Hari dan Tanggal</p>
                    </div>
                    <div className="col">
                        <div className="d-flex align-items-center justify-content-end">
                        <strong className="text-modal" style={{ color: 'white' }}>
                            {film.tiket.tanggal}
                        </strong>
                        </div>
                        <div className="d-flex align-items-center justify-content-end">
                        <p className="text-modal" style={{ color: 'grey' }}>{film.jam}</p>
                        </div>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col">
                        <p className="text-modal" style={{ color: 'white' }}>Tempat Duduk</p>
                    </div>
                    <div className="col">
                        <div className="d-flex align-items-center justify-content-end">
                        <strong className="text-modal" style={{ color: 'white' }}>
                            {film.tiket.tempat_duduk}
                        </strong>
                        </div>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col">
                        <p className="text-modal" style={{ color: 'white' }}>Studio</p>
                    </div>
                    <div className="col">
                        <div className="d-flex align-items-center justify-content-end">
                        <p className="text-modal" style={{ color: 'grey' }}>
                            {film.tiket.studio.nama_studio}
                        </p>
                        </div>
                    </div>
                    </div>
                    <strong className="pt-1" style={{ color: 'white' }}>Detail</strong>
                    <div className="row">
                    <div className="col">
                        <p className="text-modal" style={{ color: 'white' }}>Harga Tiket</p>
                    </div>
                    <div className="col">
                        <div className="d-flex align-items-center justify-content-end">
                        <p className="text-modal" style={{ color: 'white' }}>
                            Rp{film.tiket.harga}
                        </p>
                        </div>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col">
                        <p className="text-modal" style={{ color: 'white' }}>Admin</p>
                    </div>
                    <div className="col">
                        <div className="d-flex align-items-center justify-content-end">
                        <p className="text-modal" style={{ color: 'white' }}>Rp. 5.000</p>
                        </div>
                    </div>
                    </div>
                    <div className="row pt-1">
                    <div className="col">
                        <strong className="text-modal" style={{ color: 'white' }}>Total</strong>
                    </div>
                    <div className="col">
                        <div className="d-flex align-items-center justify-content-end">
                        <p className="text-modal" style={{ color: 'white' }}>
                            Rp {film.total_pembayaran}
                        </p>
                        </div>
                    </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-center">
                    <card className="barcode">
                        <div className="d-flex align-items-center justify-content-center pt-2">
                        <img src={tiketBarcode} style={{ width: '80%' }} alt="Tiket Barcode" />
                        </div>
                    </card>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
    };

    DetailRiwayatTiketModal.propTypes = {
    film: PropTypes.object,
    isVisible: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    };

export default DetailRiwayatTiketModal;
