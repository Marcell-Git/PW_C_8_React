import '../pages/css/AdminUser.css';
import React, { useState } from 'react';

import EditUserModal from '../components/Modals/EditUserModal';
import TambahUserModal from '../components/Modals/TambahUserModal';

import TopNavbarAdmin from '../components/TopNavbarAdmin';

const AdminUserPage = () => {
    const [isModalEditOpen, setIsModalEditOpen] = useState(false);
    const [isModalTambahOpen, setIsModalTambahOpen] = useState(false);

    const toggleModalEdit = () => {
        setIsModalEditOpen(!isModalEditOpen);
    }

    const toggleModalTambah = () => {
        setIsModalTambahOpen(!isModalTambahOpen);
    }

    return(
        <div>
            <TopNavbarAdmin />

            {isModalEditOpen && <EditUserModal toggleModalEdit={toggleModalEdit} />}
            {isModalTambahOpen && <TambahUserModal toggleModalTambah={toggleModalTambah} />}
            <div class="container">
                <div class="card card-adminUser">
                    <button class="btn btn-success mb-4" data-bs-toggle="modal" data-bs-target="#tambahProfil" style={{width: "10%"}} onClick={toggleModalTambah}><i class="fa-solid fa-user-plus"></i> Tambah</button>
                    <table class="table table-dark table-striped">
                        <thead>
                            <tr>
                                <th scope="col" class="text-center title">ID</th>
                                <th scope="col" class="text-center title">Foto Profil</th>
                                <th scope="col" class="text-center title">Nama Pengguna</th>
                                <th scope="col" class="text-center title">Email</th>
                                <th scope="col" class="text-center title">Password</th>
                                <th scope="col" class="text-center title">Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row" class="text-center body">1</th>
                                <td class="text-center"><img src="https://static.vecteezy.com/system/resources/previews/002/275/847/original/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg" class="img-fluid" style={{width: "50px", height: "50px", borderRadius: "50%"}}/></td>
                                <td class="text-center body">Suparman</td>
                                <td class="text-center body">suparmangaming1234@gmail.com</td>
                                <td class="text-center body">1234567890</td>
                                <td class="text-center body"><button class="btn" data-bs-toggle="modal" data-bs-target="#editProfil"><i class="fa fa-pencil-alt" style={{color:"white"}} onClick={toggleModalEdit}></i></button></td>
                            </tr>
                            <tr>
                                <th scope="row" class="text-center body">2</th>
                                <td class="text-center"><img src="https://static.vecteezy.com/system/resources/previews/002/275/847/original/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg" class="img-fluid" style={{width: "50px", height: "50px", borderRadius: "50%"}}/></td>
                                <td class="text-center body">Sipardi</td>
                                <td class="text-center body">sipardi0123@gmail.com</td>
                                <td class="text-center body">0987654321</td>
                                <td class="text-center body"><a><i class="fa fa-pencil-alt" style={{color:"white"}}></i></a></td> 
                            </tr>        
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};


export default AdminUserPage;