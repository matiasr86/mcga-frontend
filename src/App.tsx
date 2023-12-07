import {Routes, Route} from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import About from "./pages/About"
import Books from "./pages/Books";
function App() {

  return (
    <>
      <Layout/>
      <h1>App</h1>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/books" element={<Books/>}></Route>
      </Routes>
    </>
  )
}

export default App
