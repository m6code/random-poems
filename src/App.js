import React, { Component } from 'react'
import './App.css';
import { Row, Col, Spin, Skeleton, PageHeader, Divider } from 'antd'


export class App extends Component {
  render() {
    return (
      <Row >
       <Col span={24}>
        <PageHeader
          className="site-page-header"
          title="Random Poems"
        />
        <Divider> Poems </Divider>
        <Skeleton active />
        </Col>
      </Row>
    )
  }
}

export default App
