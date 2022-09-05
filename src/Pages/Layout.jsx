import { Outlet,Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import mainLogo from'./logo.png';


const Layout =()=>{
    return <>


   
      <Navbar bg="dark" variant="dark" >
        <Container>
        
        <img style={{ width: 150, height:70 }} src={mainLogo} alt="React Logo" />  
     
          <Nav className="me-auto my-2 my-lg-0">
            <Nav.Link><Link to ="/">Home</Link></Nav.Link>
            <Nav.Link><Link to ="/carros">Carros</Link></Nav.Link>
            <Nav.Link><Link to ="/todolist">To do List</Link></Nav.Link>
            <Nav.Link><Link to ="/auth">Login</Link></Nav.Link>

       </Nav>
        </Container>
      </Navbar>

        

 <Outlet/>



    </>
  
}
 
export default Layout;