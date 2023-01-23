import './video.css'
import video from '../../assets/videos/video.mp4'
import img1 from '../../assets/img/img1.jpg'
import img2 from '../../assets/img/img2.jpg'
import img3 from '../../assets/img/img3.jpg'

export function Video(){
    return(
        <div className="galeria">
            <h2 className="galeria-title">Galería</h2>
            <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img className='imagen' src={img1} class="d-block w-90" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img className='imagen' src={img2} class="d-block w-90" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img className='imagen' src={img3}class="d-block w-90" alt="..."/>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            <div class="ratio ratio-16x9">
                <video clasName='reproductor' src={video} autoplay="true" muted="true" loop="true" type="video/mp4" ></video>
                {/* <iframe className='reproductor' src={video} title="video" allow="muted;"></iframe> */}  
            </div>
        </div>
    );
}