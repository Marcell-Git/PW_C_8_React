import { getPoster } from '../../api/index';

const DetailFilmModal = ({ film }) => {
    if (!film) return null;

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString("id-ID", {
            day: "2-digit",
            month: "long",
            year: "numeric",
        });
    };

    return(
        <div class="modal fade" id="detailFilm" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-xl">
                <div class="modal-content p-3">
                    <div class="modal-body">
                        <div class="row pt-2">
                            <div class="col-12 col-md-4 col-lg-3 text-center mb-3 mb-md-0">
                                <img src={getPoster(film.poster)} class="img-fluid" style={{borderRadius: "10px", padding: "0"}}/>
                            </div>
                            <div class="col-12 col-md-8 col-lg-9">
                                <h3 style={{color: "#FF6500", fontSize: "2.5rem"}}>{film.judul}</h3>
                                <h5 style={{color: "white"}}>{formatDate(film.tanggal_tayang)}</h5>
                                <p class="pt-3" style={{color: "white", textAlign: "justify"}}>
                                    {film.sinopsis}
                                </p>
                            </div>
                        </div>
                        <div class="pt-4" style={{color: "white"}}>
                            <h5 style={{color: "#FF6500"}}>Rating</h5>
                            <p style={{ color: "orange" }}>
                                {Array(film.review).fill().map((_, index) => (
                                    <i key={index} className="fa-solid fa-star"></i>
                                ))}
                            </p>
                        </div>
                        <div class="pb-1" style={{paddingTop: "10px"}}>
                            <h5 style={{color: "#FF6500"}}>Pemeran</h5>
                            <h6 class="" style={{color: "white"}}>{film.pemeran}</h6>            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailFilmModal;