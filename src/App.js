import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import Cars from "./Pages/Car";
import NotFound from "./Pages/NotFound";


function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path="carros" element={<Cars/>}/>
                <Route path="*" element={<NotFound/>}/>
            
        </Route>

    </Routes>
  </BrowserRouter>
);
}
export default App;
