import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Card from './components/Card';
import Button from './components/Button';



function App() {
  return (
    <div>

      <Navbar></Navbar>
      <Card name="What is prop ?" des="a prop is a short form of property, and it refers to the mechanism by which data is passed from a parent component to a child component. Props are a fundamental concept in React and other component-based libraries, allowing components to communicate and share data."></Card>

      <Button title="YES"></Button>
      <Button title="NO"></Button>

    </div >
  );
}

export default App;
