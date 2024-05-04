import '../Footer/Footer.scss'
import Logo from '../../assets/svg/logo.svg'
import Vk from '../../assets/svg/VK.svg'
import Instagram from '../../assets/svg/Instagram.svg'
import Telegram from '../../assets/svg/Telegram.svg'
import Whatsapp from '../../assets/svg/Whatsapp.svg'
import { TbWorld } from "react-icons/tb";

function Footer() {
    return(
        <>
        <footer className='footer'>
            
                <div className="footer-wrap">
                    <img src={Logo} alt="Logo" />
                    <ul className='footer-list'>
                        <li className='footer-item'>
                            <a className='footer-link' href="">Избранное</a>
                        </li>
                        <li className='footer-item'>
                            <a className='footer-link' href="">Корзина</a>
                        </li>
                        <li className='footer-item'>
                            <a className='footer-link' href="">Контакты</a>
                        </li>
                    </ul>
                    <div className="footer-service-wrap">
                        <a className='footer-service-title-link' href="">Условия сервиса</a>
                        <ul className='footer-service-list'>
                            <li className='footer-service-item'>
                            <TbWorld />
                            </li>
                            <li className='footer-service-item'>
                                <a className='footer-service-link' href="">Каз</a>
                            </li>
                            <li className='footer-service-item'>
                                <a className='footer-service-link' href="">Рус</a>
                            </li>
                            <li className='footer-service-item'>
                                <a className='footer-service-link' href="">Eng</a>
                            </li>
                        </ul>
                    </div>
                    <ul className='footer-logo-list'>
                        <li className='footer-logo-item'>
                            <img src={Vk} alt="" />
                        </li>
                        <li className='footer-logo-item'>
                            <img src={Instagram} alt="" />
                        </li>
                        <li className='footer-logo-item'>
                            <img src={Telegram} alt="" />
                        </li>
                        <li className='footer-logo-item'>
                            <img src={Whatsapp} alt="" />
                        </li>
                    </ul>
                </div>
            
        </footer>
        </>
    )
}

export default Footer