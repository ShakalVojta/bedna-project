import './App.css'
import Header from "./components/Header/Header.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { BrowserRouter as Router } from 'react-router-dom';

function App() {


  return (
    <>
        <Router>
     <Header />
        <main>
        <HomePage />
        </main>
        <Footer />
        </Router>
    </>
  )
}

export default App
