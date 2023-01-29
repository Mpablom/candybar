import banner from '../../assets/img/banner.gif'
import './banner.css'

export function Banner() {
    return(
        <div className="container-fluid banner-cont">
            <img className="banner" src={banner} alt="banner"/>
        </div>
    );
}