import '../Hero/Hero.scss'
import HeroImg from '../../assets/img/13.png'

function Hero() {
    return (
        <>
            <section className='hero'>
                <div className="hero-wrap">
                    <h1 className='hero-title'>Аксессуары для
                        Iphone 13 Pro Max</h1>
                    <img src={HeroImg} alt="" />
                </div>
            </section>
        </>
    )
}

export default Hero