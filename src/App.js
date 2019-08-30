import React from 'react';
import MapContainer from './MapContainer';
import SideBar from './SideBar';
import './App.css';

function App() {
  return (
    <div className="main-container">
      <SideBar />      
      <MapContainer />
    </div>
  );
}

export default App;
