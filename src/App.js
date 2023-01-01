// import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'
import News from './components/News';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

const App =(props)=> {
  const apiKey = process.env.REACT_APP_NEWS_API;
  const [progress, setProgress] = useState(0)
  // state = {
  //   progress: 0
  // }
  // const setProgress = (progress)=>{
    // setState({progress: progress})
    // setProgress(progress)
  // }
    return (
      <>
      
      <BrowserRouter>
      <Navbar/>
      <LoadingBar
        height={4}
        color='#c5c8e2'
        progress={progress}
        />
      <Routes>
            <Route exact path="/" element={<News apiKey={apiKey} setProgress={setProgress} key="general"/>} />
            <Route exact path="/sports" element={<News apiKey={apiKey}  setProgress={setProgress} key="sports" pageSize={10} category="sports" country="in"/>} />
            <Route exact path="/science" element={<News apiKey={apiKey}  setProgress={setProgress} key="science" pageSize={10} category="science" country="in"/>} />
            <Route exact path="/general" element={<News apiKey={apiKey}  setProgress={setProgress} key="general" pageSize={10} category="general" country="in"/>} />
            <Route exact path="/health" element={<News apiKey={apiKey}  setProgress={setProgress} key="health" pageSize={10} category="health" country="in"/>} />
            <Route exact path="/technology" element={<News apiKey={apiKey}  setProgress={setProgress} key="technology" pageSize={10} category="technology" country="in"/>} />
            <Route exact path="/entertainment" element={<News apiKey={apiKey}  setProgress={setProgress} key="entertainment" pageSize={10} category="entertainment" country="in"/>} />
            <Route exact path="/business" element={<News apiKey={apiKey}  setProgress={setProgress} key="business" pageSize={10} category="business" country="in"/>} />
      </Routes>
      
      </BrowserRouter>
      </>
    )
}

export default App;