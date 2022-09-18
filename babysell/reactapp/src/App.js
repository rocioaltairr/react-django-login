import logo from './logo.svg';
import './App.css';
import React from "react";
import Product from "./components/product";
import Profile from "./components/profile";
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from "react-redux";
import userSlice from "./store/userSlice";

const store = configureStore({
   reducer : {
    // key : value
    user : userSlice
   }
})

const App = () => {
	return(
    <Provider store={store}>
	    <div className = "App">
        <header>
          <img src={logo} className="App-logo" alt="logo" />
        </header>
          <Profile/>
      </div>
    </Provider>
	);
}


export default App
