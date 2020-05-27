import React, { Component } from 'react'
import './App.css'
// eslint-disable-next-line
import {
  Row,
  Col,
  Divider,
  Typography
} from 'antd';

import Poemlist from './components/Poemlist'


const { Title } = Typography

export class App extends Component {

  state = {
    isLoading: false,
    poems: []
  }

  componentDidMount() {
    console.log(this.state.poems);
  }

  render() {
    return (
      <div className='main'>
        <Row gutter={8} >
          <Col className="gutter-row" span={24}>
            <Divider> <Title>Random Poems</Title> </Divider>
            <Poemlist 
              poems={this.state.poems}
              loading={this.state.isLoading}
            />
          </Col>
        </Row>
      </div>
    )
  }
}

export default App
