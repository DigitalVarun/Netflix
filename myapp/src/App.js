import Header from "./header"
import Home from "./home"
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import "./app.scss"

function App() {
  return (
    <>
    <Router>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
