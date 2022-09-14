import Login from './../Components/Auth/Login';
import {useState} from 'react'
import { Button } from "react-bootstrap";
import Registro from '../Components/Auth/Registro';
import Stack from 'react-bootstrap/Stack';
import Col from 'react-bootstrap/Col';

function Auth(){

    const [showRegister,setShowRegister] = useState(false)

   if(!showRegister){
   return <><Login setShowRegister ={setShowRegister}/> 
   </>
   }
   else{
      return <>
  <Registro setShowRegister = {setShowRegister}/>
  
         </> 
   
   }
   
   }
   
   export default Auth;