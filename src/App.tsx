import React from 'react';
import { Routes, Route } from 'react-router';
import './App.css';
import Login from './Pages/Login';
import Student from './Pages/Student';
import NewPresence from './Pages/NewPresence';
import List from './Pages/Liste';

function App() {
  /*const mock = {
    'firstName': 'string',
    'lastName': 'string',
    'name': 'string',
    'teacher': {
      'lastName':'string',
      'firstName': 'string'
    }*/
  
  return (
      
    <>
      <Routes>
        <Route index element={<Login/>} />
        <Route element={<Student/>} path="/student"/>
        <Route element={<NewPresence/>} path="/presence"/>
        <Route element={<List/>} path="/list"/>
      </Routes>
    </>
  );
}

export default App;
