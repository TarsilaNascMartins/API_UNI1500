import { Outlet,Link } from "react-router-dom";
const Layout =()=>{
    return <>

        <nav >
      
       
             
       <ul>
            <li class="nav-item">
            <li><Link to="/">Home</Link></li>
            
            </li>
            <li class="nav-item">
            <li><Link to="/carros">Car</Link></li>
            </li>

            <li><Link to="/todolist">To do List</Link></li>



         </ul>

          <form class="d-flex" role="search">
          <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
            
                
            
       
    </nav>
    
        <Outlet/>
    
    </>
}

export default Layout;