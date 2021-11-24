import LeftCard from "./components/LeftCard";
import RightCard from "./components/RightCard";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <>
      <div className="container-fluid mainCont">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
            <LeftCard />
          </div>
          <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">
            <RightCard />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
