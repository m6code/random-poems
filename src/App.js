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
import axios from 'axios';


const { Title } = Typography

export class App extends Component {

  state = {
    isLoading: true,
    poems: []
  }

  componentDidMount() {
    this.getPoems()
  }

  getPoems = () => {
    // Make resquest to api | set the queried data to state
    axios.get('https://www.poemist.com/api/v1/randompoems')
      .then((response) => {
        console.log(response.data);
        this.setState({
          poems: response.data,
          isLoading: false
        })
      })
      .catch((error) => {
        console.log(error);
        this.setState({isLoading: true});
      })
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
