import React from 'react';
import { Button, Typography, Avatar, Menu } from 'antd';    
import { Link } from 'react-router-dom'
import { HomeOutlined, MoneyCollectOutlined, Bulboutlined, FundOutlined, MenuOutlined, YahooOutlined} from '@ant-design/icons';

import icon from '../images/pound-icon-british-currency-symbol-illustration-coin-symbol-free-vector.jpg'

const Navbar = () => {
  return (
    <div className='nav-container'>
        <div className='logo-container'>
            <Avatar src={icon} size='large'/>
            <Typography.Title level={2} className='logo'>
                <Link to='/'>FiNews</Link>    
            </Typography.Title>
            {/* <Button className='menu-control-container'></Button> */}
        </div>
        <Menu theme='dark'>
            <Menu.Item icon={<HomeOutlined/>}>
                <Link to=''>Home</Link>
            </Menu.Item>
            <Menu.Item icon={<FundOutlined/>}>
                <Link to='/stocks'>Stocks</Link>
            </Menu.Item>
            <Menu.Item icon={<MoneyCollectOutlined/>}>
                <Link to='/exchanges'>Exchanges</Link>
            </Menu.Item>
            <Menu.Item icon={<YahooOutlined/>}>
                <Link to='/news'>News</Link>
            </Menu.Item>
        </Menu>

    </div>
  )
}

export default Navbar