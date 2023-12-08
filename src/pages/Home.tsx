import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const Navegar = ()=>{
  navigate('/about')

  }

  return ( 
    <>
      <h2>Home</h2>
      <button onClick={Navegar}>Viajar a About</button>
    </>
   );
}
 
export default Home;