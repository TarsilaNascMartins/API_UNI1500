import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import Cars from "./Pages/Car";
import NotFound from "./Pages/NotFound";
import ToDoList from "./Components/ToDoList/ToDoList";
import Auth from "./Pages/Auth";
import Moeda from "./Pages/Moeda";
import ContasContabeis from "./Pages/ContasContabeis";
import Clientes from "./Pages/Clientes";
import Funcionario from "./Pages/Funcionarios";
import Transacoes from "./Pages/Transacoes";
import Bancos from "./Pages/Banco";
import Projetos from "./Pages/Projetos";

function App() {
  return <>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path="carros" element={<Cars/>}/>
                <Route path="*" element={<NotFound/>}/>
                <Route path="todolist" element={<ToDoList/>}/>
                <Route path="auth" element={<Auth/>}/>
                <Route path="moeda" element={<Moeda/>}/>
                <Route path="contasContabeis" element={<ContasContabeis/>}/>
                <Route path="cliente" element={<Clientes/>}/>
                <Route path="funcionario" element={<Funcionario/>}/>
                <Route path="transacoes" element={<Transacoes/>}/>
                <Route path="bancos" element={<Bancos/>}/>
                <Route path="projetos" element={<Projetos/>}/>
        </Route>

    </Routes>
  </BrowserRouter>

  </>

}
export default App;
