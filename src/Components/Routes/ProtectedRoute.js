import React, { Component } from "react";
import {Redirect,Route } from "react-router-dom";

const ProtectedRoute = ({component: Component, ...restOfProps}) =>{
    return( <Route 
        {...restOfProps}
        render = {(props) =>
        <Component {...props} /> } />
    );
}
export default ProtectedRoute;