import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd'

import { Navbar, Homepage, Stocks, StocksDetails, Exchanges, News } from './components';
import './App.css'

const App = () => {
  return (
      
    <div className='App'>
        <div className='navbar'>
            <Navbar/>
        </div>

        <div className='main'>
            <Layout>
                <div className='routes'>
                    <Routes>
                        <Route exact path='/' element={<Homepage/>}/>
                        <Route exact path='/stocks' element={<Stocks/>}/>
                        <Route exact path='/stock/:stockId' element={<StocksDetails/>}/>
                        <Route exact path='/exchanges' element={<Exchanges/>}/>
                        <Route exact path='/news' element={<News/>}/>
                    </Routes>
                </div>
            </Layout>


            <div className='footer' >
                <Typography.Text level={5} style={{color:'white', textAlign:'center'}}>
                    FiNews &reg; All rights reserved.    
                </Typography.Text>
            </div>
        
        </div>
    </div>
  )
}

export default App;