import React from 'react';
import logo from './logo.svg';
import './App.css';
import Photos from "./components/Photos";
import Header from "./components/Header"
import Description from "./components/Description";
import LatestWork from "./components/LastestWork";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Photos/>
            <Description/>
            <LatestWork/>
            <Footer/>
        </div>
    );
}

export default App;
