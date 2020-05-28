import React, { Component } from 'react'
import './App.css'
// eslint-disable-next-line
import {
  Navbar,
  NavbarGroup,
  NavbarHeading,
} from "@blueprintjs/core";
import Poemlist from './components/Poemlist'
import axios from 'axios';


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
        this.setState({ isLoading: true });
      })
  }

  render() {
    return (
      <div className=''>
        <Navbar>
          <NavbarGroup align='left'>
            <NavbarHeading className='nav'><h3 className='bp3-heading'>Random Poems</h3></NavbarHeading>
          </NavbarGroup>
        </Navbar>
        <div className='main'>
          <Poemlist
            poems={this.state.poems}
            loading={this.state.isLoading}
          />
        </div>
      </div>

    )
  }
}

export default App
