import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css"
import { ContainerStyled } from "./components/styles/Container.styled";
import Nav from "./components/Nav";
import { HeaderStyled } from "./components/styles/Header.styled";
import Footer from "./components/Footer";
import Home from "./components/Home";
import StarShips from "./components/StarShips";
import Pilots from "./components/Pilots";


function App() {
  return (
    <>
      <Router>
        <ContainerStyled >
          <Nav />
          <HeaderStyled>
            
            <Routes>
              <Route path="/" exact element={ <Home /> } />
              <Route path="/StarShips" exact element={ <StarShips /> } />
              <Route path="/Pilots" exact element={ <Pilots /> } />

            </Routes>
            
          </HeaderStyled>
          <Footer />
        </ContainerStyled>
      </Router>
    </>
  );
}

export default App;
