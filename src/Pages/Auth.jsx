import Login from './../Components/Auth/Login';
import {useState} from 'react'
import { Button } from "react-bootstrap";
import Registro from '../Components/Auth/Registro';
import Stack from 'react-bootstrap/Stack';
import Col from 'react-bootstrap/Col';

function Auth(){

    const [showRegister,setShowRegister] = useState(false)

   if(!showRegister){

   return <><Login/> 

<p><Stack gap={2} className="col-md-5 mx-auto">
   <Button variant="success" onClick={()=>setShowRegister(!showRegister)}>Cadastrar nova conta</Button></Stack></p>

   </>
   }
   else{
      return <>
  
  <Registro/>
  <p><Stack gap={2} className="col-md-5 mx-auto"> 
   <Button variant="success" onClick={()=>setShowRegister(!showRegister)}>Já possuo cadastro</Button></Stack></p>
   
         </> 
   
   }
   
   }
   
   export default Auth;