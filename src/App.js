import "./App.css";
import Search from "./Search";
import Temperature from "./Temperaure";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  return (
    <div className="container">
      <div className="weather-app-wrapper">
        <div className="weather-app">
          <Header />
          <Search />
          <Temperature />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
