// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import News from './components/News';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
            <Route exact path="/" element={<News key="general"/>} />
            <Route exact path="/sports" element={<News key="sports" pageSize={10} category="sports" country="in"/>} />
            <Route exact path="/science" element={<News key="science" pageSize={10} category="science" country="in"/>} />
            <Route exact path="/general" element={<News key="general" pageSize={10} category="general" country="in"/>} />
            <Route exact path="/health" element={<News key="health" pageSize={10} category="health" country="in"/>} />
            <Route exact path="/technology" element={<News key="technology" pageSize={10} category="technology" country="in"/>} />
            <Route exact path="/entertainment" element={<News key="entertainment" pageSize={10} category="entertainment" country="in"/>} />
            <Route exact path="/business" element={<News key="business" pageSize={10} category="business" country="in"/>} />
            <Route exact path="/about" element={<h1>about US</h1>} />
      </Routes>
      
      </BrowserRouter>
      </>
    )
  }
}

