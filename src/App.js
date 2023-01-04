import React,{useState, useEffect} from "react";
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link,NavLink } from 'react-router-dom'; 
import ProtectedRoute from './Components/Routes/ProtectedRoute';
import AddStudent from './Components/Applications/StudentsInfo/AddStudent';
import DeleteStudent from './Components/Applications/StudentsInfo/DeleteStudent';
import StudentData, { StudentsData } from './Components/Applications/StudentsInfo/StudentsData';
import ViewStudent from './Components/Applications/StudentsInfo/ViewStudent';
import AddParent from './Components/Applications/ParentInfo/AddParent';

import DeleteParent from './Components/Applications/ParentInfo/DeleteParent';

const App = () =>{
  
  return (
    <div className="App Container">
      <h3 className="d-flex justify-content-center m-3">React Js Front End</h3>
      
  <Router>
  <>
      <nav className="navbar navbar-expand-sm bg-light navbar-dark">
        <ul className="navbar-nav">
          <li className="nav-item- m-1">
            <NavLink className="btn btn-light btn-outline-primary" to="/addstudent">
            AddStudent
            </NavLink>
            </li>
            <li className="nav-item- m-1">
            <NavLink className="btn btn-light btn-outline-primary" to="/studentsdata">
            StudentsData
            </NavLink>
            </li>
            <li className="nav-item- m-1">
            <NavLink className="btn btn-light btn-outline-primary" to="/deletestudent">
            DeleteStudent
            </NavLink>
            </li>
            <li className="nav-item- m-1">
            <NavLink className="btn btn-light btn-outline-primary" to="/viewstudent">
            ViewStudent
            </NavLink>
            </li>
        </ul>
      </nav>
      </>
        <Switch>
          <Route path="/addstudent" component={props => <AddStudent {...props} />} />
          <Route path="/studentsdata" component={props => <StudentsData {...props} />} />
          <Route exact path="/deletestudent" component={props => <DeleteStudent {...props} />} />
          <Route exact path="/viewstudent" component={props => <ViewStudent {...props} />}  />
          <ProtectedRoute exact path ="/addparent" component={AddParent} />
          <ProtectedRoute exact path ="/deleteparent" component={DeleteParent} />
        </Switch>
      </Router>
      
      </div>
  );
}

export default App;
