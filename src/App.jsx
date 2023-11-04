import { BrowserRouter, Route, Routes } from "react-router-dom";

import { PageProduct } from "./pages/Product"

import './global.css'
import { PageLogin } from "./pages/Login";
import { PageResetPassword } from "./pages/ResetPassword";
import { PageSignIn } from "./pages/SignIn";
import { PageHome } from "./pages/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PageLogin />} exact />
          <Route path="/reset-password" element={<PageResetPassword />} exact />
          <Route path="/sign" element={<PageSignIn />} exact />
          <Route path="/home" element={<PageHome />} exact />
          <Route path="/product" element={<PageProduct />} exact />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
