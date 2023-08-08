import logo from "./logo.svg";
import "./App.css";
import Header from "./components/home/header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePages from "./components/pageConnet/HomePages";
import Footer from "./components/home/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" exact Component={HomePages} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
