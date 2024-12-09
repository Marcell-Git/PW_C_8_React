import '../pages/css/AdminFilm.css';
import TopNavbarAdmin from '../components/TopNavbarAdmin';
import React, { useState } from "react";

import poster1 from '../assets/images/poster1.webp';
import poster3 from '../assets/images/poster3.webp';

import TambahFilmModal from '../components/Modals/TambahFilmModal';
import EditFilmModal from '../components/Modals/EditFilmModal';

const AdminFilmPage = () => {
    const [isModalTambahFilmOpen, setIsModalTambahFilmOpen] = useState(false);
    const [isModalEditFilmOpen, setIsModalEditFilmOpen] = useState(false);

    const toggleModalTambahFilm = () => {
        setIsModalTambahFilmOpen(!isModalTambahFilmOpen);
    }

    const toggleModalEditFilm = () => {
        setIsModalEditFilmOpen(!isModalEditFilmOpen);
    }

    return(
        <div>
            <TopNavbarAdmin />

            {isModalTambahFilmOpen && <TambahFilmModal toggleModalTambahFilm={toggleModalTambahFilm} />}
            {isModalEditFilmOpen && <EditFilmModal toggleModalEditFilm={toggleModalEditFilm} />}
            <div class="container">
                <div class="card card-adminFilm">
                    <button class="btn btn-success mb-4" data-bs-toggle="modal" data-bs-target="#tambahFilm" style={{width: "10%"}} onClick={toggleModalTambahFilm}><i class="fa-regular fa-square-plus"></i> Tambah</button>
                    <table class="table table-dark table-striped">
                        <thead>
                            <tr>
                                <th scope="col" class="text-center judul">ID</th>
                                <th scope="col" class="text-center judul">Poster</th>
                                <th scope="col" class="text-center judul">Judul</th>
                                <th scope="col" class="text-center judul">Tanggal Tayang</th>
                                <th scope="col" class="text-center judul">Sinopsis</th>
                                <th scope="col" class="text-center judul">Rating</th>
                                <th scope="col" class="text-center judul">Pemeran</th>
                                <th scope="col" class="text-center judul">Status</th>
                                <th scope="col" class="text-center judul">Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row" class="text-center body">1</th>
                                <td><img src={poster1} class="img-fluid" /></td>
                                <td class="text-center body">Home Sweet Loan</td>
                                <td class="text-center body">26-September-2024</td>
                                <td class="text-center body sinopsis" className="text-align-justify">Kaluna, pegawai bagian umum, bermimpi membeli rumah demi keluar dari rumah dengan tiga kepala keluarga, Ayah dan kedua kakaknya. Namun, gajinya yang tak pernah menyentuh dua digit membuatnya serasa bermimpi untuk memiliki rumah idaman yang minimal... nyerempet Jakarta. Dengan modal usaha ngirit, kerja sampingan sebagai model bibir, dan pinjaman kantor, Kaluna bersama tiga sahabatnya berjuang menemukan rumah yang sesuai. Di tengah segala perjuangannya, Kaluna tiba-tiba harus dihadapkan pada keputusan finansial keluarga yang sulit. Kaluna dihadapkan pada pilihan antara memperjuangkan rumah atau keluarganya.</td>
                                <td class="text-center body">4</td>
                                <td class="text-center body">Yunita Siregar, 
                                    Derby Romeo,
                                    Risty Tagor,
                                    Fita Anggriani,
                                    Ayushita Nugroho,
                                    Ariyo Wahab
                                </td>
                                <td><span class="badge text-bg-success">Sedang Tayang</span></td>
                                <td class="text-center"><button class="btn" data-bs-toggle="modal" data-bs-target="#editFilm" onClick={toggleModalEditFilm}><i class="fa fa-pencil-alt" style={{color:"white"}}></i></button></td>
                            </tr>
                            <tr>
                                <th scope="row" class="text-center body">2</th>
                                <td><img src={poster3} class="img-fluid"/></td>
                                <td class="text-center body">Bolehkan Sekali Saja Kumenangis</td>
                                <td class="text-center body">17-Oktober-2024</td>
                                <td class="text-center body sinopsis" className="text-align-justify">Setelah kakaknya meninggalkan rumah, Tari berjuang sendirian untuk menyelamatkan Ibunya dari Ayahnya yang abusive. Tari yang sejak kecil menyimpan banyak sekali trauma, sudah tidak mampu menahan beban ini. Ditemani Baskara, seorang pria temperamental yang juga bergabung di support group yang sama. Mampukah Tari melewati Trauma yang ia punya dan tidak lagi menyimpan tangisnya sendiri?

                                </td>
                                <td class="text-center body">4</td>
                                <td class="text-center body">
                                    Pradikta Wicaksono, 
                                    Prilly Latuconsina,
                                    Surya Saputra,
                                    Dominique Sanda,
                                    Widi Mulia,
                                    Shania Gracia
                                </td>
                                <td><span class="badge text-bg-warning">Segera Tayang</span></td>
                                <td class="text-center"><button class="btn"><i class="fa fa-pencil-alt" style={{color:"white"}}></i></button></td>
                            </tr>            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};


export default AdminFilmPage;