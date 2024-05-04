import '../Info/Info.scss'
import Mirror from '../../assets/img/mirror.png'
import Silicion from '../../assets/img/silicion.png'
import Leather from '../../assets/img/leather.png'

function Info() {
    return(
        <>
        <section className='info'>
            <h4 className='info-title'>Чехлы</h4>
            <ul className='info-list'>
                <li className='info-item'>
                    <img src={Mirror} alt="" />
                    <h4 className='info-list-title'>Стеклянные</h4>
                </li>
                <li className='info-item'>
                    <img src={Silicion} alt="" />
                    <h4 className='info-list-title'>Силиконовые</h4>
                </li>
                <li className='info-item'>
                    <img src={Leather} alt="" />
                    <h4 className='info-list-title'>Кожаные</h4>
                </li>
            </ul>
        </section>
        </>
    )
}

export default Info