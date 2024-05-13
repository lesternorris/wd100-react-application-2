import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./Components/navigationbar";
import Banner from "./img/1.png";
import BodyContent from "./Components/bodycontent";
import Footer from "./Components/footer";


function App() {
  return (
    <div className="App">
      {/* <img src={Banner} alt="" /> */}
      <NavigationBar img={Banner}></NavigationBar>
      <BodyContent></BodyContent>
      <Footer></Footer>
    </div>
  );
}

export default App;
