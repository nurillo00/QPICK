import './Header.scss'
import HeaderLogo from '../../assets/svg/logo.svg'
import { CgSmartphone } from "react-icons/cg";
import { FaRegHeart } from "react-icons/fa";
import { RiShoppingCart2Line } from "react-icons/ri";
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';

const items = [
    {
        label: <a href="https://www.antgroup.com">1st menu item</a>,
        key: '0',
    },
    {
        label: <a href="https://www.aliyun.com">2nd menu item</a>,
        key: '1',
    },
    {
        type: 'divider',
    },
    {
        label: '3rd menu item',
        key: '3',
    },
];


function Header() {
    return (
        <>
            <header className='header'>
                <div className="container">
                    <div className="header-wrap">
                        <div className='header-logo-wrap'>
                            <img src={HeaderLogo} alt="" />
                            <div className="phone-wrap">
                                <span className='phone'>
                                <CgSmartphone />
                                </span>
                                <Dropdown
                                    menu={{
                                        items,
                                    }}
                                    trigger={['click']}
                                >
                                    <a onClick={(e) => e.preventDefault()}>
                                        <div className="choose">
                                        <Space>
                                        Выбрать модель телефона
                                            <DownOutlined />
                                        </Space>
                                        </div>
                                    </a>
                                </Dropdown>
                            </div>
                        </div>
                        <ul className='header-list'>
                            <li className='header-item'>
                                <FaRegHeart />
                            </li>
                            <li className='header-item'>
                                <RiShoppingCart2Line />
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header