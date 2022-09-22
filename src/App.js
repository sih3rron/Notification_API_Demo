import React from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Section from '../components/Section';
import './style.css';

export default function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Section />
    </div>
  );
}
