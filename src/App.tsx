import {Routes, Route} from "react-router-dom"
import RequireAuth from "./components/RequireAuth"
import Layout from "./components/Layout"
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import About from "./pages/About"
import Books from "./pages/Books";
import AddBook from "./pages/AddBook";
import EditBook from "./pages/EditBook"
function App() {

  return (
    <>
      <Layout/>
      <h4 className="text-center p-3 fs-1 m-0 bg-dark text-light ">Librería Online Mcga</h4>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/books" element={<RequireAuth><Books/></RequireAuth>}></Route>
        <Route path="/books/add" element={<RequireAuth><AddBook/></RequireAuth>}></Route>
        <Route path="/books/edit/:id" element={<RequireAuth><EditBook/></RequireAuth>}></Route>
      </Routes>
    </>
  )
}

export default App
