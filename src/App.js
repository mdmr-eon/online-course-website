import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Course from './components/Courses/Course';
import './App.css';

function App() {
  return (
    <div className="App">
       <Header></Header>
       <Course></Course>
    </div>
  );
}

export default App;
