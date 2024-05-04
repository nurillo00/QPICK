import '../Air/Air.scss'
import AirImg from '../../assets/img/air-pods.png'
import AirImgSecond from '../../assets/img/buds.png'
import AirImgThird from '../../assets/img/borofone.png'
import { FaRegHeart } from "react-icons/fa";
import { IoMdStarOutline } from "react-icons/io";

function Air() {
    return(
        <>
        <section className='air'>
            <h2 className='air-title'>Беспроводные наушники</h2>
            <ul className='air-list'>
                <li className='air-item'>
                <div>
                                <FaRegHeart />
                                </div>
                                <img style={{objectFit: 'cover', marginBottom: '55px'}} src={AirImg} alt="" width={290} height={237} />
                                <div className="air-wrap">
                                    <div className="air-left-wrap">
                                        <h3 className='air-left-title'>Apple AirPods</h3>
                                        <div className="air-star-wrap">
                                        <div>
                                        <IoMdStarOutline />
                                        </div>
                                            <h5 className='air-star-text'>4.7</h5>
                                        </div>
                                    </div>
                                    
                                        <h3 className='air-price'>9527 UZS</h3>
                                    
                                    
                                </div>
                </li>
                <li className='air-item'>
                <div>
                                <FaRegHeart />
                                </div>
                                <img style={{objectFit: 'cover', marginBottom: '55px'}} src={AirImgSecond} alt="" width={290} height={237} />
                                <div className="air-wrap">
                                    <div className="air-left-wrap">
                                        <h3 className='air-left-title'>GERLAX GH-04</h3>
                                        <div className="air-star-wrap">
                                        <div>
                                        <IoMdStarOutline />
                                        </div>
                                            <h5 className='air-star-text'>4.7</h5>
                                        </div>
                                    </div>
                                    
                                        <h3 className='air-price'>6527 UZS</h3>
                                    
                                    
                                </div>
                </li>
                <li className='air-item'>
                <div>
                                <FaRegHeart />
                                </div>
                                <img style={{objectFit: 'cover', marginBottom: '55px'}} src={AirImgThird} alt="" width={290} height={237} />
                                <div className="air-wrap">
                                    <div className="air-left-wrap">
                                        <h3 className='air-left-title'>BOROFONE BO4</h3>
                                        <div className="air-star-wrap">
                                        <div>
                                        <IoMdStarOutline />
                                        </div>
                                            <h5 className='air-star-text'>4.7</h5>
                                        </div>
                                    </div>
                                    
                                        <h3 className='air-price'>7527 UZS</h3>
                                    
                                    
                                </div>
                </li>
            </ul>
        </section>
        </>
    )
}

export default Air 