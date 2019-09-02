import React from 'react';
import MapContainer from '../MapContainer/MapContainer';
import SideBar from '../SideBar/SideBar';
import './App.css';

function App() {
  return (
    <div className="main-container">
      <SideBar />      
      <div className="map-container">
        <MapContainer />
      </div>
    </div>
  );
}

export default App;
