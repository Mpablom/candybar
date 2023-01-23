import banner from '../../assets/img/banner.gif'
import './banner.css'

export function Banner() {
    return(
        <div className="container-fluid">
            <img className="banner img-fluid" src={banner} alt="banner"/>
        </div>
    );
}