import TopNavBar from '../components/TopNavbar';
import './css/Camilan.css';

import ShowCamilan from '../components/ShowCamilan';

const PesanCamilanPage = () => {

    return (
        <div className="body-camilan ">
            <TopNavBar  />

            <div className="container-camilan">
                <div class="float-start">
                    <h1 class="fw-bold text-align-left" style={{color: "orangered"}}>Camilan</h1>
                    <p class="text-white fw-bold text-align-justify float-start">Pilihan camilan lengkap untuk menemani nonton di bioskop! Tersedia berbagai makanan dan minuman, mulai dari 
                        popcorn gurih, kentang goreng, hingga minuman segar. Semua siap dinikmati untuk membuat pengalaman 
                        nonton Anda makin seru!</p>
                </div>

                <ShowCamilan />
            </div>

        </div>
        
    );
};

export default PesanCamilanPage;