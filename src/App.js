import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Coursesales from './Coursesales';

class App extends Component {
    render() {
	var courses = [
	    { name: 'iOS Development', price: 199 },
	    { name: 'Security Basics', price: 299 },
	    { name: 'JavaScript Fundamentals', price: 180 },
	    { name: 'React and Redux', price: 190 }
	    ]
	    
    return (
      <div className="App">
	    <Coursesales items={courses} />
      </div>
    );
  }
}

export default App;
