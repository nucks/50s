import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Analytics from './components/analytics/Analytics';
import Leaderboard from './components/leaderboard/Leaderboard';

class App extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      page: 1
    }
    this.changePage = this.changePage.bind( this );
    this.turnOnReminders = this.turnOnReminders.bind( this );
  }
  changePage( num ) {
    this.setState( { page: num } );
  }
  turnOnReminders() {

  }
  render() {
    return (
        <div className="App-container">
          <Navbar />
          { <div className="Home-container" className="Home-google-form" style={{display: this.state.page === 1 ? "block" : "none"}}>
              <iframe className="Home-google-form" src="https://docs.google.com/forms/d/e/1FAIpQLSfVl3pzu4Unwde43IvYFxY3Uu7YluNjAokpBAVWyx8uK0v_ZA/viewform?embedded=true">Loading...</iframe>
          </div> }
          { <iframe className="Analytics-iframe" style={{display: this.state.page === 2 ? "block" : "none"}} src="https://docs.google.com/spreadsheets/d/19vPgVhWyjyGW5-m-wbOkdigUntPnAe3w3w_Vkp3adJI/pubhtml?gid=407975155&amp;single=true&amp;widget=true&amp;headers=false"></iframe> }
          { <iframe className="Analytics-iframe" style={{display: this.state.page === 3 ? "block" : "none"}} src="https://docs.google.com/spreadsheets/d/19vPgVhWyjyGW5-m-wbOkdigUntPnAe3w3w_Vkp3adJI/pubhtml?gid=1911393012&amp;single=true&amp;widget=true&amp;headers=false"></iframe> }
          { <div className="Home-google-form get-motivation" style={{display: this.state.page === 4 ? "block" : "none"}}>
              <a href="sms:/18018210113/&body=I need a little motivation today."><button>Get Motivation</button></a>
          </div> }
          <Footer changePage={ this.changePage } active={ this.state.page } />
        </div>
    );
  }
}

export default App;
