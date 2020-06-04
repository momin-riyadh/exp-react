import React from 'react';
// import logo from './assets/images/logo.svg';
// import chrome from './assets/images/chrome.svg';
// import spotify from './assets/images/spotify.svg';
import Card from './Card';
import './assets/css/main.css';

function App() {
    return (
        <div className="App">
            <Card cardColor="red" height={100}/>
            <Card cardColor="coral" height={100}/>
            <Card cardColor="green" height={100}/>
        </div>

    );
}

export default App;
