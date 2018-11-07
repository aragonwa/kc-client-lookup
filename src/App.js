import React, { Component } from 'react';
import Routes from './routes';
import Header from './Header';
import Footer from './Footer';
import '../node_modules/reset-css/reset.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        {/* Example content */}
        <main>
          <Routes />
        </main>
      <Footer />
      </div>
    );
  }
}

export default App;
