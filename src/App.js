import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import Cars from "./Pages/Car";
import NotFound from "./Pages/NotFound";
import ToDoList from "./Components/ToDoList/ToDoList";
import Auth from "./Pages/Auth";

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path="carros" element={<Cars/>}/>
                <Route path="*" element={<NotFound/>}/>
                <Route path="todolist" element={<ToDoList/>}/>
                <Route path="auth" element={<Auth/>}/>
        </Route>

    </Routes>
  </BrowserRouter>
);
}
export default App;
