import './App.css';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import React, { useEffect } from "react";
import Mail from './Mail/Mail';
import {
  BrowserRouter as Router,
  Route, 
} from "react-router-dom";
import EmailList from './EmailList/EmailList';
import SendMail from './SendMail/SendMail';
import { useDispatch, useSelector } from 'react-redux';
import {  selectSendMessageIsOpen } from './features/mailSlice';
import { Routes } from 'react-router';
import { login, selectUser } from './features/userSlice';
import Login from './Login/Login';
import { auth } from './firebase';


function App() {
 
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen)
  const user = useSelector(selectUser)
  const dispatch = useDispatch();

  useEffect(()=>{
  auth.onAuthStateChanged((user) =>{
    if(user){
      dispatch(login({
        displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL
      }))
    }
  })
  },[])

  return (
    
  <Router>
  {!user ?
  (
    <Login />
  )  : (
<div className="App">
    <Header />
      <div className='app-body'>
      
      <Sidebar />
      
      <Routes>
        <Route path='/mail'element={<Mail/>} />

        <Route path='/' element={<EmailList />} />
      </Routes>

     
      </div>
      {sendMessageIsOpen && <SendMail />}
    </div>
   )}

    
    
  </Router> 
 
  
 )
  }

export default App;
