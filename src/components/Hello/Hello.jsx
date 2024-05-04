import '../Hello/Hello.scss'
import { useState, useEffect } from 'react'
import { FaRegHeart } from "react-icons/fa";
import { IoMdStarOutline } from "react-icons/io";
import axios from 'axios';


function Hello() {

    const [data, setData] = useState([])

    useEffect(() => {
        axios('https://65c7cfb0e7c384aada6efcb0.mockapi.io/elements/products')
            .then(res => setData(res.data))
    }, [])

    return(
        <>
        <section className='hello'>
            <h2 className='hello-title'>Наушники</h2>
            <ul className='hello-list'>
                {
                    data.map((item, index) => {
                        return(
                            <li className='hello-item'>
                                <div>
                                <FaRegHeart />
                                </div>
                                <img style={{objectFit: 'cover', marginBottom: '55px'}} src={item.product_img} alt="" width={290} height={237} />
                                <div className="hello-wrap">
                                    <div className="left-wrap">
                                        <h3 className='left-title'>{item.product_name.slice(0, 15)}</h3>
                                        <div className="star-wrap">
                                        <div>
                                        <IoMdStarOutline />
                                        </div>
                                            <h5 className='star-text'>{item.id}</h5>
                                        </div>
                                    </div>
                                    <div className="right-wrap">
                                        <h3 className='price'>{item.product_price}</h3>
                                        <s className='discount'>{item.product_discount}</s>
                                    </div>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </section>
        </>
    )
}

export default Hello