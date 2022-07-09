import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Listing from "./components/Listing";
import Trends from "./components/Trends";
import Review from "./components/Review";
import Footer from "./components/Footer";




function App() {
  return (
    <Router>
      <Navbar />
      <Hero />
      <Listing title={"properties in lagos"} />
      <Listing title={"new listings"} />
      <Listing title={"affordable properties"} />
      <Listing title={"new luxury homes"} />
      <Trends />
      <Listing title={"new luxury homes"} />
      <Review />
      <Footer/>
    </Router>
  );
}

export default App;
