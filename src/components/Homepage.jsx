import React from 'react';
import millify from 'millify'
import { Typography, Row, Col, Statistic } from 'antd'
import { Link } from 'react-router-dom'

const {Title} = Typography;

const Homepage = () => {
  return (
    <>
        <Title level={2} className="heading">Global Stock Statistics</Title>
        <Row>
            <Col span={12}><Statistic Title='Total stocks' value="5"/></Col>
            <Col span={12}><Statistic Title='Total exchanges' value="5"/></Col>
            <Col span={12}><Statistic Title='Total Market Cap' value="5"/></Col>
            <Col span={12}><Statistic Title='Total 24h volume' value="5"/></Col>
            <Col span={12}><Statistic Title='Total Markets' value="5"/></Col>
        </Row>
    </>
  )
}

export default Homepage