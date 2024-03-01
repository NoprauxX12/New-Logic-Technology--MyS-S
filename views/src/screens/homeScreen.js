import React from 'react';
import Navbar from '../includes/Navbar';
import ClientsMainContainer from '../includes/mainContainer';
import "../styles/items.css";

function HomeScreen() {
  return (
    <div>
      <Navbar/>
      <h2 style={{margin: "20px"}}>explora todos los freelancers en: <span style={{color: "#3D00B7"}}>Medellin</span></h2>
      <ClientsMainContainer/>
    </div>
  );
}

export default HomeScreen;
