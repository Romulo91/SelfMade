import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { Component } from 'react';

import Header from './Navbar/Header';
import Landing from '../pages/Landing/Landing';
import SignUp from '../pages/Signup/SignUp';

class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
