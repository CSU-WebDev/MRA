import Header from "./components/Header";
import Footer from "./components/Footer";
import Line from "./components/Line";
import React,{useState} from "react";

function App() {
  const [data, setdata] = useState('');
  return (
    <div className="App">
      <Line />
      <Header setdata={setdata}  />
      <Footer />
    </div>
  );
}

export default App;
