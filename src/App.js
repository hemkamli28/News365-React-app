// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import News from './components/News';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {
  apiKey = process.env.REACT_APP_NEWS_API
  state = {
    progress: 0
  }

  setProgress = (progress)=>{
    this.setState({progress: progress})
  }
  render() {
    return (
      <>
      
      <BrowserRouter>
      <Navbar/>
      <LoadingBar
        height={4}
        color='#c5c8e2'
        progress={this.state.progress}
        />
      <Routes>
            <Route exact path="/" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="general"/>} />
            <Route exact path="/sports" element={<News apiKey={this.apiKey}  setProgress={this.setProgress} key="sports" pageSize={10} category="sports" country="in"/>} />
            <Route exact path="/science" element={<News apiKey={this.apiKey}  setProgress={this.setProgress} key="science" pageSize={10} category="science" country="in"/>} />
            <Route exact path="/general" element={<News apiKey={this.apiKey}  setProgress={this.setProgress} key="general" pageSize={10} category="general" country="in"/>} />
            <Route exact path="/health" element={<News apiKey={this.apiKey}  setProgress={this.setProgress} key="health" pageSize={10} category="health" country="in"/>} />
            <Route exact path="/technology" element={<News apiKey={this.apiKey}  setProgress={this.setProgress} key="technology" pageSize={10} category="technology" country="in"/>} />
            <Route exact path="/entertainment" element={<News apiKey={this.apiKey}  setProgress={this.setProgress} key="entertainment" pageSize={10} category="entertainment" country="in"/>} />
            <Route exact path="/business" element={<News apiKey={this.apiKey}  setProgress={this.setProgress} key="business" pageSize={10} category="business" country="in"/>} />
      </Routes>
      
      </BrowserRouter>
      </>
    )
  }
}

